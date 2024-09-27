<template>
    <q-card class="cutom-card">
      <q-card-section>
        <q-breadcrumbs>
        <q-breadcrumbs-el label="books" />
      </q-breadcrumbs>
        <h4 class="header text-center"><strong>Borrowed Books</strong></h4>
        <div class="row justify-evenly">
                <q-input outlined v-model="search" color="blue" clearable  type="search"
      label="Search"
      debounce="1000" class="search-input col col-md-3 col-sm-2 text-primary rounded-sm">
                  <template v-slot:prepend>
                    <q-icon name="search" />
                  </template>
                </q-input>
                <q-select outlined v-model="pagination.limit" :options="options" class="col col-md-3 col-sm-2" label="SelectPage" @select="handleRequest" />
              </div>
        <q-page class="row justify-evenly q-gutter-sm">
          <card-component
            class="col-12 col-md-4 col-lg-3 books"
            v-for="n in Books" :key="n?.id"
            @click="routeToInfo(n?.book_unique_id || '')"
            :book="n"
          />
        </q-page>
        <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="pagination.current_page"
          :max="pagination.last_page"
          @update:model-value="handleRequest"
          direction-links
          boundary-links
          color="black"
          active-color="negative"
          icon-first="skip_previous"
          icon-last="skip_next"
          icon-prev="fast_rewind"
          icon-next="fast_forward"
        />
      </div>
      </q-card-section>
    </q-card>
  </template>
  
  <script setup lang="ts">
  import { ref,watch,onMounted } from 'vue';
  import cardComponent from '../components/card/cardComponent.vue';
  import { useRouter } from 'vue-router';
  import { getAllBorrowedBooks } from 'src/services/api.services';
  import {BooksDataT,PaginationProps} from 'src/components/models'
  const router = useRouter()
  const routeToInfo = (unique: string) => {
    router.push({ name: 'book_info', params: { unique } });
  };
  const pagination = ref<PaginationProps>({
    current_page: 1,
    last_page: 0,
    limit:5
  });
  const options = [5, 10, 15, 20];
  const Books = ref<Array<BooksDataT>>([])
  const search = ref<string>('')
  const onRequest = async (search: string = '', page: number = 1, limit:number = 5) => {
    try {
     await getAllBorrowedBooks({
        params: {
          page: page,
          search: search,
          limit:limit
        },
      }).then((response) => {
        const data = response.data;
        Books.value = data.books;
        pagination.value.current_page = data.current_page;
        pagination.value.last_page = data.last_page;
        pagination.value.limit = data.limit
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleRequest = (page: number) => {
    onRequest(search.value, page, pagination.value.limit);
  };
  watch(() => pagination.value.limit, (newLimit) => {
    onRequest(search.value, pagination.value.current_page, newLimit);
  });
  watch(search, () => {
    onRequest(search.value, pagination.value.current_page,pagination.value.limit);
  });
  
  onMounted(() => {
    onRequest('', pagination.value.current_page,pagination.value.limit);
  });
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
  