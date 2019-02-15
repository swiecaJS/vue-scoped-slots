<template>
  <div class="home">
    <div class="home__logo">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="home__texts">
      <h1>Understaning scoped slots</h1>
      <p>
        <em>Syntax changes in Vue 2.6</em>
      </p>
    </div>
    <div class="home__footer">
      <p>Karol Świeca 2019</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - var(--header-height));

  &__footer {
    position: fixed;
    bottom: 0;
    background: #3e5268;
    width: 100vw;
    color: #fff;
    text-align: right;

    p {
      margin-right: 20px;
      font-size: 15px;
    }
  }
}
</style>
