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
          <q-input v-model="formdata.employee_id" label="Employee ID" type="number" />
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
    <q-btn icon="login" label="Log In" color="primary" class="form-control" @click="handleLoginSubmit"/>
</div>
        </q-card-section>
      </q-card-section>
  
      <q-separator />
    </q-card>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import {userLoginT} from '../../components/models'
import { login } from 'src/services/api.services';
import { useQuasar } from 'quasar';
import { useAuthStore } from 'src/stores/authStore';
import { useRouter } from 'vue-router';

const router = useRouter()
  const $q = useQuasar()
  const authStore = useAuthStore()
  const formdata = ref<userLoginT>({
    employee_id: "",
    password: ""
  });
  const checkpass = ref(false);
  
  // Computed property to determine the input type
  const passwordType = computed(() => (checkpass.value ? "text" : "password"));

  const handleLoginSubmit =async () => {
    const data = {
    employee_id:formdata.value.employee_id,
    password:formdata.value.password
    }
      await login(data).then(response =>{
        if(response){
        $q.notify({
          type:'positive',
          message:response.data.message
          })
          authStore.setDependencies(JSON.stringify(response.data.user),response.data.accessToken,response.data.refreshToken)
          router.push('/').then(() => {
    window.location.reload();
  });
        }
      }).then(err =>{
        $q.notify({
          type:'negative',
          message:'error login'
        })
      console.log(err)
    })
  }
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
  