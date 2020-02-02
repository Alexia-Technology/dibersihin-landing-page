<template>
  <section class="footer is-paddingless is-link is-fullheight is-vertical-center">
    <div class="container">
      <div class="hero-body" style="z-index:100">
        <div class="columns">
          <div class="column">
            <h2 class="title is-size-3-desktop is-size-4-tablet is-size-5-mobile  has-text-white">
              alexia technology </h2>
            <h2 class="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile  has-text-white">
              PT. alexia Indo Tech </h2>
          </div>

          <div class="column">
            <nuxt-link to="#">
              <h2 class="subtitle mb-5 is-size-4-desktop is-size-5-tablet is-size-6-mobile  has-text-white">
                Home </h2>
            </nuxt-link>

            <!-- <nuxt-link to="#">
              <h2 class="subtitle mb-5 is-size-4-desktop is-size-5-tablet is-size-6-mobile  has-text-white">
                Portofolio </h2>
            </nuxt-link> -->
            <nuxt-link to="#">
              <h2 class="subtitle mb-5 is-size-4-desktop is-size-5-tablet is-size-6-mobile  has-text-white">
                Contact </h2>
            </nuxt-link>
          </div>
        </div>
        <hr>
         <p class="has-text-white">Hak cipta &copy; 2020 alexiatech</p>
        <!-- <p class="has-text-white">Copyright &copy; 2019 alexiatech. All rights reserved</p> -->
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

</style>
