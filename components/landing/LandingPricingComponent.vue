<template>
  <div id="pricing" class="py-4 px-4 lg:px-8 my-2 md:my-4">
    <div class="text-center">
      <h2 class="text-900 font-normal mb-2">
        Matchless Pricing
      </h2>
      <span class="text-600 text-2xl">Amet consectetur adipiscing elit...</span>
    </div>

    <div class="grid justify-content-between mt-8 md:mt-0">
      <div v-for="(plan, index) in plans" :key="index" class="col-12 lg:col-4 p-0 md:p-3">
        <div class="p-3 flex flex-column border-200 hover:border-cyan-200" style="border:2px solid; border-radius:10px;">
          <h3 class="text-900 text-center">
            {{ plan.title }}
          </h3>
          <img :src="plan.image" class="w-10 h-10 mx-auto" alt="">
          <div class="my-5 text-center">
            <span class="text-5xl font-bold mr-2 text-900">$ {{ plan.pricing }}</span>
            <span class="text-600">per month</span>
            <Button label="Get Started" class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light text-white line-height-2 bg-blue-500" />
          </div>
          <Divider class="w-full bg-surface-200" />
          <ul class="my-5 list-none p-0 flex text-900 flex-column">
            <li v-for="(feater, index2) in plan.features" :key="index2" class="py-2">
              <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2" />
              <span class="text-xl line-height-3">{{ feater }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const plans = [
  {
    title: 'Free',
    buttonLabel: 'Get Started',
    image: 'layout/images/asset-tier-1.svg',
    pricing: 0,
    features: [
      'Responsive Layout',
      'Unlimited Push Messages',
      '50 Support Ticket',
      'Free Shipping'
    ]
  },
  {
    title: 'Startup',
    buttonLabel: 'Try Free',
    image: 'layout/images/asset-tier-2.svg',
    pricing: 1,
    features: [
      'Responsive Layout',
      'Unlimited Push Messages',
      '50 Support Ticket',
      'Free Shipping'
    ]
  },
  {
    title: 'Enterprise',
    buttonLabel: 'Get a Quote',
    image: 'layout/images/asset-tier-3.svg',
    pricing: 999,
    features: [
      'Responsive Layout',
      'Unlimited Push Messages',
      '50 Support Ticket',
      'Free Shipping'
    ]
  }
]
</script>
