<template>
  <section class="view">
    <div class="title">
      <h1>Basic usage</h1>
      <p>Alter display of a component</p>
      <p>
        Access
        <strong>child props</strong> in parent
      </p>
    </div>
    <div class="examples">
      <div class="example">
        <pre>{{ userListSyntax }}</pre>
        <UsersList />
      </div>
      <div class="example">
        <div class="code-wrapper">
          <pre>{{ userListWithSlotsSyntax }}</pre>
        </div>
        <UsersListWithSlot>
          <template v-slot="{ user }">
            <div class="text--red text--heavy">
              {{ user.name.first }} {{ user.name.last }}
            </div>
            <div>Age: {{ user.dob.age }}</div>
            <div>Phone:{{ user.phone }}</div>
            <div>City:{{ user.location.city }}</div>
          </template>
        </UsersListWithSlot>
      </div>
    </div>
  </section>
</template>

<script>
import UsersList from "@/components/Users/UsersList/UsersList.vue";
import UsersListWithSlot from "@/components/Users/UsersListWithSlot/UsersListWithSlot.vue";
export default {
  components: {
    UsersList,
    UsersListWithSlot,
  },
  data() {
    return {
      userListSyntax: `<UserList />`,
      userListWithSlotsSyntax: `
        <UsersListWithSlot>
          <template v-slot="{user}">
            <div class="text--red text--heavy">
              {{user.name.first}} {{user.name.last}}
            </div>
            <div>Age: {{user.dob.age}}</div>
            <div>Phone:{{user.phone}}</div>
          </template>
        </UsersListWithSlot>
      `
    };
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 2em;
  h1 {
    margin: 0;
  }

  p {
    margin: 0;
    font-style: italic;
  }
}

.examples {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.text {
  &--red {
    color: red;
  }

  &--heavy {
    font-weight: 900;
  }
}

pre {
  text-align: left;
  display: inline-block;
  min-height: 200px;
}
</style>
