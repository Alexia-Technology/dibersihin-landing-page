<template>
  <div class="field is-fullwidth">
    <!-- <label class="label">{{label}}</label> -->
    <div class="control has-icons-left">
      <input class="input is-default" :type="`${type}`"  :placeholder="`${placeholder}`">
      <span class="icon is-small is-left">
        <i :class="`${icon}`" aria-hidden="true"></i>
      </span>
    </div>
    <br>
  </div>
</template>

<script>
  export default {
    props: [ "type", "placeholder","icon"]
  };

</script>