<template>
  <section>
    <h3>Your Users</h3>
    <div class="users">
      <div class="user" v-for="user in users" :key="user.email">
        <div class="user__image">
          <img :src="user.picture.thumbnail" :alt="`${user.name.first} avatar`">
        </div>
        <div class="user__data">
          <h4>
            <slot :user="user"></slot>
          </h4>
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
h4,
p {
  padding: 0;
  margin: 0;
}

.users {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}

.user {
  display: flex;
  padding: 10px 20px;
  min-width: 290px;
  margin-bottom: 10px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  font-size: 14px;

  &__image {
    display: flex;
    align-items: center;
    margin-right: 10px;

    img {
      border-radius: 100%;
    }
  }
}
</style>
