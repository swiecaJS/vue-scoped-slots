<template>
  <section>
    <h3>Your Users</h3>
    <div class="users">
      <div class="user" v-for="user in users" :key="user.email">
        <div class="user__image">
          <img :src="user.picture.thumbnail" :alt="`${user.name.first} avatar`">
        </div>
        <div class="user__data">
          <p>{{user.name.first}} {{user.name.last}}</p>
          <p>
            <em>{{user.email}}</em>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
const API_URL = "https://randomuser.me/api/?results=5";
export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      const response = await axios.get(API_URL);
      this.users = response.data.results;
    }
  }
};
</script>

<style lang="scss" scoped>
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.user {
  display: flex;
  min-width: 300px;
  justify-content: space-between;
  border: 1px solid #eee;
  padding: 0 20px;
  margin-bottom: 10px;

  &__image {
    display: flex;
    align-items: center;

    img {
      border-radius: 100%;
    }
  }
}
</style>
