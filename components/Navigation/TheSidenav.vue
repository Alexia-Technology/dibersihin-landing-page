<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav">

        <div class="close" @click="$emit('close')" style="position:absolute;right:8%;top:2%;cursor:pointer;"> <i
            class="fa fa-2x fa-times" aria-hidden="true"></i>
        </div>
        <ul class="nav-list" @click="$emit('close')">
          <nuxt-link to="/" v-scroll-to="'#home'" class="has-text-dark">
            <li class="nav-item">
              Beranda
            </li>
          </nuxt-link>

          <nuxt-link to="/" v-scroll-to="'#about'" class="has-text-dark">
            <li class="nav-item">
              Tentang Kami
            </li>
          </nuxt-link>

          <nuxt-link to="/" v-scroll-to="'#join'" class="has-text-dark">
            <li class="nav-item">
              Gabung
            </li>
          </nuxt-link>

          <nuxt-link to="/tutorial" v-scroll-to="'#join'" class="has-text-dark">
            <li class="nav-item">
              Tutorial
            </li>
          </nuxt-link>

          <nuxt-link to="/FAQ" v-scroll-to="'#join'" class="has-text-dark">
            <li class="nav-item">
              FAQ
            </li>
          </nuxt-link>

          <nuxt-link to="/privacy-policy" v-scroll-to="'#join'" class="has-text-dark">
            <li class="nav-item">
              Ketentuan
            </li>
          </nuxt-link>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "TheSidenav",
    props: {
      show: {
        type: Boolean,
        default: false
      }
    }
  };
</script>


<style scoped>
  .sidenav-container {
    height: 100%;
    width: 100%;
  }

  .sidenav-backdrop {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    position: fixed;
    top: 0;
    right: 0;
  }

  .sidenav {
    height: 100%;
    width: 50%;
    background-color: white;
    z-index: 10000;
    position: fixed;
    top: 0;
    right: 0;
    box-sizing: border-box;
    padding: 30px;
  }

  .slide-side-enter-active,
  .slide-side-leave-active {
    transition: all 0.3s ease-out;
  }

  .slide-side-enter,
  .slide-side-leave-to {
    transform: translateX(100%);
  }

  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav-item {
    margin: 20px 0;
  }

  .nav-item a {
    text-decoration: none;
    color: black;
    /* font-size: 1.5rem; */
  }

  .nav-item a:hover,
  .nav-item a:active {
    color: #F08300;
  }
</style>