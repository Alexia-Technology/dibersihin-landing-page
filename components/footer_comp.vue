<template>
  <section class="footer is-paddingless is-link is-fullheight is-vertical-center">
    <div class="container">
      <div class="hero-body" style="z-index:100">
        <div class="columns">
          <div class="column">
            <img class="is-vertical-center" src="logo-dibersihin-putih.svg" alt="Digawean Logo">
            <br>
            <h2 class="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile  has-text-white">
              PT. Digawean Integrasi Teknologi </h2>
            <table>
              <tr>
                <td style="width:6%">
                  <p class="has-text-white">
                    <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                  </p>
                </td>
                <td>
                  <p class="has-text-white"> Jl. Taman Margasatwa Raya No.37 Unit 02, Jati Padang, <br> Kec.Ps. Minggu,
                    Kota Jakarta
                    Selatan, Daerah Khusus Ibukota Jakarta 12540</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="has-text-white">
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                  </p>
                </td>
                <td>
                  <p class="has-text-white">kontakkami@digawean.com</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="has-text-white">
                    <font-awesome-icon :icon="['fas', 'phone-alt']" />
                  </p>
                </td>
                <td>
                  <p class="has-text-white"> 021 278754400</p>
                </td>
              </tr>
            </table>
          </div>
          <div class="column">
            <h2 class="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile  has-text-white">
              <b> Unduh Aplikasi </b></h2>
            <img src="play-store-btn-2.svg" style="width:125px;" alt="">
            <br><br>
            <h2 class="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile  has-text-white">
              <b> Ikuti kami </b></h2>
            <a href="#">
              <font-awesome-icon :icon="['fab', 'instagram']" size="2x" /></a>
            <a href="#">
              <font-awesome-icon :icon="['fab', 'youtube']" size="2x" /></a>
            <a href="#">
              <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" /></a>
          </div>

        </div>
        <hr>
        <p class="has-text-white">Copyrights &copy; 2020 PT. Digawean Integrasi Teknologi</p>
      </div>
    </div>

  </section>
</template>

<style scoped>
  section.footer {
    /* background-image: url(/contact_bg.png); */
    background: #2E2E2E;
    background-position: top;
    background-repeat: no-repeat;
    /* min-height: 50vh; */
    background-size: auto;
    position: relative;
  }

  a {
    color: white
  }
</style>