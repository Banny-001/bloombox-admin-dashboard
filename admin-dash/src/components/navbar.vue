<template>
    <v-app-bar color="primary" dark>
    
      <v-app-bar-nav-icon @click.stop="drawer =!drawer" />
  
      <!-- Title -->
      <v-toolbar-title>Bloombox</v-toolbar-title>
      
      <v-spacer></v-spacer>
    </v-app-bar>
  
    <!-- Drawer -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item-group>
          <!-- Home Link -->
          <router-link to="/" class="router-link">
            <v-list-item class="list-item">
              <v-list-item-icon class="list-item-icon">
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="list-item-title">Home</v-list-item-title>
            </v-list-item>
          </router-link>
  
          <!-- About Link -->
          <router-link to="/about" class="router-link">
            <v-list-item class="list-item">
              <v-list-item-icon class="list-item-icon">
                <v-icon>mdi-information</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="list-item-title">About</v-list-item-title>
            </v-list-item>
          </router-link>
  
          <!-- Settings Link (optional) -->
          <router-link to="/products" class="router-link">
            <v-list-item class="list-item">
              <v-list-item-icon class="list-item-icon">
                <v-icon>mdi-product</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="list-item-title">Products</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const drawer = ref(false); // Drawer state
  </script>
  
  <style scoped>
  
  .v-navigation-drawer .v-list {
    padding-top: 16px; 
    padding-bottom: 16px; 
  }
  
 
  .list-item {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    align-items: center;
    transition: background-color 0.3s;
  }
  

  .list-item:hover {
    background-color: #e3f2fd;
  }
  
  
  .list-item-icon {
    min-width: 40px; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
  }
  
  .icon {
    font-size: 24px;
    color: #1976d2; 
  }
  
 
  .list-item-title {
    font-size: 16px;
    font-weight: 500;
    color: #1976d2; 
    margin-left: 8px; 
  }
  
 
  .router-link {
    text-decoration: none;
    color: inherit;
  }
  
  .router-link .v-list-item-title {
    padding-left: 16px; 
  }
  </style>
  