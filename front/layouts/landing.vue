<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <nuxt-page />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
// No script required for this basic landing layout
</script>

<style scoped>
.v-card {
  max-width: 600px;
  margin: auto;
}
</style>
