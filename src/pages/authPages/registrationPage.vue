<template>
    <q-card class="custom-card">
      <q-card-section class="row q-gutter-md">
        <q-img
          class="col-12 col-md-5 col-lg-7"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
          alt="Image"
        />
  
        <q-card-section class="col-12 col-md-6 col-lg-4">
          <h4 class="text-center">Create an Account</h4>
          <div v-if="regProcess === 1"> <!-- Use === for comparison -->
            <q-input v-model="formdata.username" label="Username" />
            <q-input
              v-model="formdata.password"
              label="Password"
              :type="passwordType"
              class="form-control"
            />
            <q-input
              v-model="formdata.confirm_password"
              label="Confirm Password"
              :type="passwordType"
              class="form-control"
              required
            />
            <q-checkbox
              v-model="checkpass"
              label="Show Password"
              class="form-control"
            />
          </div>
          <div v-if="regProcess === 2">
            <q-input v-model="formdata.firstname" label="Firstname" />
            <q-input v-model="formdata.lastname" label="Lastname"  class="form-control"/>
            <q-input v-model="formdata.middlename" label="Middlename"  class="form-control"/>
            <q-input v-model="formdata.position" label="Position"  class="form-control"/>
        </div>
        <div v-if="regProcess === 3">
            <div class="flex justify-center">
                <q-avatar width="20dvw" height="20dvh">
                    <img src="../../assets/sample User Avatar.png" alt="sample image" v-if="preview === null">
                    <img :src="preview" alt="sample image" v-else >
                </q-avatar>
            </div>
            <input type="file" accept="image/jpeg,image/jpg,image/png"
                 @change="handleFileChanges"/>
        </div>
          <div class="flex" :class="{'justify-end': regProcess === 1, 'justify-between': regProcess > 1 && regProcess <= 3}">
  <q-btn icon="arrow_left" label="Previous" color="negative" class="form-control" @click="prevProcess" v-if="regProcess > 1" />
  <q-btn icon="arrow_right" label="Next" color="positive" class="form-control" @click="nextProcess" v-if="regProcess < 3" />
  <q-btn icon="login" label="Submit" color="primary" class="form-control" v-if="regProcess === 3"/>
</div>
        </q-card-section>
      </q-card-section>
  
      <q-separator />
    </q-card>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import {userRegistration} from 'components/models'
  
  const regProcess = ref(1);
  const formdata = ref<userRegistration>({
    username: "",
    password: "",
    confirm_password: "",
    firstname:"",
    lastname:"",
    middlename:"",
    position:"",
    profile_picture:null
  });
  const checkpass = ref(false);
  
  const nextProcess = () => {
    regProcess.value++;
  }
  
  const prevProcess = () => {
    regProcess.value--;
  }
  const preview = ref<string | null>(null)
  
  const handleFileChanges = (e: Event) => {
  const input = e.target as HTMLInputElement | null;

  const image = input?.files?.[0];

  if (image) {
    preview.value = URL.createObjectURL(image);
    formdata.value.profile_picture = image
  } else {
    preview.value = null;
  }
}



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
  