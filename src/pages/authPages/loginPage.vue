<template>
    <q-card class="custom-card">
      <q-card-section class="row q-gutter-md">
        <q-img
          class="col-12 col-md-5 col-lg-7"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
          alt="Image"
        />
  
        <q-card-section class="col-12 col-md-6 col-lg-4">
          <h4 class="text-center">Log In Account</h4>
          <q-input v-model="formdata.username" label="Username" />
          <q-input
            v-model="formdata.password"
            label="Password"
            :type="passwordType"
            class="form-control"
          />
          <q-checkbox
            v-model="checkpass"
            label="Show Password"
            class="form-control"
          />
<div class="flex justify-end">
    <q-btn icon="login" label="Log In" color="primary" class="form-control"/>
</div>
        </q-card-section>
      </q-card-section>
  
      <q-separator />
    </q-card>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  const formdata = ref({
    username: "",
    password: ""
  });
  const checkpass = ref(false);
  
  // Computed property to determine the input type
  const passwordType = computed(() => (checkpass.value ? "text" : "password"));
  </script>
  
  <style scoped>
  .form-control {
    margin-top: 2%;
  }
 
  @media screen and (max-width: 780px) {
    .custom-card {
    margin-top: 0%;
    }
  }
  @media screen and (min-width: 780px) {
    .custom-card {
        margin-top: 8%;
      margin-left: 15%;
      margin-right: 15%;
    }
  }
  </style>
  