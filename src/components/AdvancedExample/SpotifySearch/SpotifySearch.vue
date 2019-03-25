<template>
  <div>
    <slot name="inputHeader"></slot>
    <input type="text" v-model="query">
    <slot name="results" :isLoading="isLoading" :results="results"></slot>
    <slot name="tokenExpired" :isTokenExpired="isTokenExpired"></slot>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    queryType: String,
    apiKey: String
  },
  data() {
    return {
      query: "",
      debouncedAskSpotify: null,
      isLoading: false,
      results: null,
      isTokenExpired: false
    };
  },
  created() {
    this.debouncedAskSpotify = this.debounce(this.askSpotify, 500);
  },
  watch: {
    query(query) {
      if (query) {
        this.debouncedAskSpotify(query);
      }
    },
    apiKey() {
      this.debouncedAskSpotify = this.debounce(this.askSpotify, 500);
    }
  },
  methods: {
    debounce(func, time) {
      let timeout;
      return function() {
        const functionCall = () => func.apply(this, arguments);
        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
      };
    },
    askSpotify(query) {
      this.isLoading = true;
      axios
        .get(
          `https://api.spotify.com/v1/search?q=${window.encodeURIComponent(
            query
          )}&type=${this.queryType}`,
          {
            headers: {
              Authorization: `Bearer ${this.apiKey}`,
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          this.results = response.data;
          this.isTokenExpired = false;
        })
        .catch(err => {
          if (String(err).includes("401")) {
            this.isTokenExpired = true;
          }
        })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>
