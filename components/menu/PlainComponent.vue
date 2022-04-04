<template>
  <card-style2-component card-title="Plain Menu">
    <template #cardBody>
      <Menu :model="menuitems" />
    </template>
  </card-style2-component>
</template>

<script setup>
const menuitems = [
  {
    label: 'Customers',
    icon: 'pi pi-fw pi-table',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-user-plus',
        items: [
          {
            label: 'Customer',
            icon: 'pi pi-fw pi-plus'
          },
          {
            label: 'Duplicate',
            icon: 'pi pi-fw pi-copy'
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-user-edit'
      }
    ]
  },
  {
    label: 'Orders',
    icon: 'pi pi-fw pi-shopping-cart',
    items: [
      {
        label: 'View',
        icon: 'pi pi-fw pi-list'
      },
      {
        label: 'Search',
        icon: 'pi pi-fw pi-search'
      }
    ]
  },
  {
    label: 'Quit',
    icon: 'pi pi-fw pi-sign-out'
  }
]
</script>
