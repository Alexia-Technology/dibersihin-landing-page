<template>
  <div>
    <section class="offering is-link is-fullheight is-vertical-center" id="about">
      <div class="container">
        <div class="hero-body">
          <h1 class=" m-b-40 title has-text-black is-size-3-desktop is-size-3-tablet is-size-4-mobile has-text-center">
            <b>PRIVACY POLICY</b></h1>
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
    layout:'privacyPolicy',
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