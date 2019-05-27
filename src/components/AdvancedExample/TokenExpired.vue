<template functional>
  <div class="expiredToken">
    <h3>Your Spotify token expired!</h3>
    <p>They last only an hour ;C</p>
    <p>
      Go
      <a
        href="https://developer.spotify.com/console/get-search-item/?q=tania%20bowra&type=artist&market=&limit=&offset="
        target="_blank"
        rel="noreferrer"
      >here</a> and create new token
    </p>
  </div>
</template>

<style lang="scss" scoped>
.expiredToken {
  background: #cc0000;
  padding: 20px;
  color: #fff;

  h3 {
    font-size: 26px;
  }
  p {
    font-size: 20px;
  }
}
</style>
