<template>
  <div>
    <div class="card mb-0">
      <div class="flex justify-content-between mb-3">
        <div>
          <span class="block text-500 font-medium mb-3">
            <slot name="cardTitle" />
          </span>

          <div class="text-900 font-medium text-xl">
            <slot name="cardBody" />
          </div>
        </div>

        <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
          <slot name="cardIcon" />
        </div>
      </div>

      <slot name="cardFooter" />
    </div>
  </div>
</template>
