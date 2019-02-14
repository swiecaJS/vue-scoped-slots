<template>
  <div>
    <slot name="inputHeader"></slot>
    <input type="text" v-model="query">
    <slot name="results" :isLoading="isLoading" :results="results"></slot>
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
      axiosInstance: null,
      isLoading: false,
      results: null
    };
  },
  created() {
    this.debouncedAskSpotify = this.debounce(this.askSpotify, 500);
    this.axiosInstance = axios;
    // this.axiosInstance.defaults.baseUrl = "https://api.spotify.com";
    this.axiosInstance.defaults.headers.common = {
      Authorization: `Bearer ${this.apiKey}`,
      Accept: "application/json",
      "Content-Type": "application/json"
    };
  },
  watch: {
    query(query) {
      if (query) {
        this.debouncedAskSpotify(query);
      }
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
      console.log("ask spotify", query, this.apiKey, this.queryType);
      this.isLoading = true;
      this.axiosInstance
        .get(
          `https://api.spotify.com/v1/search?q=${window.encodeURIComponent(
            query
          )}&type=${this.queryType}`
        )
        .then(response => {
          console.log("axios response", response);
          this.results = response.data;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>
