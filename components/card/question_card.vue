<template>
  <div>
    <div class="card">
      <div class="card-content">
        <div class="content ">
          <h2 class="title is-4 has-text-digawean-primary">
            <b>Q : {{ pertanyaan }} </b>
          </h2>
          <p class="has-text-small">
            <span class=""
              ><b>A: {{ jawaban }}</b></span
            >
          </p>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  props: ["pertanyaan", "jawaban"],
};
</script>
