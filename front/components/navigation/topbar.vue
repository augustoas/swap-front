<template>
  <header class="navbar">
    <nav>
      <ul>
        <li class="logo">
          <NuxtLink to="/">
            <img src="~/assets/logos/swap-logo-brand.png" alt="Logo" class="logo-img" />
          </NuxtLink>
        </li>
        <li class="profile">
          <NuxtLink to="/profile">
            <img src="~/assets/logos/swap-logo1.png" alt="Profile" class="profile-img" />
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar {
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  list-style: none;
  height: 60px;
}

nav ul .logo,
nav ul .profile {
  flex: 0 0 auto;
}

nav ul .nav-item {
  flex: 1;
  text-align: center;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.logo-img,
.profile-img {
  height: 40px;
  object-fit: cover;
}
</style>
