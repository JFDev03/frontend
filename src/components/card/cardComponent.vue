<template>
    <q-card class="my-card text-black" flat bordered height="10%" width="10%">
      <q-card-section horizontal>
        <img
          class="col"
          src="https://cdn.quasar.dev/img/mountains.jpg"
        />
  
      </q-card-section>
      <q-card-section>
        {{ props.n }}
      </q-card-section>
    </q-card>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    n: {
      type: Number,
      default: 0 // Corrected the typo here
    }
  });
  </script>
  <style scoped>
</style>
  