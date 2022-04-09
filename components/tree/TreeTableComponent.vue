<template>
  <card-style2-component card-title="TreeTable">
    <template #cardBody>
      <TreeTable :selection-keys.sync="selectedTreeTableValue" :value="treeTableValue" selection-mode="checkbox">
        <template #header>
          FileSystem
        </template>

        <Column field="name" header="Name" :expander="true" />
        <Column field="size" header="Size" />
        <Column field="type" header="Type" />
      </TreeTable>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const selectedTreeTableValue = ref(null)
const treeTableValue = ref([
  {
    key: '0',
    data: {
      name: 'Applications',
      size: '100kb',
      type: 'Folder'
    },
    children: [
      {
        key: '0-0',
        data: {
          name: 'Vue',
          size: '25kb',
          type: 'Folder'
        },
        children: [
          {
            key: '0-0-0',
            data: {
              name: 'Vue.app',
              size: '10kb',
              type: 'Application'
            }
          },
          {
            key: '0-0-1',
            data: {
              name: 'native.app',
              size: '10kb',
              type: 'Application'
            }
          },
          {
            key: '0-0-2',
            data: {
              name: 'mobile.app',
              size: '5kb',
              type: 'Application'
            }
          }
        ]
      },
      {
        key: '0-1',
        data: {
          name: 'editor.app',
          size: '25kb',
          type: 'Application'
        }
      },
      {
        key: '0-2',
        data: {
          name: 'settings.app',
          size: '50kb',
          type: 'Application'
        }
      }
    ]
  },
  {
    key: '1',
    data: {
      name: 'Cloud',
      size: '20kb',
      type: 'Folder'
    },
    children: [
      {
        key: '1-0',
        data: {
          name: 'backup-1.zip',
          size: '10kb',
          type: 'Zip'
        }
      },
      {
        key: '1-1',
        data: {
          name: 'backup-2.zip',
          size: '10kb',
          type: 'Zip'
        }
      }
    ]
  }
])
</script>
