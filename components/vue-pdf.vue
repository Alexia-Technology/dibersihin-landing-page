<template>
  <client-only>
    <vue-pdf
      class="pdf"
      :src="pdfSrc"
      :page="1"
      @num-pages="pdfPageCount = $event"
    ></vue-pdf>
    
    <div v-if="pdfPageCount > 1">
      <div v-for="(pageNum, index) in pdfPageCount" :key="index">
        <vue-pdf
          class="pdf"
          :src="pdfSrc"
          :page="pageNum"
          v-if="pageNum > 1"
        ></vue-pdf>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      pdfSrc: "/path-to-your-pdf",
      pdfPageCount: 0,
    };
  },
};
</script>

<style lang="css">
.pdf {
  border: 1px solid red;
  width: 100px;
  height: 100%;
  overflow-y: auto;
}
</style>
