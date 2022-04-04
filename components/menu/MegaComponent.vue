<template>
  <card-style2-component card-title="MegaMenu">
    <template #cardBody>
      <h5>Horizontal</h5>
      <MegaMenu :model="megamenuItems" />
      <h5>Vertical</h5>
      <MegaMenu :model="megamenuItems" orientation="vertical" />
    </template>
  </card-style2-component>
</template>

<script setup>
const megamenuItems = [
  {
    label: 'Fashion',
    icon: 'pi pi-fw pi-tag',
    items: [
      [
        {
          label: 'Woman',
          items: [{ label: 'Woman Item' }, { label: 'Woman Item' }, { label: 'Woman Item' }]
        },
        {
          label: 'Men',
          items: [{ label: 'Men Item' }, { label: 'Men Item' }, { label: 'Men Item' }]
        }
      ],
      [
        {
          label: 'Kids',
          items: [{ label: 'Kids Item' }, { label: 'Kids Item' }]
        },
        {
          label: 'Luggage',
          items: [{ label: 'Luggage Item' }, { label: 'Luggage Item' }, { label: 'Luggage Item' }]
        }
      ]
    ]
  },
  {
    label: 'Electronics',
    icon: 'pi pi-fw pi-desktop',
    items: [
      [
        {
          label: 'Computer',
          items: [{ label: 'Computer Item' }, { label: 'Computer Item' }]
        },
        {
          label: 'Camcorder',
          items: [{ label: 'Camcorder Item' }, { label: 'Camcorder Item' }, { label: 'Camcorder Item' }]
        }
      ],
      [
        {
          label: 'TV',
          items: [{ label: 'TV Item' }, { label: 'TV Item' }]
        },
        {
          label: 'Audio',
          items: [{ label: 'Audio Item' }, { label: 'Audio Item' }, { label: 'Audio Item' }]
        }
      ],
      [
        {
          label: 'Sports.7',
          items: [{ label: 'Sports.7.1' }, { label: 'Sports.7.2' }]
        }
      ]
    ]
  },
  {
    label: 'Furniture',
    icon: 'pi pi-fw pi-image',
    items: [
      [
        {
          label: 'Living Room',
          items: [{ label: 'Living Room Item' }, { label: 'Living Room Item' }]
        },
        {
          label: 'Kitchen',
          items: [{ label: 'Kitchen Item' }, { label: 'Kitchen Item' }, { label: 'Kitchen Item' }]
        }
      ],
      [
        {
          label: 'Bedroom',
          items: [{ label: 'Bedroom Item' }, { label: 'Bedroom Item' }]
        },
        {
          label: 'Outdoor',
          items: [{ label: 'Outdoor Item' }, { label: 'Outdoor Item' }, { label: 'Outdoor Item' }]
        }
      ]
    ]
  },
  {
    label: 'Sports',
    icon: 'pi pi-fw pi-star',
    items: [
      [
        {
          label: 'Basketball',
          items: [{ label: 'Basketball Item' }, { label: 'Basketball Item' }]
        },
        {
          label: 'Football',
          items: [{ label: 'Football Item' }, { label: 'Football Item' }, { label: 'Football Item' }]
        }
      ],
      [
        {
          label: 'Tennis',
          items: [{ label: 'Tennis Item' }, { label: 'Tennis Item' }]
        }
      ]
    ]
  }
]
</script>
