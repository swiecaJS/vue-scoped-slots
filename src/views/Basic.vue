<template>
  <section>
    <h1>Basic usage</h1>
    <p>Alter display of a component</p>
    <UsersList/>
  </section>
</template>

<script>
import UsersList from "@/components/Users/UsersList/UsersList.vue";
export default {
  components: {
    UsersList
  }
};
</script>

