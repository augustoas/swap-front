<template>
  <div class="register-container">
    <v-card>
      <v-card-title class="headline">Register</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleRegister">
          <v-text-field
            label="First Name"
            v-model="firstname"
            prepend-icon="mdi-account"
            required
          ></v-text-field>
          <v-text-field
            label="Last Name"
            v-model="lastname"
            prepend-icon="mdi-account"
            required
          ></v-text-field>
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
          <v-btn class="mt-4" color="primary" type="submit" block>Register</v-btn>
          <v-btn variant="text" color="secondary text-caption">Already have an account? <NuxtLink class="font-weight-black" to="/login"> Log in</NuxtLink></v-btn>
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

  const firstname = ref('');
  const lastname = ref('');
  const email = ref('');
  const password = ref('');
  
  const handleRegister = async () => {
    const data = await authRepository.register({ 
      firstname: firstname.value, 
      lastname: lastname.value, 
      email: email.value, 
      password: password.value 
    });
    console.log(`data: ${JSON.stringify(data)}`);
  };
</script>

<style scoped>
.register-container {
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
