<template>
  <header id="header" class="header">
    <div class="header__title">
      <h1>Vue Scoped Slots</h1>
    </div>
    <div class="header__links">
      <router-link to="/">Home</router-link>
      <router-link to="/basic">Basic</router-link>
      <router-link to="/advanced">Advanced</router-link>
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
  }

  &__links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 250px;
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
