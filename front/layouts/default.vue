<template>
  <v-app>
    <NavigationTopbar />
    <div class="main-content">
      <slot />
    </div>
    <NavigationBottombar />
  </v-app>
</template>

<script setup></script>

<style lang="scss" scoped>
.main-content {
  padding-top: 60px; /* Adjust this value based on the height of your top bar */
  padding-bottom: 60px; /* Adjust this value based on the height of your bottom bar */
}
</style>
