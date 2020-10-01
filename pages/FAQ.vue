<template>
  <div>
    <br /><br /><br /><br />
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <faqItem v-for="(faq, index) in faqs" :key="index" :pertanyaan="faq.question" :jawaban="faq.answer" />
      </div>
    </div>
  </div>
</template>

<script>
  import faqItem from "@/components/card/question_card";
  export default {
    layout: "multiPage",
    data() {
      return {
        title: "FAQ - Dibersihin",
        faqs: '',
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
    components: {
      faqItem,
    },
    mounted() {
      this.getFaqList();
    },
    methods: {
      getFaqList() {
        this.$axios
          .get(
            "https://dibersihin.com/api/prod/v1/customer/faq/list"
          )
          .then((response) => {
            this.faqs = response.data.data;
            console.log(this.faqs);
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
  };
</script>