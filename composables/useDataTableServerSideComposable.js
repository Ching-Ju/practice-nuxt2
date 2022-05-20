import { ref, useContext } from '@nuxtjs/composition-api'
import useItemComposable from '~/composables/useItemComposable'

export default function () {
  const { items, deleteItem, setItem, setItems } = useItemComposable()
  const apiFetch = useContext().$apiFetch
  const apiUrl = ref(null)
  const dataTableParameter = ref({
    page: 1,
    first: 0,
    rows: 15,
    sortField: 'id',
    sortOrder: 1
  })
  const editedItemIndex = ref(-1)
  const error = ref(null)
  const filter = ref(null)
  const loading = ref(false)
  const rowsPerPageOptions = ref([15, 30, 50])
  const totalRecords = ref(null)

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

  function setEditItemIndex (value) {
    editedItemIndex.value = value
  }

  function storeItem () {

  }

  function onDelete () {
    loading.value = true

    // await apiFetch.$delete(apiUrl.value)
    //   .then((response) => {

    //   }).catch((e) => {
    //     error.value = e
    //   })
    deleteItem(editedItemIndex.value)

    loading.value = false
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
    error,
    filter,
    items,
    loading,
    rowsPerPageOptions,
    totalRecords,
    onDelete,
    editItem,
    getItems,
    onPage,
    onSort,
    setApiUrl,
    setEditItemIndex,
    setDataTableParameter,
    showItem,
    storeItem
  }
}
