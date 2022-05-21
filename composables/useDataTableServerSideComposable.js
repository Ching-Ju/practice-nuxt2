import { ref, useContext } from '@nuxtjs/composition-api'
import findIndex from 'lodash/findIndex'
import useItemComposable from '~/composables/useItemComposable'

export default function () {
  const { items, deleteItem, setItem, setItems } = useItemComposable()
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
  const filter = ref(null)
  const loading = ref(false)
  const rowsPerPageOptions = ref([15, 30, 50])
  const totalRecords = ref(null)

  async function deleteConfirm () {
    loading.value = true

    await apiFetch.$delete(`${apiUrl.value}/${items.value[editedIndex.value][id.value]}`)
      .then((response) => {
        deleteItem(editedIndex.value)
      }).catch((e) => {
        error.value = e
      })

    loading.value = false
  }

  async function getItem (itemId) {
    loading.value = true

    await apiFetch.$get(`${apiUrl.value}/${itemId}`)
      .then((response) => {
        setItem(response.data)
      }).catch((e) => {
        error.value = e
      })

    loading.value = false
  }

  async function getItems () {
    loading.value = true

    await apiFetch.$get(apiUrl.value, { params: dataTableParameter.value })
      .then((response) => {
        setItems(response.data)
        totalRecords.value = response.meta.total
      }).catch((e) => {
        error.value = e
      })

    loading.value = false
  }

  function setApiUrl (value) {
    apiUrl.value = value
  }

  function setEditedIndex (item) {
    editedIndex.value = findIndex(items.value, { [id.value]: item[id.value] })
  }

  function setId (value) {
    id.value = value
  }

  function storeItem () {

  }

  function onDelete (item) {
    dialogDelete.value = true
    setEditedIndex(item)
  }

  async function editItem (itemId) {
    await getItem(itemId)
  }

  function showItem (item) {}

  function onPage (value) {
    value.page++
    setDataTableParameter(value)
  }

  function onSort (value) {
    setDataTableParameter(Object.assign({}, value, { page: 1 }))
  }

  function setDataTableParameter (value) {
    dataTableParameter.value = value
    getItems()
  }

  return {
    dataTableParameter,
    dialog,
    dialogDelete,
    error,
    filter,
    items,
    loading,
    rowsPerPageOptions,
    totalRecords,
    deleteConfirm,
    editItem,
    getItems,
    onDelete,
    onPage,
    onSort,
    setApiUrl,
    setId,
    setDataTableParameter,
    showItem,
    storeItem
  }
}
