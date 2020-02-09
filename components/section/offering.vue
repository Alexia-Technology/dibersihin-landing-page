<template>
  <section class="offering is-link is-fullheight is-vertical-center" id="offering">
    <div class="container">
      <div class="hero-body">
        <h2 class="title has-text-centered is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-dark-alexa">
          We've been specialized in ...</h2>
        <br>
        <div class="columns is-multiline is-centered">
          <offeringItem v-for="offering in offerings" :key="offering.id" :offering="offering.nama"
            :image="offering.image" :desc="offering.desc" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import offeringItem from '@/components/card/offering-item'
  export default {
    data() {
      return {
        title: 'alexia technology',
        offerings: [{
            id: 1,
            nama: "Portfolio Web",
            image: "offering/portfolio.png",
            desc: "Build great experience of online buying or selling of your products on online services."
          },
          {
            id: 2,
            nama: "Ecommerce",
            image: "offering/e-commerce.png",
            desc: "Helps you put your work “out there”, build your brand, and attract new clients."
          },
          {
            id: 3,
            nama: "Company Profile",
            image: "offering/company-profile.png",
            desc: "What you need is a great  professional summary of the business and its activities."
          },
          {
            id: 4,
            nama: "P.O.S System",
            image: "offering/pos.png",
            desc: "Manages sales, inventory, with ease that engage customers and increase your revenue."
          },
          {
            id: 5,
            nama: "Custom App",
            image: "offering/custom-app.png",
            desc: "No limit for you to build the  great experiences of your own product that you wish to come true "
          },
          {
            id: 6,
            nama: "Digital Marketing",
            image: "offering/digital-marketing.png",
            desc: "Achieve Your Goals From Awareness to get the  Engagement by Driving New Business."
          },
          {
            id: 7,
            nama: "SEO",
            image: "offering/seo.png",
            desc: "Increases the quality and quantity of website traffic by increasing the visibility of a website"
          },

        ]
      }
    },
    components: {
      offeringItem,
    }
  }

</script>

<style>
  section.offering {
    min-height: 100vh;
  }

  .icon-offering {
    height: 78px;
    object-fit: contain;
    width: 100%;
  }
</style>
