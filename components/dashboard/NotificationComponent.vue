<template>
  <card-style2-component card-title="Notifications">
    <template #cardBody>
      <div v-for="(notification, index) in notifications" :key="index">
        <span class="block text-600 font-medium mb-3">{{ notification.title }}</span>

        <ul class="p-0 mx-0 mt-0 mb-4 list-none">
          <li v-for="(content, index2) in notification.content" :key="index2" class="flex align-items-center py-2 border-bottom-1 surface-border">
            <div :class="`w-3rem h-3rem flex align-items-center justify-content-center bg-${content.color}-100 border-circle mr-3 flex-shrink-0`">
              <i :class="`pi ${content.icon} text-xl text-${content.color}-500`" />
            </div>

            <span class="text-900 line-height-3">
              {{ content.description }}
            </span>
          </li>
        </ul>
      </div>
    </template>
  </card-style2-component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const notifications = ref([
  {
    title: 'TODAY',
    content: [
      {
        color: 'blue',
        icon: 'pi-dollar',
        description: 'Richard Jones has purchased a blue t-shirt for 79$'
      },
      {
        color: 'orange',
        icon: 'pi-download',
        description: 'Your request for withdrawal of 2500$ has been initiated.'
      }
    ]
  },
  {
    title: 'YESTERDAY',
    content: [
      {
        color: 'blue',
        icon: 'pi-dollar',
        description: 'Keyser Wick has purchased a black jacket for 59$'
      },
      {
        color: 'pink',
        icon: 'pi-question',
        description: 'Jane Davis has posted a new questions about your product.'
      }
    ]
  }
])
</script>
