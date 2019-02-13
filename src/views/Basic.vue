<template>
  <section>
    <h1>Basic usage</h1>
    <p>Alter display of a component</p>
    <UsersList/>
    <UsersListWithSlot>
      <template v-slot="{user}">
        <div class="text--red text--heavy">{{user.name.first}} {{user.name.last}}</div>
        <div>Age: {{user.dob.age}}</div>
        <div>Phone:{{user.phone}}</div>
      </template>
    </UsersListWithSlot>
  </section>
</template>

<script>
import UsersList from "@/components/Users/UsersList/UsersList.vue";
import UsersListWithSlot from "@/components/Users/UsersListWithSlot/UsersListWithSlot.vue";
export default {
  components: {
    UsersList,
    UsersListWithSlot
  }
};
</script>

<style lang="scss" scoped>
.text {
  &--red {
    color: red;
  }

  &--heavy {
    font-weight: 900;
  }
}
</style>
