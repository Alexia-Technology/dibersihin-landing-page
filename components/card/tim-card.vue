<template>
  <div class="column is-4">
    <div class="card">
      <div class="card-image">
        <figure class="image">
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

<style>
.card {
  background-color: white;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
  border-radius: 12px;
  -webkit-box-shadow: 14px 11px 37px -15px rgba(0, 0, 0, 0.66);
  -moz-box-shadow: 14px 11px 37px -15px rgba(0, 0, 0, 0.66);
  box-shadow: 14px 11px 37px -15px rgba(0, 0, 0, 0.66);
}


.card-image {
  display: block;
  position: relative;
  padding: 10% 25%;
}

.image img {
  display: block;
  height: auto;
  width: 100%;
  /* min-height: 102px; */
}

/* .card-image {
  display: block;
  position: relative;
  padding: 10% 30%;
} */


</style>