<template>
  <q-card class="cutom-card">
    <q-card-section>
      <q-breadcrumbs>
      <q-breadcrumbs-el label="books" />
    </q-breadcrumbs>
      <h4 class="header text-center"><strong>Books</strong></h4>
      <div class="q-gutter-md flex-grow-1 flex justify-start">
              <q-input outlined v-model="text" color="blue" label="search..." class="search-input text-primary rounded-sm">
                <template v-slot:prepend>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
      <q-page class="row justify-evenly q-gutter-sm">
        <card-component
          class="col-12 col-md-4 col-lg-3 books"
          v-for="n in 12" :key="n"
          @click="routeToInfo"
          :n="n"
        />
      </q-page>

    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import cardComponent from '../components/card/cardComponent.vue';
import { useRouter } from 'vue-router';
const text = ref<string>('')
const router = useRouter()
const routeToInfo = ()=>{
  router.push('/info')
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
