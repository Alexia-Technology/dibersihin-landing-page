<template>
          <div class="hero-body br-12 " style="background:#313070;color:white;min-height: 560px;position:relative; -webkit-box-shadow: 13px 14px 27px -17px rgba(0,0,0,0.75);
-moz-box-shadow: 13px 14px 27px -17px rgba(0,0,0,0.75);
box-shadow: 13px 14px 27px -17px rgba(0,0,0,0.75);">
        <div class="columns">
          <div class="column is-4 is-vertical-center">
            <div>
              <p class="subtitle is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-white"
                style="font-family: sans-serif;">
                <b>{{nama_client}}</b> <br><br>
              </p>
              <h2 class="title has-text-white is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-dark-alexa">
                {{judul}}</h2>
              <p>{{deskripsi}}</p>
              <br>
              <a href="https://medium.com/@eckyalimansyah/ae4ad71fe5d5" target="_blank"
                class="button is-merah-dfi  is-size-5-desktop is-size-6-tablet is-size-7-mobile">See Case Study</a>
              <a href="https://dfi.id/" target="_blank"
                class="button is-merah-dfi is-outlined is-size-5-desktop is-size-6-tablet is-size-7-mobile">Visit
                website</a>
            </div>
          </div>
          <div class="column is-8 is-paddingless">
            <img class="porto" src="/our-work/dfi-web.png" alt="">
          </div>
        </div>
      </div>
</template>

<script>
export default {
    props: ["nama_client", "judul", "deskripsi"]
}
</script>

<style>
  img.porto {
    position: absolute;
    width: 64%;
    bottom: 0;
    right: 0;
    border-bottom-right-radius: 12px;
  }
</style>