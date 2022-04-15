<template>
  <CardStyle2Component card-title="Pricing">
    <template #cardBody>
      <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <div class="text-900 font-bold text-6xl mb-4 text-center">
          Pricing Plans
        </div>
        <div class="text-700 text-xl mb-6 text-center line-height-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.
        </div>

        <div class="grid">
          <div v-for="(plan, index) in plans" :key="index" class="col-12 lg:col-4">
            <div class="p-3 h-full">
              <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                <div class="text-900 font-medium text-xl mb-2">
                  {{ plan.title }}
                </div>
                <div class="text-600">
                  {{ plan.description }}
                </div>
                <hr class="my-3 mx-0 border-top-1 border-none surface-border">
                <div class="flex align-items-center">
                  <span class="font-bold text-2xl text-900">
                    $ {{ plan.price }}
                  </span>
                  <span class="ml-2 font-medium text-600">
                    per month
                  </span>
                </div>
                <hr class="my-3 mx-0 border-top-1 border-none surface-border">
                <ul class="list-none p-0 m-0 flex-grow-1">
                  <li v-for="(feature, index2) in plan.features" :key="index2" class="flex align-items-center mb-3">
                    <i class="pi pi-check-circle text-green-500 mr-2" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
                <hr class="mb-3 mx-0 border-top-1 border-none surface-border mt-auto">
                <Button label="Buy Now" class="p-3 w-full mt-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </CardStyle2Component>
</template>

<script setup>
const plans = [
  {
    title: 'Basic',
    description: 'Basic description',
    pricing: 9,
    features: [
      'Arcu vitae elementum',
      'Dui faucibus in ornare',
      'Morbi tincidunt augue'
    ]
  },
  {
    title: 'Premium',
    description: 'Basic description',
    pricing: 9,
    features: [
      'Arcu vitae elementum',
      'Dui faucibus in ornare',
      'Morbi tincidunt augue',
      'Duis ultricies lacus sed'
    ]
  },
  {
    title: 'Enterprise',
    description: 'Basic description',
    pricing: 49,
    features: [
      'Arcu vitae elementum',
      'Dui faucibus in ornare',
      'Morbi tincidunt augue',
      'Duis ultricies lacus sed',
      'Imperdiet proin',
      'Nisi scelerisque'
    ]
  }
]
</script>
