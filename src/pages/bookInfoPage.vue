<template>
    <q-card class="cutom-card">
      <q-card-section>
        <q-breadcrumbs>
        <q-breadcrumbs-el label="books" />
        <q-breadcrumbs-el label="Info" />
      </q-breadcrumbs>
        <h4 class="header text-center"><strong>{{ book?.book_name }}</strong></h4>
        <q-page class="q-gutter-sm">
          <bookInfoComponent
          :book="book"
          />
          <q-btn label="Borrow" color="positive" icon="check" @click="handleBorrowBook"/>
          <q-btn label="Goback" color="negative" icon="arrow_back" @click="goBack"/>
        </q-page>
      </q-card-section>
    </q-card>
  </template>
  
  <script setup lang="ts">
  import {ref,onMounted,onUnmounted} from 'vue'
  import bookInfoComponent from '../components/card/bookInfoComponent.vue';
  import { useRouter,useRoute } from 'vue-router';
  import {borrowBook, getBook} from 'src/services/api.services'
import { BooksDataT } from 'src/components/models';
import { useQuasar } from 'quasar';

  const router = useRouter()
  const $q = useQuasar()
  const route = useRoute()
  const uniqueID = route.params.unique
  const book = ref<BooksDataT>({
    id:0,
    book_unique_id:'',
    book_image:'',
    book_name:'',
    book_desc:'',
    author:'',
    date_published:'',
    genre:'',
    initial_quantity:0,
    total_quantity:0
  })
  
  const getData =async () => {
    await getBook(
      {params:{
        book_unique_id:uniqueID
      }
    }).then(response =>{
      book.value = response.data.book
    }).catch(err => {
      console.log(err)
    })
  }

  const goBack = ()=>{
    router.push('/')
  }
  onMounted(()=>{
    getData()
  })

  const handleBorrowBook = async()=>{
    await borrowBook({book_id:uniqueID}).then(response =>{
      $q.notify({
          type:'positive',
          message:response.data.message
          })
    }).catch(err => {
      $q.notify({
          type:'negative',
          message:err.response.data.message
          })
    })
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
  