<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/navbar.vue"
</script>

<template>
  <v-app id="app">
    <Navbar />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>



</template>
