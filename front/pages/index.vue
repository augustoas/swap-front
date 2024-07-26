<template>
  <div>
    <v-card>
      <v-card-title class="headline">Welcome to My PWA</v-card-title>
      <v-card-text>
        <p>Discover the amazing features of our application. Please log in to continue.</p>
        <v-btn color="primary" :to="'/login'">Login</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'landing'
})
</script>
