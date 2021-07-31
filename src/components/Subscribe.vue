<template>
  <section class="top-news section pt-3 pb-4">
    <!-- 訂閱我們 -->
    <figure class="studio__subscribe d-flex align-items-center mb-0">
      <div class="container mt-lg-5">
        <div class="col-lg-6">
          <p class="h3 text-white">
            訂閱 WeCard <br />
            <span class="h4">獲得九折優惠券</span>
          </p>
        </div>
        <div class="col-md-6 col-lg-4">
          <Form
            action=""
            v-slot="{ errors }"
            ref="subForm"
            @submit="showCouponCode"
          >
            <div class="input-group">
              <Field
                id="userEmail"
                name="聯絡信箱"
                type="email"
                class="form-control"
                placeholder="請輸入電子信箱"
                rules="email"
                v-model="email"
              ></Field>
              <input
                class="btn btn-primary text-white"
                value="送出"
                type="submit"
                :disabled="Object.keys(errors).length !== 0 || email === ''"
              />
              <span class="text-danger pl-1 pt-2" v-if="errors[0]">{{
                errors[0]
              }}</span>
            </div>
          </Form>
        </div>
      </div>
    </figure>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    showCouponCode() {
      this.$swal({
        title: "訂閱成功",
        text: "優惠券代碼：open99",
        timer: 2000,
      });
      this.form.reset();
    },
  },
};
</script>
