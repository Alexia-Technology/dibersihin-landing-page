<template>
  <div class="column is-3">
    <div class="card">
      <div class="card-image">
        <figure class="image ">
          <img class="br-50" :src="`/${foto}`" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <b class="has-text-dark is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-centered p-5">
          {{nama}}
        </b>
        <p>{{role}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["foto", "nama", "role"]
  };

</script>