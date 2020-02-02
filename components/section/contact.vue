<template>
  <section class="contact is-link is-fullheight is-vertical-center">
    <div class="container">
      <div class="hero-body" style="z-index:100">
        <h2 class="title is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-centered has-text-dark-alexa">
          Contact Us </h2>
        <h2 class="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-centered has-text-dark-alexa">
          We are ready whenever and wherever. </h2>
        <center>
          <nuxt-link to="/kontak" class="button is-info is-size-5-desktop is-size-6-tablet is-size-7-mobile">Yes,
            please</nuxt-link>
        </center>
      </div>
    </div>
    <img class="bg-kiri" src="contact_bg_kiri.png" alt="">
    <img class="bg-kanan" src="contact_bg_kanan.png" alt="">
  </section>
</template>

<style>
  section.contact {
    /* background: #f1faf9; */
    background-position: top;
    background-repeat: no-repeat;
    min-height: 60vh;
    background-size: auto;
    position: relative;
    z-index: 1;
  }

  img.bg-kiri {
    position: absolute;
    width: 13%;
    left: 40px;
    top: 20%;
    z-index: -1;
  }

  img.bg-kanan {
    position: absolute;
    width: 23%;
    right: 30px;
    top: 20%;
    z-index: -1;
  }
</style>