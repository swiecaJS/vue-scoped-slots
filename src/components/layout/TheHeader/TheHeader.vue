<template>
  <header id="header" class="header">
    <div class="header__title" @click="$router.push('/')">
      <h1>Vue Scoped Slots</h1>
    </div>
    <div class="header__links">
      <router-link to="/">
        <p>Home</p>
      </router-link>
      <router-link to="/basic">
        <p>Basic</p>
      </router-link>
      <router-link to="/advanced">
        <p>Advanced</p>
      </router-link>
      <a
        href="http://blog.swiecajs.pl/javascript/vue/2019/02/15/vue-scoped-slots.html"
        target="_blank"
        rel="noopener"
        class
      >
        <p>Read article</p>
      </a>
    </div>
  </header>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.header {
  display: flex;
  background: #42b983;
  justify-content: space-between;
  height: var(--header-height);
  padding: 0;
  margin: 0;

  &__title {
    padding: 0 20px;
    align-self: center;
    cursor: pointer;
  }

  &__links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 360px;
    padding: 0 20px;
  }
}

a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
}
</style>
