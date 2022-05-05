<template>
  <BlockViewer header="Feature" :code="code">
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
      <div class="mb-3 font-bold text-2xl">
        <span class="text-900">One Product, </span>
        <span class="text-blue-600">Many Solutions</span>
      </div>
      <div class="text-700 text-sm mb-6">
        Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.
      </div>

      <div class="grid">
        <div v-for="(feature, index) in features" :key="index" class="col-12 md:col-4 mb-4 px-5">
          <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
            <i :class="`${feature.icon} text-4xl text-blue-500`" />
          </span>
          <div class="text-900 mb-3 font-medium">
            {{ feature.title }}
          </div>
          <span class="text-700 text-sm line-height-3">
            {{ feature.content }}
          </span>
        </div>
      </div>
    </div>
  </BlockViewer>
</template>

<script setup>
const features = [
  {
    icon: 'pi pi-desktop',
    title: 'Built for Developers',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    icon: 'pi pi-lock',
    title: 'End-to-End Encryption',
    content: 'Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.'
  },
  {
    icon: 'pi pi-check-circle',
    title: 'Easy to Use',
    content: 'Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.'
  },
  {
    icon: 'pi pi-check-circle',
    title: 'Fast & Global Support',
    content: 'Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.'
  },
  {
    icon: 'pi pi-github',
    title: 'Open Source',
    content: 'Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat.'
  },
  {
    icon: 'pi pi-shield',
    title: 'Trusted Securitty',
    content: 'Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.'
  }
]

const code = `<div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
  <div class="mb-3 font-bold text-2xl">
    <span class="text-900">One Product, </span>
    <span class="text-blue-600">Many Solutions</span>
  </div>
  <div class="text-700 text-sm mb-6">
    Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.
  </div>

  <div class="grid">
    <div v-for="(feature, index) in features" :key="index" class="col-12 md:col-4 mb-4 px-5">
      <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
        <i :class="\`\${feature.icon} text-4xl text-blue-500\`" />
      </span>
      <div class="text-900 mb-3 font-medium">
        {{ feature.title }}
      </div>
      <span class="text-700 text-sm line-height-3">
        {{ feature.content }}
      </span>
    </div>
  </div>
</div>`
</script>
