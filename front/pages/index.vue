<template>
  <div>
    <h1>Users</h1>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
  import UserRepository from '~/repositories/UserRepository';

  const { $api } = useNuxtApp();
  const userRepository = new UserRepository($api);
  const { data } = await useAsyncData(() => userRepository.findAll())
</script>