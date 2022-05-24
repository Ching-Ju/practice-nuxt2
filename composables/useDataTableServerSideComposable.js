import { ref, useContext, watch } from '@nuxtjs/composition-api'
import findIndex from 'lodash/findIndex'
import { FilterMatchMode } from 'primevue/api'
import useItemComposable from '~/composables/useItemComposable'

export default function () {
  const { item, items, createItem, deleteItem, setItem, setItems, updateItem } = useItemComposable()
  const apiFetch = useContext().$apiFetch
  const apiUrl = ref(null)
  const dialog = ref(false)
  const dialogDelete = ref(false)
  const id = ref('id')
  const dataTableParameter = ref({
    page: 1,
    first: 0,
    rows: 15,
    sortField: id.value,
    sortOrder: 1
  })
  const editedIndex = ref(-1)
  const error = ref(null)
  const errors = ref({})
  const filters = ref({
    global: { value: '', matchMode: FilterMatchMode.CONTAINS },
    created_at: { value: null, matchMode: FilterMatchMode.EQUALS },
    updated_at: { value: null, matchMode: FilterMatchMode.EQUALS }
  })
  const loading = ref(false)
  const rowsPerPageOptions = ref([15, 30, 50])
  const totalRecords = ref(null)

  function closeDialog () {
    dialog.value = false
    setErrors({})
    setItem({})
  }

  async function deleteConfirm () {
    loading.value = true

    await apiFetch.$delete(`${apiUrl.value}/${items.value[editedIndex.value][id.value]}`)
      .then((response) => {
        deleteItem(editedIndex.value)
      }).catch((e) => {
        setError(e)
      })

    loading.value = false
  }

  async function editItem () {
    loading.value = true

    await apiFetch.$patch(`${apiUrl.value}/${items.value[editedIndex.value][id.value]}`, item.value)
      .then((response) => {
        updateItem(response.data, editedIndex.value)
        closeDialog()
      }).catch((e) => {
        if (e.response.status === 422) {
          setErrors(e.response.data.errors)
        } else {
          error.value = e
        }
      })

    loading.value = false
  }

  async function getItem () {
    loading.value = true

    await apiFetch.$get(`${apiUrl.value}/${items.value[editedIndex.value][id.value]}`)
      .then((response) => {
        setItem(response.data)
      }).catch((e) => {
        setError(e)
      })

    loading.value = false
  }

  async function getItems () {
    loading.value = true

    await apiFetch.$get(apiUrl.value, { params: Object.assign({}, dataTableParameter.value, filters.value) })
      .then((response) => {
        setItems(response.data)
        totalRecords.value = response.meta.total
      }).catch((e) => {
        setError(e)
      })

    loading.value = false
  }

  function setApiUrl (value) {
    apiUrl.value = value
  }

  function setEditedIndex (value) {
    editedIndex.value = value
  }

  function setError (value) {
    error.value = value
  }

  function setErrors (value) {
    errors.value = value
  }

  function setId (value) {
    id.value = value
  }

  async function storeItem () {
    loading.value = true

    await apiFetch.$post(apiUrl.value, item.value)
      .then((response) => {
        createItem(response.data)
        closeDialog()
      }).catch((e) => {
        if (e.response.status === 422) {
          setErrors(e.response.data.errors)
        } else {
          error.value = e
        }
      })

    loading.value = false
  }

  function onCreate () {
    setEditedIndex(-1)
    dialog.value = true
  }

  function onDelete (item) {
    setEditedIndex(findIndex(items.value, { [id.value]: item[id.value] }))
    dialogDelete.value = true
  }

  async function onEdit (item) {
    setEditedIndex(findIndex(items.value, { [id.value]: item[id.value] }))
    await getItem()
    dialog.value = true
  }

  function onPage (value) {
    value.page++
    setDataTableParameter(value)
  }

  function onSave () {
    if (editedIndex.value < 0) {
      storeItem()
    } else {
      editItem()
    }
  }

  function onSort (value) {
    setDataTableParameter(Object.assign({}, value, { page: 1 }))
  }

  function setDataTableParameter (value) {
    dataTableParameter.value = value
    getItems()
  }

  watch(dialog, (value) => {
    value || closeDialog()
  })

  watch(filters, () => {
    getItems()
  })

  return {
    dataTableParameter,
    dialog,
    dialogDelete,
    error,
    errors,
    filters,
    item,
    items,
    loading,
    rowsPerPageOptions,
    totalRecords,
    deleteConfirm,
    getItems,
    onCreate,
    onDelete,
    onEdit,
    onPage,
    onSave,
    onSort,
    setApiUrl,
    setId,
    storeItem
  }
}
