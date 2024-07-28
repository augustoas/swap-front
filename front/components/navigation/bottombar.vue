<template>
  <v-footer class="bottombar" app>
    <v-row justify="space-around">
      <v-col cols="auto">
        <NuxtLink to="/" exact>
          <v-icon class="bottom-bar-icon">mdi-home</v-icon>
        </NuxtLink>
      </v-col>
      <v-col cols="auto">
        <NuxtLink to="/jobs">
          <v-icon class="bottom-bar-icon">mdi-magnify</v-icon>
        </NuxtLink>
      </v-col>
      <v-col cols="auto">
        <NuxtLink to="/post">
          <v-icon class="bottom-bar-icon">mdi-plus</v-icon>
        </NuxtLink>
      </v-col>
      <v-col cols="auto">
        <NuxtLink to="/jobs">
          <v-icon class="bottom-bar-icon">mdi-format-list-bulleted</v-icon>
        </NuxtLink>
      </v-col>
      <v-col cols="auto">
        <NuxtLink to="/profile">
          <v-icon class="bottom-bar-icon">mdi-account-circle-outline</v-icon>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
import { ref } from "vue";
</script>

<style lang="scss" scoped>
.bottombar {
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  display: none; /* Hide on larger screens by default */
  height: 50px; /* Fixed height */
  align-content: center;

  @media (max-width: 768px) {
    display: block; /* Show on screens smaller than 768px */
  }
}

.v-footer {
  padding: 0;
}

.v-icon.bottom-bar-icon {
  font-size: 24px;
  color: #2a2b47; /* Customize the color here */
}
</style>
