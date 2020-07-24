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
                <p class="subtitle is-size-4-desktop is-size-4-tablet is-size-6-mobile has-text-dark-alexa"><b>Pesan
                    Cukup dengan satu sentuhan ruangan favorit jadi kinclong setelah <span
                      class="has-text-digawean-primary"> dibersihin</span></b></p>
              </div>
            </div>
          </div>
          <div class="columns ">
            <div class="column is-6 is-vertical-center">
              <div class="p-30">
                <h1 class="m-b-40 title has-text-black is-size-3-desktop is-size-3-tablet is-size-4-mobile">
                  <b>Mudahnya <span class="has-text-digawean-primary">dibersihin</span></b></h1>
                <p class="subtitle is-size-4-desktop is-size-4-tablet is-size-6-mobile has-text-dark-alexa"><b>Duduk
                    santai, serahkan pada cleaner. Karean selalu ada aja yang perlu di <span class="has-text-digawean-primary">dibersihin</span></b>
                </p>
              </div>
            </div>
            <div class="column is-6">
              <img class="fullwidth  p-70" src="cleaning.png" alt="">
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