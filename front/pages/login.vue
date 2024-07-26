<template>
  <div class="login-container">
    <v-card>
      <v-card-title class="headline">Login</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Email"
            v-model="email"
            prepend-icon="mdi-email"
            type="email"
            required
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            prepend-icon="mdi-lock"
            type="password"
            required
          ></v-text-field>
          <v-btn class="mt-4" color="primary" block>Login</v-btn>
          <v-divider class="my-4"></v-divider>
          <v-btn class="mb-4" color="red darken-1" block>
            <v-icon left>mdi-google</v-icon>
            Login with Google
          </v-btn>
          <v-btn color="blue darken-3" block>
            <v-icon left>mdi-facebook</v-icon>
            Login with Facebook
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
definePageMeta({
  layout: 'empty'
})
const email = ref('')
const password = ref('')
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}
.v-card {
  max-width: 400px;
  width: 100%;
  padding: 20px;
}
</style>
