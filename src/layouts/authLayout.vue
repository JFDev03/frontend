<template>
    <q-layout view="lHh Lpr lFf" class="bg-grey-9">
    <q-header elevated class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          class="text-black"
          icon="menu"
          v-if="user_info != null"
        />
        <q-avatar class="logo" @click="goHome">
            <img src="../assets/TECDIA_CEBU_INC_logo.png" alt="tecdia cebu logo" height="3%" width="3%">
      </q-avatar>

        <q-toolbar-title class="bg-white text-black" @click="goHome">
            <p class="head-font">
                Library System
            </p>
        </q-toolbar-title>
        <span v-if="user_info != null">
          <q-btn-dropdown
          class="text-black border-none"
    >
      <template v-slot:label>
        <div class="row items-center no-wrap">
          <q-icon left>
            <q-avatar left class="avatar">
                <img src="../assets/sample User Avatar.png" alt="sample user avatar" v-if="user_info.profile_picture === null">
                <img :src="getImage(user_info.profile_picture)" alt="user Avatar" v-else>
            </q-avatar>
          </q-icon>
        </div>
      </template>

      <div class="row no-wrap q-pa-md justify-center items-center">
  <div class="column items-center text-center">
    <q-avatar size="450%">
      <img src="../assets/sample User Avatar.png" alt="sample user avatar" v-if="user_info.profile_picture === null">
                <img :src="getImage(user_info.profile_picture)" alt="user Avatar" v-else>
    </q-avatar>

    <div class="text-subtitle1 q-mt-md q-mb-xs">{{ user_info.fullname }}</div>

    <q-btn
      color="primary"
      label="Logout"
      push
      size="sm"
      v-close-popup
      @click="HandleLogout"
    />
  </div>
</div>

    </q-btn-dropdown>
        </span>
        <span v-else>
          <div class="routes text-black">
            <router-link to="/login" class="common-route">Login</router-link>
            <span class="display">/</span>
            <router-link to="/registration" class="common-route">Create an Account</router-link>
          </div>
        </span>
      </q-toolbar>
    </q-header>

    <q-drawer
    v-if="user_info != null"
      v-model="leftDrawerOpen"
      show-if-above
      class="bg-grey-8"
    >
      <q-list dark>
        <q-item clickable class="links" to="/borrowedBooks">
          <q-item-section avatar>
            <q-icon name="book" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Borrowed Books</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { ref,onMounted,onUnmounted } from 'vue'
import { useAuthStore } from 'src/stores/authStore';
import { authUserInfo } from 'src/components/models';
import { useRouter } from 'vue-router';
import { getImage, logout } from 'src/services/api.services';
import { useQuasar } from 'quasar';
const $q = useQuasar()
const router = useRouter()
const user_info = ref<authUserInfo | null>(null)

const leftDrawerOpen = ref(false)

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }
const authStore = useAuthStore()

const goHome = ()=>{
  router.push('/')
}

onMounted(()=>{
  user_info.value = authStore.getUserInfo() || null
})

const HandleLogout = async () => {
  await logout().then(response => {
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
  }).catch(err =>{
    $q.notify({
          type:'negative',
          message:'error login'
        })
      console.log(err)
  })
}
</script>
<style scoped>
.head-font{
    color:#068399;
    margin-top: 1%;
    font-weight: bold;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    cursor: pointer;
}
.avatar{
    margin-right: 1%;
}
.logo, img{
  cursor: pointer;
}
.common-route{
  margin-right: 0.4%;
  margin-left: 0.4%;
  text-decoration: none;
  color: #068399;
  font-weight: 700;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.border-none{
  border: none;
  text-decoration: none;
}
.common-route:hover{
  text-shadow: 0 0 10px black;
}
.routes{
  margin-right: 10%;
}
@media screen and (max-width: 780px) {
  .routes{
  display: flex;
  flex-direction: column;
}
.display{
  display: none;
}
}
.links{
  margin-top: 30%;
}
.router-link-exact-active{
  text-shadow: 0 0 10px #068399;
  color: black;
}
</style>