<template>
  <fragment>
    <slot :user="currentUser"></slot>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  data: () => ({ currentUser: null }),
  components: {
    Fragment
  },
  mounted() {
    window
      .fetch(`https://randomuser.me/api/`)
      .then(res => res.json())
      .then(response => {
        const {
          name: { first, last },
          picture: { thumbnail: avatar }
        } = response.results[0];
        this.currentUser = {
          avatar,
          name: `${first} ${last}`
        };
      });
  }
}
</script>

