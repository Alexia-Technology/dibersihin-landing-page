<template>
  <nuxt/>
</template>

<script>
export default {
  mounted() {
    const html = document.getElementsByTagName('html')[0]
    html.style.setProperty('overflow', 'hidden')
  },
  beforeDestroy() {
    const html = document.getElementsByTagName('html')[0]
    html.style.setProperty('overflow-x', 'hidden')
    html.style.setProperty('overflow-y', 'scroll')
  }
}
</script>