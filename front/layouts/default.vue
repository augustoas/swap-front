<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-app-bar app v-if="!isMobile">
            <v-toolbar-title>My PWA</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-for="item in menuItems" :key="item.text" text>
              {{ item.text }}
            </v-btn>
            <v-btn text @click="logout">Logout</v-btn>
          </v-app-bar>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <nuxt-page />
        </v-col>
      </v-row>

      <v-bottom-navigation v-if="isMobile">
        <v-btn v-for="item in menuItems" :key="item.text" icon>
          <v-icon>{{ item.icon }}</v-icon>
          <span>{{ item.text }}</span>
        </v-btn>
        <v-btn icon @click="logout">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'

// Mock authentication state
const isLoggedIn = ref(true)

const menuItems = [
  { text: 'Home', icon: 'mdi-home' },
  { text: 'Dashboard', link: '/swap', icon: 'mdi-view-dashboard' },
  { text: 'Services', icon: 'mdi-briefcase' },
  { text: 'Contact', icon: 'mdi-phone' },
  { text: 'Help', icon: 'mdi-help-circle' },
]

const display = useDisplay()
const isMobile = computed(() => display.smAndDown)

// Mock logout function
const logout = () => {
  isLoggedIn.value = false
  // Implement actual logout logic here
}
</script>

<style scoped>
.v-app-bar {
  background-color: #1976d2;
  color: white;
}
.v-bottom-navigation {
  background-color: #1976d2;
  color: white;
}
</style>
