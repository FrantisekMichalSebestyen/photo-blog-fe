<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="flex flex-col snap-y snap-mandatory overflow-y-scroll h-screen">
    <h1
      class="text-8xl pt-3 font-display uppercase max-w-full break-words hyphens-manual snap-start"
    >
      <span class="animate-font-weight1 header1">Fran&shy;tiškov</span>
      <br />
      <span class="animate-font-weight2 header2">Foto&shy;denník</span>
    </h1>
    <hr class="border-rose-800 border-0.5 my-3" />
    <div class="snap-start min-h-screen">
      <div class="text-4xl underline text-right pb-3">23.07.2024</div>
      <article class="snap-start h-[75vh]">
        <p
          class="first-line:uppercase first-line:tracking-widest first-line:text-rose-500 first-letter:text-7xl first-letter:font-bold first-letter:text-rose-800 first-letter:mr-3 first-letter:float-left"
        >
          Well, let me tell you something, funny boy. Y'know that little stamp,
          the one that says "New York Public Library"? Well that may not mean
          anything to you, but that means a lot to me. One whole hell of a lot.
        </p>
      </article>
    </div>
  </div>
</template>

<style>
.header1 {
  font-variation-settings: 'wdth' 80.5, 'wght' 500;
}

.header2 {
  font-variation-settings: 'wdth' 80.5, 'wght' 800;
}

</style>