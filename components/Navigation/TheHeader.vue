<template>

  <div class="header-container">

    <header class="the-header" :class="{ 'the-header--hidden': !showNavbar }" id="nav">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo ">
        <nuxt-link to="/"><img class="is-vertical-center" src="alexia_logo.png" alt="Alexia Logo">
        </nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link to="/" exact>Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/our-work">
              Our Work
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/contact-us">Contact Us</nuxt-link>
          </li>
        </ul>
      </div>
    </header>

  </div>

</template>

<script>
  import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

  export default {
    name: "TheHeader",
    components: {
      TheSideNavToggle
    },
    data() {
      return {
        showNav: false,
        showNavbar: true,
        lastScrollPosition: 0
      };
    },
    mounted() {
      window.addEventListener("scroll", this.onScroll);
      this.$nextTick(function () {
        window.addEventListener("scroll", function () {
          var navbar = document.getElementById("nav")
          var nav_classes = navbar.classList
          if (document.documentElement.scrollTop >= 150 || document.body.scrollTop >= 150) {
            if (nav_classes.contains("shrink") === false) {
              nav_classes.toggle("shrink");
            }
          } else {
            if (nav_classes.contains("shrink") === true) {
              nav_classes.toggle("shrink");
            }
          }
        })
      })
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.onScroll);
    },

    methods: {
      onScroll() {
        // Get the current scroll position
        const currentScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
        if (currentScrollPosition < 0) {
          return;
        }
        // Here we determine whether we need to show or hide the navbar
        this.showNavbar = currentScrollPosition < this.lastScrollPosition;
        // Set the current scroll position as the last scroll position
        this.lastScrollPosition = currentScrollPosition;
      }
    }
  };

</script>


<style scoped>
  .the-header.shrink {
    transition: all 0.5s;
    background: white;
    -webkit-box-shadow: 0px 18px 37px -13px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 18px 37px -13px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 18px 37px -13px rgba(0, 0, 0, 0.75);
    /* color: black !important; */
  }

  .the-header.the-header--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);

  }

  /* .header-container {
    height: 60px;
  } */

  .the-header {
    width: 100%;
    position: fixed;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* background-color: rgb(255, 255, 255); */
    /* background: -webkit-linear-gradient(top, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.8) 65%, rgba(255, 255, 255, 0.5) 88%, rgba(255, 255, 255, 0.3) 100%); */
    z-index: 100;
    box-sizing: border-box;
    padding: 0px 5%;
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
    transition: all 0.5s;

  }

  .logo {
    width: 130px;
  }

  .logo a {
    text-decoration: none;
  }

  .spacer {
    flex: 1;
  }

  .navigation-items {
    display: none;
  }

  @media (min-width: 768px) {
    .navigation-items {
      display: block;
    }
  }

  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  .nav-item {
    margin: 0 10px;
  }

  .nav-item a {
    text-decoration: none;
    color: #6C6F6E;
    font-size: 22px;
    font-weight: bolder;
  }

  .nav-item a:hover,
  .nav-item a:active,
  .nav-item a.nuxt-link-active {
    color: #01bfe6;
  }

  .is-vertical-center {
    display: flex;
    align-items: center;
  }

</style>
