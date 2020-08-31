<template>
  <div>
    <section class="offering is-link is-fullheight is-vertical-center" id="about">
      <div class="container">
        <div class="hero-body">
          <div class="columns custom-columns">
            <div class="column is-6">
              <img class="fullwidth p-70" src="order-illustration.png" alt=""> 
            </div>
            <div class="column is-6 is-vertical-center">
              <div class="p-30">
                <h1 class=" m-b-40 title has-text-black is-size-3-desktop is-size-3-tablet is-size-4-mobile">
                  <b>Pesan cleaner tanpa ribet</b></h1>
                <p class="subtitle is-size-6-desktop is-size-6-tablet is-size-6-mobile has-text-dark-alexa"><b>Pesan
                    cukup dengan satu sentuhan di HP kita, ruangan favorit jadi kinclong setelah <span
                      class="has-text-digawean-primary"> dibersihin</span> <br> <br>
                      Begitu mudahnya <span class="has-text-digawean-primary"> dibersihin</span>, duduk santai, nikmati waktu luang dan serahkan urusan pada cleaner, karena selalu saja ada yang perlu <span class="has-text-digawean-primary"> dibersihin</span> </b></p>
              </div>
            </div>
          </div>
          <div class="columns ">
            <div class="column is-6 is-vertical-center">
              <div class="p-30">
                <h1 class="m-b-40 title has-text-black is-size-3-desktop is-size-3-tablet is-size-4-mobile">
                  <b>Aplikasi <span class="has-text-digawean-primary">dibersihin</span></b></h1>
                <p class="subtitle is-size-6-desktop is-size-6-tablet is-size-6-mobile has-text-dark-alexa"><b> Adalah platform aplikasi Jasa Kebersihan yang akan memberi kemudahan bagi para pelanggan (konsumen) untuk memanggil para petugas kebersihan (cleaner) 
                  yang diperlukan pada waktu yang dibutuhkan. <br><br>
                   Dilengkapi dengan sistem keamanan dua arah, baik dari sisi Konsumen maupun dari sisi para Cleaner yang terlibat langsung dalam transaksi pekerjaan tersebut. <br>
                   Sebagai salah satu tujuan aplikasi, <span class="has-text-digawean-primary">dibersihin</span> adalah untuk memberikan kepuasan prima atas setiap jasa pelayanan kepada penggunanya.</b>
                </p>
              </div>
            </div>
            <div class="column is-6">
              <img class="fullwidth  p-70" src="cleaning.png" alt="">
            </div>
          </div>
            <div class="columns custom-columns">
            <div class="column is-6">
              <img class="fullwidth p-70" src="aboutus.png" alt=""> 
            </div>
            <div class="column is-6 is-vertical-center">
              <div class="p-30">
                <p class="subtitle is-size-6-desktop is-size-6-tablet is-size-6-mobile has-text-dark-alexa"><b>Melibatkan ribuan pekerja dan secara terus menerus akan membuka lapangan kerja bagi yang membutuhkan, dan memberi waktu luang lebih bagi Konsumen untuk lebih santai<span
                      class="has-text-digawean-primary"> dibersihin</span> <br> <br>
                      Aplikasi<span class="has-text-digawean-primary"> dibersihin</span>, akan selalu dikembangkan sesuai dengan kebutuhan jasa pelayanan kebersihan lainnya yang dapat diberikan kepada seluruh masyarakat.</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    components: {

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

  .p-70 {
    padding: 70px;
  }

  .p-30 {
    padding: 30px;
  }

  h1.m-b-40.title.has-text-black.is-size-3-desktop.is-size-4-tablet.is-size-4-mobile {
    margin-bottom: 40px;
  }

  /* media query setting */
  @media screen and (max-width: 425px) and (min-width: 0px) {
    .p-70 {
      padding: 10px;
    }

    .p-30 {
      padding: 0px;
    }
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    .p-70 {
      padding: 20px;
    }

    .p-30 {
      padding: 10px;
    }
  }
</style>