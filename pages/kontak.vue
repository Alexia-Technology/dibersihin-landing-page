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
            <formInput label="Nama" type="text" placeholder="Nama" icon="fa fa-user" />
            <formInput label="Email" type="email" placeholder="Email" icon="fa fa-envelope" />
            <formInput label="No Telp" type="number" placeholder="No Telp" icon="fa fa-phone" />

            <div class="field">
              <label class="label">Pesan</label>
              <div class="control">
                <textarea class="textarea is-primary" rows="5" placeholder="Pesan anda"></textarea>
              </div>
            </div>

            <p class="help is-primary">Kami akan menghubungi anda setelah anda mengirim formulir berikut</p>
            <center>
              <nuxt-link to="/kontak" class="button is-info is-size-5-desktop is-size-6-tablet is-size-7-mobile">Kirim
              </nuxt-link>
            </center>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import formInput from '@/components/form-input'
  export default {
    components: {
      formInput
    },

    data() {
      return {
        title: 'kontak'
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
