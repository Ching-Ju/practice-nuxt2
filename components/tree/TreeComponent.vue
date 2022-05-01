<template>
  <BlockViewer header="Tree" :code="code">
    <Tree :value="treeValue" selection-mode="checkbox" :selection-keys.sync="selectedTreeValue" />
  </BlockViewer>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const selectedTreeValue = ref(null)
const treeValue = ref([
  {
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
      {
        key: '0-0',
        label: 'Work',
        data: 'Work Folder',
        icon: 'pi pi-fw pi-cog',
        children: [
          { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
          { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
        ]
      },
      {
        key: '0-1',
        label: 'Home',
        data: 'Home Folder',
        icon: 'pi pi-fw pi-home',
        children: [
          { key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }
        ]
      }]
  },
  {
    key: '1',
    label: 'Events',
    data: 'Events Folder',
    icon: 'pi pi-fw pi-calendar',
    children: [
      { key: '1-0', label: 'Meeting', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
      { key: '1-1', label: 'Product Launch', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch' },
      { key: '1-2', label: 'Report Review', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' }]
  }
])

const code = `<Tree :value="treeValue" selection-mode="checkbox" :selection-keys.sync="selectedTreeValue" />

const selectedTreeValue = ref(null)
const treeValue = ref([
  {
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
      {
        key: '0-0',
        label: 'Work',
        data: 'Work Folder',
        icon: 'pi pi-fw pi-cog',
        children: [
          { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
          { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
        ]
      },
      {
        key: '0-1',
        label: 'Home',
        data: 'Home Folder',
        icon: 'pi pi-fw pi-home',
        children: [
          { key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }
        ]
      }]
  },
  {
    key: '1',
    label: 'Events',
    data: 'Events Folder',
    icon: 'pi pi-fw pi-calendar',
    children: [
      { key: '1-0', label: 'Meeting', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
      { key: '1-1', label: 'Product Launch', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch' },
      { key: '1-2', label: 'Report Review', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' }]
  }
])`
</script>
