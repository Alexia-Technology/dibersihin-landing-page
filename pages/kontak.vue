<template>
  <section class="hero" style="position:relative; ">
    <div class="curved-bg" style="position:absolute; top:-120px;left:0;right:0;">
      <img style="width:100%; height:30vh;" src="curve_bg.png" alt="">
    </div>
    <div class="hero-body ">
      <div class="container" style="margin-top:40px">
        <p class="title has-text-centered">
          Kirimkan pesan kepada kami
        </p>
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <div class="">
              <div class="field is-fullwidth">
                <label class="label">Nama</label>
                <div class="control has-icons-left">
                  <input class="input is-primary" type="text" placeholder="Nama">
                  <span class="icon is-small is-left">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
              <div class="field is-fullwidth">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <input class="input is-primary" type="email" placeholder="Email">
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
              <div class="field is-fullwidth">
                <label class="label">No telp</label>
                <div class="control has-icons-left">
                  <input class="input is-primary" type="number" placeholder="No Telp">
                  <span class="icon is-small is-left">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Pesan</label>
                <div class="control">
                  <textarea class="textarea is-primary" rows="5" placeholder="Pesan anda"></textarea>
                </div>
              </div>
              <p class="help is-primary">Kami akan menghubungi anda setelah anda mengirim formulir berikut</p>
               <center>
            <nuxt-link to="/kontak" class="button is-info is-size-5-desktop is-size-6-tablet is-size-7-mobile">Kirim</nuxt-link>
          </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
