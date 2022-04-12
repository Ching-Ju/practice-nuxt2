<template>
  <card-style2-component card-title="Skeleton">
    <template #cardBody>
      <div class="border-round border-1 surface-border p-4">
        <div class="flex mb-3">
          <Skeleton shape="circle" size="4rem" class="mr-2" />
          <div>
            <Skeleton width="10rem" class="mb-2" />
            <Skeleton width="5rem" class="mb-2" />
            <Skeleton height=".5rem" />
          </div>
        </div>

        <Skeleton width="100%" height="150px" />
        <div class="flex justify-content-between mt-3">
          <Skeleton width="4rem" height="2rem" />
          <Skeleton width="4rem" height="2rem" />
        </div>
      </div>
    </template>
  </card-style2-component>
</template>
