<template>
  <section class="our-team  is-link is-fullheight is-vertical-center">
    <div class="container">
      <div class="hero-body has-text-centered">
        <h2 class="title is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-centered has-text-dark-alexa">
          Our Team </h2>
        <h2 class="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-centered has-text-dark-alexa">
          The ones who will be delivering you a better experience in <br> developing your apps </h2><br>
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <div class="columns is-multiline is-centered">
              <timItem v-for="team in teams" :key="team.id" :foto="team.photo" :nama="team.nama" :role="team.role" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import timItem from '@/components/card/tim-card'
  export default {
    data() {
      return {
        title: 'alexia technology',
        teams: [
         
          {
            id: 1,
            nama: "Ecky Alimansyah",
            photo: "tim/eki.jpg",
            role: "UI / UX Designer"
          },
           {
            id: 2,
            nama: "Recito Gigih P.",
            photo: "tim/gigih.jpg",
            role: "Front-end Developer"
          },
          {
            id: 3,
            nama: "Tiara S W.",
            photo: "tim/tiara.png",
            role: "Digital Marketing"
          },
          {
            id: 4,
            nama: "Adrian",
            photo: "tim/adrian.png",
            role: "Front-end Developer"
          },{
            id: 5,
            nama: "Choerul S.",
            photo: "tim/kerul.png",
            role: "Back-end Developer"
          },
    
          
        ]
      }
    },
    components: {
      timItem
    },
  }

</script>

<style>
  section.our-team {
    min-height: 80vh;
  }

</style>
