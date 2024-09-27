<template>
    <div>
      <q-card class="my-card">
        <q-card-section class="row q-gutter-md">
          <q-img
            class="col-12 col-md-5 col-lg-7"
            :src="getImage(props.book.book_image)"
            alt="Image"
          />
  
          <q-card-section class="col-12 col-md-6 col-lg-4">
            <p>{{ props.book.book_desc }}</p>
          </q-card-section>
        </q-card-section>
  
        <q-separator />
  
        <q-card-actions>
          <div class="genre">{{ props.book.genre }}</div>
        </q-card-actions>
      </q-card>
    </div>
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
  .genre {
    font-weight: bold; /* Optional styling for genre */
  }
  .favorite-button{
  margin-left: 95%;
}
  </style>
  