<template>
  <div>
    Dashboard {{ $config.appName }}
    {{ $store.getters['appState/logoColor'] }}
  </div>
</template>
