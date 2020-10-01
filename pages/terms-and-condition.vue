<template>
  <div>
    <section id="about" class="offering is-link" :style="{
        width: isWebView ? '100vw' : '',
        height: isWebView ? '100vh' : '',
        'overflow-y': isWebView ? 'scroll' : '',
      }">
      <div class="container" style="width: 100%">
        <br /><br /><br />
        <div v-html="content" class="ql-editor"></div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    layout({
      route
    }) {
      if (route.query.v === "webview") {
        return "no-header-footer";
      }
      return "multiPage";
    },
    data() {
      return {
        title: "Ketentuan & Syarat - Dibersihin",
        content: "",
      };
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: "description",
            name: "description",
            content: "Ketentuan Privasi",
          },
        ],
      };
    },
    components: {},
    mounted() {
      this.getPrivacyPolicy();
    },
    methods: {
      getPrivacyPolicy() {
        this.$axios
          .get(
            "https://dibersihin.com/api/prod/v1/terms-and-condition/4972b52d-dae2-4b39-bcc7-c939f2fe49c2"
          )
          .then((response) => {
            this.content = response.data.data.body;
            console.log(this.content);
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    computed: {
      isWebView() {
        return this.$route.query.v === "webview";
      },
    },
  };
</script>

<style></style>