<template>
  <div>
    <section class="home is-link is-fullheight is-vertical-center" style="position:relative;">
      <div class="curved-bg" style="position:absolute; top:0;left:0;right:0;">
        <img style="width:100%; height:100vh;" src="curve_bg.png" alt="">
      </div>
      <div class="container">
        <div class="hero-body">
          <div class="columns custom-columns">
            <div class="column is-6 is-vertical-center">
              <div>
                <h2 class="title  has-text-biru-alexa is-size-1-desktop is-size-2-tablet is-size-3-mobile">Penuhi
                  Kebutuhan <br>
                  Digital Anda</h2><br>
                <p class="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-dark-alexa">Eksistensi
                  Digital
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
          <h2 class="title is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-centered has-text-dark-alexa">
            Kami
            Bantu Anda Untuk Membangun </h2>
          <h2
            class="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-centered has-text-dark-alexa">
            Kami
            memahami kebutuhan yang anda perlukan dalam berbisnis </h2><br>
          <div class="columns ">

            <offering offering="Portfolio Web" image="warranty.png" />
            <offering offering="Ecommerce" image="online-store.png" />
            <offering offering="Company Profile" image="store.png" />
            <offering offering="P.O.S System" image="pos.png" />
            <offering offering="Custom App" image="app.png" />
            <offering offering="SEO" image="seo.png" />

          </div>

        </div>
      </div>
    </section>

    <section class="hero" style="position:relative; ">
      <div class="curved-bg" style="position:absolute; bottom:-10px;left:0;right:0;">
        <img style="width:100%; height:30vh;" src="curve_bg_up.png" alt="">
      </div>
      <div class="hero-body has-text-centered">
        <div class="container">
          <p class="title">
            Tim Kami
          </p>
          <h2
            class="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-centered has-text-dark-alexa">
            Kami
            memahami kebutuhan teknologi yang anda perlukan dalam berbisnis </h2><br>
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <div class="columns">
                <tim foto="tim/kerul.jpg" nama="Chaerul S." role="Back-end Developer"/>
                <tim foto="tim/gigih.jpg" nama="Recito Gigih P." role="Front-end Developer"/>
                <tim foto="tim/eki.jpg" nama="Ecky A." role="UI / UX Designer"/>
                <tim foto="tim/tiara.jpg" nama="Tiara S W." role="Digital Marketing"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact is-link is-fullheight is-vertical-center">
      <div class="container">
        <div class="hero-body" style="z-index:100">
          <h2 class="title is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-centered has-text-dark-alexa">
            Hubungi Kami </h2>
          <h2
            class="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-centered has-text-dark-alexa">
            Kami ada setiap saat kapanpun dimanapun </h2>
          <center>
            <nuxt-link to="/kontak" class="button is-info is-size-5-desktop is-size-6-tablet is-size-7-mobile">Hubungi
              Sekarang</nuxt-link>
          </center>
        </div>
      </div>
      <img class="bg-kiri" src="contact_bg_kiri.png" alt="">
      <img class="bg-kanan" src="contact_bg_kanan.png" alt="">
    </section>


  </div>
</template>

<script>
  import offering from '@/components/card/offering-item'
  import tim from '@/components/card/tim-card'
  export default {

    components: {
      offering,
      tim
    },
    data() {
      return {
        title: 'alexia technology'
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
    /* background: #f1faf9; */
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
    min-height: 80vh;
  }

  section.contact {
    background: #f1faf9;
    background-position: top;
    background-repeat: no-repeat;
    min-height: 50vh;
    background-size: auto;
    position: relative;
    z-index: 1;
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

  .card {
    background-color: white;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a;
    max-width: 100%;
    position: relative;
    border-radius: 12px;

    -webkit-box-shadow: 14px 11px 37px -15px rgba(0, 0, 0, 0.66);
    -moz-box-shadow: 14px 11px 37px -15px rgba(0, 0, 0, 0.66);
    box-shadow: 14px 11px 37px -15px rgba(0, 0, 0, 0.66);
  }

  .card-image {
    display: block;
    position: relative;
    padding: 10% 30%;
  }

  .card-footer {
    background-color: transparent;
    align-items: stretch;
    display: flex;
    padding: 4%;
    border-top: none;
  }

  .check-icon {
    height: 22px;
    margin-right: 5px;
  }

  .icon-offering {
    height: 78px;
    object-fit: contain;
    width: 100%;
  }

  .button.is-fullwidth {
    display: flex;
    width: 100%;
    border-radius: 12px;
  }

  .card-image {
    display: block;
    position: relative;
    padding: 10% 25%;
  }

  .image img {
    display: block;
    height: auto;
    width: 100%;
    height: 102px;
  }

</style>
