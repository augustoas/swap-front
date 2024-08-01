<template>
  <div>
    <h1>Home</h1>
  </div>

</template>

<script setup lang="ts">
  import UserRepository from '~/repositories/userRepository';

  const { $api } = useNuxtApp();
  const userRepository = new UserRepository($api);
  const { data } = await useAsyncData(() => userRepository.findAll())
</script>
