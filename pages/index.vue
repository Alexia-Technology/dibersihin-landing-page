<template>
  <div>
    <banner/>
    <about/>
    <join/>
    <download/>
  </div>
</template>

<script>
  import banner from '@/components/section/banner'
  import about from '@/components/section/about'
  import join from '@/components/section/join'
  import download from '@/components/section/download'

  export default {
    components: {
      banner,
      about,
      download,
      join
    },
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
