<template>
  <section class="our-work is-link is-fullheight is-vertical-center">
    <div class="container">
      <h2 class="title has-text-centered is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-dark-alexa">
        Discover our work</h2>
    <portfolio v-for="portfolio in portfolios" :key="portfolio.id" :nama_client="portfolio.nama_client" :judul="portfolio.judul" :deskripsi="portfolio.deskripsi" />
    </div>
  </section>
</template>

<script>
  import portfolio from '@/components/card/portfolio-card'
  export default {
    data() {
      return {
        title: 'alexia technology',
        portfolios: [        
          {
            id: 1,
            nama_client: "Digital Forensics Indonesia",
            judul: "A Place to Geek with Other People about Digital Forensics",
            deskripsi: "Dive into a prominent digital forensic service which enables people to meet enthusiasts in research, threat hacking activities, and conference topics."
          }, 
        ]
      }
    },
    components: {
      portfolio
    },
  }

</script>

<style scoped>
  section.our-work {
    min-height: 100vh;
  }

  .ls-8 {
    letter-spacing: 8px;
  }



</style>
