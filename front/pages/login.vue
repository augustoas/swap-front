<template>
  <div class="login-container">
    <v-card>
      <v-card-title class="headline">Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleLogin">
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
          <v-btn variant="text" color="secondary text-caption"><NuxtLink class="font-weight-black" to="/forgotPassword"> Forgot password?</NuxtLink></v-btn>
          <v-btn block color="primary" type="submit">Login</v-btn>
          <v-btn variant="text" color="secondary text-caption">Don't have an account? <NuxtLink class="font-weight-black" to="/register"> Sign up</NuxtLink></v-btn>
          
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
  import { ref } from 'vue';
  import AuthRepository from '~/repositories/authRepository';
  definePageMeta({
    layout: 'empty'
  });

  const { $api } = useNuxtApp();
  const authRepository = new AuthRepository($api);

  const email = ref('')
  const password = ref('')
  const handleLogin = async () => {
    const data = await authRepository.login({ email: email.value, password: password.value });
    console.log(`data: ${JSON.stringify(data)}`);
    useUserStore().setUser(data.payload.user);
    useUserStore().setToken(data.payload.token);
  }
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