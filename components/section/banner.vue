<template>
  <section class="home is-link  " style="position:relative" id="home">
    <img src="banner.png" class="backdrop-desktop" style="postion:absolute;top:0;left:0;bottom:0;right:0;"
      alt="" />
    <img src="ilustrasi_mobile.png" class="backdrop-mobile" style="postion:absolute;top:0;left:0;bottom:0;right:0;"
      alt="" />
    <div style="position:absolute;top:15%;left:0;bottom:0;right:0;">
      <center>
        <h1 class="title has-text-white is-size-1-desktop is-size-1-tablet is-size-5-mobile ls-5">
         APLIKASI JASA KEBERSIHAN DALAM GENGGAMAN</h1><br>
        <p class="subtitle has-text-white is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-dark-alexa">
          <b>Hargai waktu luang anda, nikmati dibersihin oleh cleaner terpercaya </b></p><br>
        <button v-scroll-to="'#download'"
          class="button button-download is-size-5-desktop is-size-6-tablet is-size-7-mobile"><b>DOWNLOAD
            SEKARANG</b></button>
      </center>
    </div>
  </section>
</template>

<style scoped>
  .ls-5 {
    letter-spacing: 5px;
  }

  .button {
    background-color: #ffffff00;
    border-color: #ffffff;
    border-width: 4px;
    color: #ffffff;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(0.375em - 1px);
    padding-left: 0.75em;
    padding-right: 0.75em;
    padding-top: calc(0.375em - 1px);
    text-align: center;
    white-space: nowrap;
    border-radius: 7px;
  }

  @media screen and (max-width: 2560px) and (min-width: 1026px) {
    img.backdrop-mobile {
      display: none;
    }

    .is-size-1-desktop {
      font-size: 4rem !important;
      font-weight: 900;
    }
  }

  @media screen and (max-width: 1440px) and (min-width: 1025px) {
    img.backdrop-mobile {
      display: none;
    }

    .is-size-1-desktop {
      font-size: 3rem !important;
      font-weight: 800;
    }
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    img.backdrop-mobile {
      display: none;
    }
  }

  @media screen and (max-width: 768px) and (min-width: 426px) {
    img.backdrop-mobile {
      display: none;
    }

    .is-size-1-tablet {
      font-size: 1.5rem !important;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 425px) and (min-width: 0px) {
    img.backdrop-desktop {
      display: none;
    }

    .is-size-5-mobile {
      font-size: 20px;
      font-weight: 800;
    }
  }
</style>