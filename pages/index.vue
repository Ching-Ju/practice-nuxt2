<template>
  <div class="grid">
    <dashboard-order-component
      class="col-12 lg:col-6 xl:col-3"
    />

    <dashboard-revenue-component
      class="col-12 lg:col-6 xl:col-3"
    />

    <dashboard-customer-component
      class="col-12 lg:col-6 xl:col-3"
    />

    <dashboard-comment-component
      class="col-12 lg:col-6 xl:col-3"
    />

    <div class="col-12 xl:col-6">
      <dashboard-recent-sale-component />

      <dashboard-best-selling-product-component />
    </div>
  </div>
</template>
