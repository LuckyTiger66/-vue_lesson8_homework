<template>
  <router-view />
</template>

<script>
export default {
  methods: {
    createTitleDesc: function (routeInstance) {
      // title設定
      if (routeInstance.meta.title) {
        var setTitle = routeInstance.meta.title + " | WeCard微卡爾德";
        document.title = setTitle;
      } else {
        document.title = "WeCard微卡爾德";
      }

      // meta description設定
      if (routeInstance.meta.desc) {
        var setDesc = routeInstance.meta.desc + " | WeCard微卡爾德";
        document
          .querySelector("meta[name='description']")
          .setAttribute("content", setDesc);
      } else {
        document
          .querySelector("meta[name='description']")
          .setAttribute(
            "content",
            "WeCard微卡爾德，為您提供所需的卡牌與周邊。"
          );
      }
    },
  },
  mounted: function () {
    var routeInstance = this.$route;
    this.createTitleDesc(routeInstance);
  },
  watch: {
    $route(routeInstance) {
      this.createTitleDesc(routeInstance);
    },
  },
};
</script>
