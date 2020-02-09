<template>
  <div>
    <banner/>
    <quotes/>
    <offering/>
    <ourWork/>
    <team/>
    <contact/>
  </div>
</template>

<script>
  import banner from '@/components/section/banner'
  import quotes from '@/components/section/quotes'
  import offering from '@/components/section/offering'
  import ourWork from '@/components/section/ourwork'
  import team from '@/components/section/team'
  import contact from '@/components/section/contact'
  export default {
    components: {
      banner,
      quotes,
      offering,
      team,
      contact,
      ourWork
    },
    data() {
      return {
        title: 'alexia technology'
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
