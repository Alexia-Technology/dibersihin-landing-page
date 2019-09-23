<template>
  <div>
    <section class="home is-link is-fullheight is-vertical-center">
      <div class="container">
        <div class="hero-body">
          <div class="columns custom-columns">
            <div class="column is-6 is-vertical-center">
              <div>
                <h2 class="title  has-text-dark-alexa is-size-2-desktop is-size-3-tablet is-size-4-mobile">Penuhi Kebutuhan
                  Digital Anda</h2><br>
                <p class="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-dark-alexa">Eksistensi Digital
                  merupakan hal penting untuk perkembangan Bisnis di era 4.0. Calon kostumer cenderung memeriksa
                  kredibilatas anda di Internet sebelum melakukan transaksi</p><br>
                <a class="button is-info is-size-5-desktop is-size-6-tablet is-size-7-mobile">Cari tahu lebih lanjut</a>
              </div>
            </div>
            <div class="column is-6">
              <img class="fullwidth" src="illustration_alexia.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="offering is-link is-fullheight is-vertical-center">
      <div class="container">
        <div class="hero-body">
          <h2 class="title is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-centered has-text-dark-alexa">Kami
            Bantu Anda Untuk Membangun </h2>
          <h2 class="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-centered has-text-dark-alexa">Kami
            memahami kebutuhan yang anda perlukan dalam berbisnis </h2><br>
          <div class="columns ">

            <offering offering="Portfolio Web" image="warranty.png" />

            <offering offering="Ecommerce" image="online-store.png"/>

            <offering offering="Company Profile" image="store.png" />

            <offering offering="P.O.S System" image="pos.png"/>

            <offering offering="Custom App" image="app.png"/>

            <offering offering="SEO" image="seo.png"/>

          </div>

        </div>
      </div>
    </section>

    <section class="contact is-link is-fullheight is-vertical-center">
      <div class="container">
        <div class="hero-body" style="z-index:100">
          <h2 class="title is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-centered has-text-dark-alexa">
            Hubungi Kami </h2>
          <h2 class="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-centered has-text-dark-alexa">
            Kami ada setiap saat kapanpun dimanapun </h2>
          <center>
            <a class="button is-info is-size-5-desktop is-size-6-tablet is-size-7-mobile">Hubungi Sekarang</a>
          </center>
        </div>
      </div>
      <img class="bg-kiri" src="contact_bg_kiri.png" alt="">
      <img class="bg-kanan" src="contact_bg_kanan.png" alt="">
    </section>


  </div>
</template>

<script>
  import offering from '@/components/offering-item'
  export default {
    
    components: {
      offering
    },
    data() {
      return {
         title:'alexia technology'
      }
    },
     head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'Kami ada untuk membantu memenuhi kebutuhan digital anda'
          }
        ]
      }
    },
  }

</script>

<style>
  section.home {
    /* background-image: url('../assets/images/reason3resize.jpg'); */
    /* background-image: url('Header_bg.png'); */
    background: #f1faf9;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
  }


  section.offering {
    /* background-image: url('../assets/images/reason3resize.jpg'); */
    /* background-image: url('Header_bg.png'); */
    background: white;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
  }

  section.contact {
    /* background-image: url(/contact_bg.png); */
    background-position: top;
    background-repeat: no-repeat;
    min-height: 50vh;
    background-size: auto;
    position: relative;
  }

  img.bg-kiri {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  img.bg-kanan {
    position: absolute;
    right: 0;
    top: 0;
     z-index: -1;
  }

</style>
