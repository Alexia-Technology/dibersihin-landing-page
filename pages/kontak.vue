<template>
  <section class="hero  is-fullheight is-vertical-center" style="position:relative; ">
    <!-- <div class="curved-bg" style="position:absolute; top:-120px;left:0;right:0;">
      <img style="width:100%; height:30vh;" src="curve_bg.png" alt="">
    </div> -->
    <div class="hero-body ">
      <div class="container" style="margin-top:40px">
        <div class="columns">
          <div class="column is-7">
         
            <img src="/illustration_contact.png" alt="">
          </div>
          <div class="column is-5">
               <h2 class="title is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-dark-alexa">
              Send us your request </h2>
            <p>Your request will be disccussed briefly with our team. You only have to wait for us to contact you.</p>
            <br><br>
            <!-- <div class="card">
                <div class="card-content"> -->
              <formInput type="text" placeholder="Name" icon="fa fa-user" />
              <formInput type="email" placeholder="Email" icon="fa fa-envelope" />
              <formInput type="number" placeholder="Phone Number" icon="fa fa-phone" />

              <div class="field">
                <!-- <label class="label">Pesan</label> -->
                <div class="control">
                  <textarea class="textarea is-default" rows="5" placeholder="Message"></textarea>
                </div>
              </div>
              <center>
                <nuxt-link to="/kontak" class="button is-info is-size-5-desktop is-size-6-tablet is-size-7-mobile">Send
                  my request
                </nuxt-link>
              </center>
            </div>
          </div>
          <!-- </div>
        </div> -->
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
