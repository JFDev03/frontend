<template>
    <div>
      <q-card class="my-card">
        <q-card-section class="row q-gutter-md">
            <q-btn flat round color="red" icon="favorite" class="favorite-button" />
          <q-img
            class="col-12 col-md-5 col-lg-7"
            src="https://cdn.quasar.dev/img/parallax1.jpg"
            alt="Image"
          />
  
          <q-card-section class="col-12 col-md-6 col-lg-4">
            <p>{{ lorem }}</p>
          </q-card-section>
        </q-card-section>
  
        <q-separator />
  
        <q-card-actions>
          <div class="genre">Genre</div>
        </q-card-actions>
      </q-card>
    </div>
  </template>
  
  <script setup lang="ts">
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  </script>
  
  <style scoped>
  .genre {
    font-weight: bold; /* Optional styling for genre */
  }
  .favorite-button{
  margin-left: 95%;
}
  </style>
  