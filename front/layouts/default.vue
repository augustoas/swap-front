<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/jobs">Jobs</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <div>
      <slot />
    </div>

    <footer>
      <p>&copy; 2021</p>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
