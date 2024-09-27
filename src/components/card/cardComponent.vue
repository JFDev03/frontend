<template>
    <q-card class="my-card text-black" flat bordered>
      <q-card-section horizontal>
        <img
          class="col"
          :src="getImage(props.book.book_image)"
        />
  
      </q-card-section>
      <q-card-section>
        {{ props.book.book_name }}
      </q-card-section>
    </q-card>
  </template>
  
  <script setup lang="ts">
  import { getImage } from 'src/services/api.services';
import { BooksDataT } from '../models';
  import { PropType } from 'vue';
  const props = defineProps({
    book: {
      type:Object as PropType<BooksDataT>,
        required: true
    }
  });
  </script>
  <style scoped>
</style>
  