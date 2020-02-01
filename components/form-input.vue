<template>
  <div class="field is-fullwidth">
    <label class="label">{{label}}</label>
    <div class="control has-icons-left">
      <input class="input is-primary" :type="`${type}`"  :placeholder="`${placeholder}`">
      <span class="icon is-small is-left">
        <i :class="`${icon}`" aria-hidden="true"></i>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["label", "type", "placeholder","icon"]
  };

</script>