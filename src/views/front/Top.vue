<template>
  <header>
    <TopNavbar></TopNavbar>
  </header>
  <main>
    <section class="top">
      <div class="container-fluid position-relative">
        <div class="top-scrolldown">
          SCROLL DOWN<span class="top-scrolldown__line"></span>
        </div>
        <div class="container position-relative vh-100">
          <div class="top__inner">
            <h1 class="top__title text-light">WeCard<br />微卡爾德</h1>
            <p class="top__subtitle text-light h6 fw-normal mb-2 mb-md-4">
              集換式卡牌相關的商品，追蹤最新消息
            </p>
            <router-link
              class="top__button btn btn-outline-light w-100"
              to="/products"
              >商品列表<span class="material-icons">
                navigate_next
              </span></router-link
            >
          </div>
        </div>
      </div>
    </section>
    <section class="top-products section py-6">
      <div class="container px-4 px-sm-0">
        <h3
          class="section-title mb-5"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="300"
        >
          <p class="section-title__text h2">
            <span class="material-icons section-icon"> flare </span>
            選購商品
          </p>
          <p
            class="section-title__text fw-normal fs-6 fs-sm-5"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="350"
          >
            請選擇您有興趣的商品類別
          </p>
        </h3>
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
    <section class="top-news section pt-4 pb-2">
      <div class="container">
        <dl class="top-news__inner">
          <dt class="top-news__title">
            <div
              class="d-flex"
              v-if="newArticles"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <a href="#" class="me-3"
                ><img
                  src="https://i.imgur.com/5O5GpDm.png"
                  alt=""
                  @click.prevent="getNewArticles"
              /></a>
              <router-link to="/articles">最新消息</router-link>
              <a href="#" class="ms-3"
                ><img
                  src="https://i.imgur.com/fxZuC0F.png"
                  @click.prevent="nextNewArticles"
                  alt=""
              /></a>
            </div>
          </dt>
          <dd class="top-news__item">
            <ul class="top-news__lists">
              <li
                v-for="item in newArticles"
                :key="item"
                class="top-news__list"
              >
                <router-link
                  class="top-news__link text-light"
                  :to="`/article/${item.id}`"
                >
                  <span class="top-news__date">
                    <time :datetime="$filters.datetime(item.create_at)">
                      {{ $filters.date(item.create_at) }}
                    </time>
                  </span>
                  <span class="top-news__description">{{ item.title }}</span>
                </router-link>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </section>
  </main>
</template>

<script>
import emitter from "../../assets/js/methods/emitter";
import TopNavbar from "@/components/TopNavbar.vue";
export default {
  data() {
    return {
      category: [
        {
          name: "魔法風雲會卡牌",
          enName: "MTG",
          imgUrl: "https://i.imgur.com/bUgfdTc.png",
        },
        {
          name: "寶可夢卡牌",
          enName: "PTCG",
          imgUrl: "https://i.imgur.com/vBkYlSR.png",
        },
        {
          name: "遊戲王卡牌",
          enName: "Yu-Gi-Oh",
          imgUrl: "https://i.imgur.com/I0U2aYB.png",
        },
      ],
      articles: {},
      newArticles: [],
      pagination: {},
    };
  },
  components: {
    TopNavbar,
  },
  methods: {
    getArticles(num = this.pagination.current_page || 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/articles?page=${num}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            const { articles, pagination } = res.data;
            this.articles = articles;
            this.pagination = pagination;
            this.getNewArticles();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clickCategory(category) {
      emitter.emit("categoryTop", category);
      this.$router.push(`/products/`);
    },
    getNewArticles() {
      this.newArticles = [];
      const maxSize = 3;
      for (let index = 0; index < maxSize; index++) {
        this.newArticles.push(this.articles[index]);
      }
    },
    nextNewArticles() {
      this.newArticles = [];
      const maxSize = 6;
      for (let index = 3; index < maxSize; index++) {
        this.newArticles.push(this.articles[index]);
      }
    },
  },
  mounted() {
    console.clear();
    this.getArticles();
  },
};
</script>
