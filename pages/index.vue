<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <h1 class="text-6xl uppercase max-w-full break-words hyphens-manual">
      Fran&shy;tiškov
        Foto&shy;denník
    </h1>
    
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    >
  </div>
</template>
