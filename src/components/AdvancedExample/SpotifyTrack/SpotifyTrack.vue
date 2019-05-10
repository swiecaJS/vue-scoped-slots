<template>
  <article class="track">
    <div class="track__image">
      <img :src="track.album.images[1].url" :alt="` avatar`">
    </div>
    <div class="track__data">
      <h4>{{track.name}}</h4>
      <h5>{{track.artists[0].name}}</h5>
    </div>
    <div class="track__play">
      <p @click="goToSpotify">Play ▶</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    track: Object
  },
  methods: {
    goToSpotify() {
      window.open(this.track.external_urls.spotify, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
.track {
  display: flex;
  position: relative;
  padding: 10px 20px;
  min-width: 400px;
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
    flex-direction: column;

    h4 {
      font-size: 19px;
      padding: 0;
      margin: 0;
    }
    h5 {
      margin: 0;
    }
  }

  &__play {
    position: absolute;
    bottom: 12px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;

    p {
      margin: 0;
    }

    &:hover {
      bottom: 10px;
      border-bottom: 2px solid #00bd7e;
    }
  }
}
</style>
