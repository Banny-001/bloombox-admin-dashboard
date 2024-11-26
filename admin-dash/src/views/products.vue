<template>
    <v-main class="pt-5" >
      <v-card
        :variant="variant"
        class="mx-auto pt-2 rounded-xl" 
        prepend-icon="$fa:fas fa-list"
        subtitle="Products"
        width="1400"
        mx-t="2px"
        color="primary"
        outlined
      >
        <template v-slot:title>
          <span class="font-weight-bold text-h5">Products</span>
          <v-card class="d-flex flex-end pt-15 " color="transparent" outlined>
            <v-row>
              <v-autocomplete
                :items="items"
                append-inner-icon="mdi-microphone"
                class="justify-start"
                density="comfortable"
                menu-icon=""
                placeholder="Search products"
                prepend-inner-icon="mdi-magnify"
                style="max-width: 350px"
                theme="light"
                variant="solo"
                auto-select-first
                item-props
                rounded
              ></v-autocomplete>
              <v-col class="d-flex justify-end">
                <v-btn
                  size="x-large"
                  color="secondary"
                  class="rounded-xl"
                >
                  Create
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </template>
      </v-card>
  
      <v-card-text class="bg-surface-light pt-10 rounded-xl">
        <v-data-table :items="items" >
          <template v-slot:top>
            <v-row class="d-flex justify-end mb-4 mt-2">
              <v-btn
                color="secondary"
                @click="exportData"
                width="90px"
                class="rounded-xl"
              >
                Export
                <v-icon>mdi-export</v-icon>
              </v-btn>
            </v-row>
          </template>
         
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              class="me-4"
              size="small"
              color="success"
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              class="me-2"
              size="small"
              color="primary"
              @click="showItem(item)"
            >
              mdi-eye
            </v-icon>
            <v-icon
              size="small"
              color="error"
              @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
        <v-divider></v-divider>
      </v-card-text>
    </v-main>
  </template>
  
  <script setup>
  import axios from 'axios';
  const items = [
    {
      name: "African Elephant",
      species: "Loxodonta africana",
      diet: "Herbivore",
      habitat: "Savanna, Forests",
      actions: "",
    },
  
    // ... more items
  ];
  </script>
  