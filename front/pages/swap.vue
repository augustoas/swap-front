<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="n in 4" :key="n" cols="12" md="6" lg="4">
          <v-skeleton-loader type="card"></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
