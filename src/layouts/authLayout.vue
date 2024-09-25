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
          <q-avatar class="avatar">
              <img src="../assets/sample User Avatar.png" alt="sample user avatar">
          </q-avatar>
          <p class="text-black">Unknown</p>
        </span>
        <span v-else>
          <div class="routes text-black">
            <router-link to="/login" class="common-route">Login</router-link>
            /
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
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable target="_blank" rel="noopener" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>https://quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable target="_blank" rel="noopener" href="https://github.quasar.dev">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>GitHub</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable target="_blank" rel="noopener" href="http://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>https://chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable target="_blank" rel="noopener" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>https://forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable target="_blank" rel="noopener" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable target="_blank" rel="noopener" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@QuasarFramework</q-item-label>
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
import { ref,onMounted } from 'vue'
import { useAuthStore } from 'src/stores/authStore';
import { authUserInfo } from 'src/components/models';
import { useRouter } from 'vue-router';

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
.common-route:hover{
  text-shadow: 0 0 10px black;
}
.routes{
  margin-right: 10%;
}
.router-link-exact-active{
  text-shadow: 0 0 10px #068399;
  color: black;
}
</style>