<template>
  <section class="iframe-wrapper">
    <iframe src="/tutorial.pdf" style="height:100vh;width:100vw"></iframe>
  </section>
</template>

<script>
export default {
  layout: "multiPage",
  data() {
    return {
      title: "Tutorial - Dibersihin",
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
          content: "Pesan Cleaner Tanpa Ribet",
        },
      ],
    };
  },
};
</script>
