import { ref } from '@nuxtjs/composition-api'

export default function () {
  const currentPageReportTemplate = ref('Showing {first} to {last} of {totalRecords}')
  const filter = ref(null)
  const items = ref([])
  const loading = ref(false)
  const rows = ref(5)
  const rowsPerPageOptions = ref([5, 10, 25, 50])

  function getItems () {
  }

  function storeItem () {

  }

  function deleteItem (item) {
  }

  function editItem (item) {
  }

  function showItem (item) {

  }

  return {
    currentPageReportTemplate,
    filter,
    items,
    loading,
    rows,
    rowsPerPageOptions,
    deleteItem,
    storeItem,
    editItem,
    getItems,
    showItem
  }
}
