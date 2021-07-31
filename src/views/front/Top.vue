<template>
  <header>
    <TopNavbar></TopNavbar>
  </header>
  <main>
    <section class="top">
      <div class="container-fluid position-relative">
        <div class="container position-relative vh-100">
          <div class="top__inner">
            <h1 class="top__title text-light">
              WeCard<br />
              <div class="typing">微卡爾德</div>
            </h1>
            <p class="top__subtitle text-light h6 fw-normal mb-2 mb-md-4">
              集換式卡牌相關的商品，追蹤最新消息
            </p>
          </div>
        </div>
        <section id="scroll" class="scrollDown">
          <a href="" @click.prevent="clickSilder"
            ><span></span>往下看更多內容</a
          >
        </section>
      </div>
    </section>
    <section id="main" class="top-products section py-6">
      <div class="container px-4 px-sm-0">
        <h2
          class="section-title mb-5"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="300"
        >
          <p class="section-title__text h2">選購商品</p>
          <p
            class="section-title__text fw-normal fs-6 fs-sm-5"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="350"
          >
            請選擇您有興趣的商品類別
          </p>
        </h2>
        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          <div
            v-for="item in this.category"
            :key="item.name"
            class="col"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="400"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div class="top-products-card">
              <a
                href="#"
                class="top-products-card__link"
                @click.prevent="clickCategory(item.name)"
              >
                <div class="top-products-card__inner">
                  <figure class="top-products-card__media">
                    <img class="img-fluid" :src="item.imgUrl" alt="item.name" />
                    <figcaption>{{ item.name }} 相關商品</figcaption>
                  </figure>
                  <span class="top-products-card__text">{{ item.enName }}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Subscribe />
    <!-- go top -->
    <a
      href="#"
      class="goTop icon-btn"
      :class="{ active: isScroll }"
      @click.prevent="scrollTop"
    >
      <span class="material-icons" data-cursor="cursor"> arrow_drop_up </span>
    </a>
  </main>
</template>

<script>
import emitter from "../../assets/js/methods/emitter";
import TopNavbar from "@/components/TopNavbar.vue";
import Subscribe from "@/components/Subscribe.vue";
export default {
  data() {
    return {
      category: [
        {
          name: "魔法風雲會",
          enName: "MTG",
          imgUrl: "https://i.imgur.com/bUgfdTc.png",
        },
        {
          name: "寶可夢",
          enName: "PTCG",
          imgUrl: "https://i.imgur.com/vBkYlSR.png",
        },
        {
          name: "遊戲王",
          enName: "Yu-Gi-Oh",
          imgUrl: "https://i.imgur.com/I0U2aYB.png",
        },
      ],
      articles: {},
      newArticles: [],
      pagination: {},
      isScroll: false,
    };
  },
  components: {
    TopNavbar,
    Subscribe,
  },
  methods: {
    clickCategory(category) {
      emitter.emit("categoryTop", category);
      this.$router.push(`/products/`);
    },
    clickSilder() {
      let el = document.querySelector("#main");
      // chrome
      document.body.scrollTop = el.offsetTop;
      // firefox
      document.documentElement.scrollTop = el.offsetTop;
    },
    pageScroll() {
      if (window.scrollY > 0) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    },
    scrollTop() {
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    console.clear();
    window.addEventListener("scroll", this.pageScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.pageScroll);
  },
};
</script>
