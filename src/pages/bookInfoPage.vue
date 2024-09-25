<template>
    <q-card class="cutom-card">
      <q-card-section>
        <q-breadcrumbs>
        <q-breadcrumbs-el label="books" />
        <q-breadcrumbs-el label="Info" />
      </q-breadcrumbs>
        <h4 class="header text-center"><strong>Books Name</strong></h4>
        <q-page class="q-gutter-sm">
          <bookInfoComponent
          />
          <q-btn label="Borrow" color="positive" icon="check"/>
          <q-btn label="Goback" color="negative" icon="arrow_back" @click="goBack"/>
        </q-page>
      </q-card-section>
    </q-card>
  </template>
  
  <script setup lang="ts">
  import bookInfoComponent from '../components/card/bookInfoComponent.vue';
  import { useRouter } from 'vue-router';
  const router = useRouter()

  const goBack = ()=>{
    router.push('/')
  }
  </script>
  
  <style scoped>
  .books {
    background-color: white; /* For visibility during testing */
    transition: box-shadow 0.3s; /* Smooth transition for hover effect */
  }
  
  .books:hover {
    cursor: pointer;
    box-shadow: 0 0 30px rgba(249, 250, 250, 0.7);
    scale: 1.03;
  }
  .search-input{
  margin-bottom: 2%;
  margin-left: 7%;
  color: aqua;
  }
  .search-input, .q-field__native{
  color: aqua;
  }
  @media screen and (max-width: 780px) {
    .cutom-card{
    width: 100%;
    }
  }
  @media screen and (min-width: 780px) {
    .cutom-card{
   margin-left: 15%;
   margin-right: 15%;
    }
  }
  .header{
    color: #068399;
  }
  </style>
  