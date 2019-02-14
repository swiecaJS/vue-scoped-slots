<template>
  <article class="artist">
    <div class="artist__image">
      <img :src="artist.images[1].url" :alt="`${artist.name} avatar`">
    </div>
    <div class="artist__data">
      <h4>{{artist.name}}</h4>
    </div>
    <!-- <div class="artist__generes">
      <ul>
        <li v-for="genere in artist.genres">{{genere}}</li>
      </ul>
    </div>-->
  </article>
</template>

<script>
export default {
  props: {
    artist: Object
  }
};
</script>

<style lang="scss" scoped>
.artist {
  display: flex;
  padding: 10px 20px;
  min-width: 290px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  max-width: 200px;
  height: 150px;

  &__image {
    display: flex;
    align-items: center;
    margin-right: 10px;

    img {
      max-width: 150px;
      max-height: 100%;
    }
  }

  &__data {
    align-items: center;
    display: flex;
    justify-content: center;
    flex: 1;

    h4 {
      font-size: 19px;
    }
  }
}
</style>
