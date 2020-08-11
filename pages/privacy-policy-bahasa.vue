<template>
  <div>
    <pp/>
  </div>
</template>

<script>
  import pp from '@/components/privacy_policy_bahasa'

  export default {
    components: {
      pp,
    },
    layout:'privacyPolicy',
    data() {
      return {
        title: 'Dibersihin'
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
            content: 'Pesan Cleaner Tanpa Ribet'
          }
        ]
      }
    },
  }

</script>
