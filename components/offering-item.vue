<template>
  <div class="column">
    <div class="card">
      <p class="has-text-dark is-size-5-desktop is-size-6-tablet is-size-6-mobile has-text-centered p-5">{{offering}}
      </p>

      <div class="card-image">
        <figure class="image">
          <img class="icon-offering" :src="`/${image}`" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">


        <table>
          <tr>
            <td> <img class="check-icon" src="check.png" alt=""></td>
            <td style="margin-top:2px">some feature</td>
          </tr>
          <tr>
            <td> <img class="check-icon" src="check.png" alt=""></td>
            <td style="margin-top:2px">some feature</td>
          </tr>
        </table>

      </div>
      <div class="container">
        <footer class="card-footer">
          <a class="button is-small is-info is-size-6-desktop is-fullwidth is-size-6-tablet is-size-7-mobile">Pilih</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["offering", "image"]
  };

</script>

<style scoped>
  .p-5 {
    padding: 20px 5px;
  }

  .card {
    background-color: white;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a;
    max-width: 100%;
    position: relative;
    border-radius: 12px;
  }

  .card-image {
    display: block;
    position: relative;
    padding: 10% 30%;
  }

  .card-footer {
    background-color: transparent;
    align-items: stretch;
    display: flex;
    padding: 4%;
    border-top: none;
  }

  .check-icon {
    height: 22px;
    margin-right: 5px;
  }

  .icon-offering {
    height: 78px;
    object-fit: contain;
    width: 100%;
  }

</style>
