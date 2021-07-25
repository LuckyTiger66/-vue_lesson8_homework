<template>
  <footer
    class="
      bg-primary
      fs-7
      p-3
      text-center
      position-relative
      d-flex d-sm-block
      flex-column
    "
  >
    <small class="text-light"
      >made by sean6
      <a
        class="ms-1 text-link text-decoration-none"
        href="#"
        @click.prevent="logout()"
        >登出
      </a>
    </small>
  </footer>
</template>

<script>
export default {
  methods: {
    logout() {
      document.cookie = "hexToken=;expires=;";
      this.$router.push("/login");
    },
  },
};
</script>
