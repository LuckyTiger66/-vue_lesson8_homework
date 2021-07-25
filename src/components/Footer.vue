<template>
  <footer
    class="
      bg-dark
      fs-7
      p-3
      text-center
      position-relative
      d-flex d-sm-block
      flex-column
    "
  >
    <div class="order-2 mt-2 mt-sm-0 position-sm-absolute copyRight">
      <router-link class="text-link" to="/login">
        <span class="material-icons"> account_box </span>
      </router-link>
    </div>
    <small class="text-light"
      >© 2021
      <a class="text-link text-decoration-none" href="#" target="_blank"
        >WeCard</a
      >
      All rights reserved</small
    >
  </footer>
</template>
