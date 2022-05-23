import { ref } from '@nuxtjs/composition-api'

export default function () {
  const item = ref({})
  const items = ref([])

  function createItem (item) {
    items.value.unshift(item)
  }

  function deleteItem (index) {
    items.value.splice(index, 1)
  }

  function setItem (value) {
    item.value = value
  }

  function setItems (value) {
    items.value = value
  }

  function updateItem (item, index) {
    Object.assign(items.value[index], item)
  }

  return {
    item,
    items,
    createItem,
    deleteItem,
    setItem,
    setItems,
    updateItem
  }
}
