<template>
  <section>
    <h1>Advanced</h1>
    <p>We can resuse data, and leave heavy lifting to a component (like auth, api calls)</p>
    <pre>{{componentSyntax}}</pre>
    <div class="tokenInfo">
      <hr>
      <p>At the beginning check if Spotify token is still valid</p>
      <p>Current token:</p>
      <textarea name id cols="30" rows="10" v-model="apiKey"></textarea>
      <hr>
    </div>
    <article class="example">
      <h2>#1 - component will display what's availible</h2>
      <pre>{{firstExample}}</pre>
      <SpotifySearch :queryType="'artist'" :apiKey="apiKey" class="search">
        <template #inputHeader>
          <h3>Search for Spotify Artist</h3>
        </template>
        <template #results="{isLoading, results}">
          <p>Is loading data: {{isLoading}}</p>
          <div v-show="results" class="resultsWrapper">
            <p>Api results:</p>
            <pre>{{results}}</pre>
          </div>
        </template>
        <template #tokenExpired="{isTokenExpired}">
          <div v-if="isTokenExpired" class="expiredToken">
            <h3>Your Spotify token expired!</h3>
            <p>They last only an hour ;C</p>
            <p>
              Go
              <a
                href="https://developer.spotify.com/console/get-search-item/?q=tania%20bowra&type=artist&market=&limit=&offset="
              >here</a> and create new token
            </p>
          </div>
        </template>
      </SpotifySearch>
    </article>
    <article class="example">
      <h2>#2 - We will use that that as we wish</h2>
      <pre>{{secondExample}}</pre>
      <SpotifySearch :queryType="'artist'" :apiKey="apiKey" class="search">
        <template #inputHeader>
          <h3>Search for Spotify Artist</h3>
        </template>
        <template #results="{isLoading, results}">
          <p v-show="isLoading">Loading...</p>
          <div v-if="results" class="resultsWrapper">
            <div class="artistWrapper">
              <SpotifyArtist
                v-for="artist in results.artists.items"
                :artist="artist"
                :key="artist.id"
              />
            </div>
          </div>
        </template>
        <template #tokenExpired="{isTokenExpired}">
          <div v-if="isTokenExpired" class="expiredToken">
            <h3>Your Spotify token expired!</h3>
            <p>They last only an hour ;C</p>
            <p>
              Go
              <a
                href="https://developer.spotify.com/console/get-search-item/?q=tania%20bowra&type=artist&market=&limit=&offset="
              >here</a> and create new token
            </p>
          </div>
        </template>
      </SpotifySearch>
    </article>
  </section>
</template>


<script>
import SpotifySearch from "@/components/AdvancedExample/SpotifySearch/SpotifySearch.vue";
import SpotifyArtist from "@/components/AdvancedExample/SpotifyArtist/SpotifyArtist.vue";
export default {
  data() {
    return {
      componentSyntax: `
  <div>
    <slot name="inputHeader"></slot>
    <input type="text" v-model="query">
    <slot name="results" :isLoading="isLoading" :results="results"></slot>
  </div>
  `,
      firstExample: `
    <SpotifySearch :queryType="'artist'" :apiKey="apiKey" class="search">
      <template #inputHeader>
        <h3>Search for Spotify Artist</h3>
        <p>This component just displays data</p>
      </template>
      <template #results="{isLoading, results}">
        <p>Is loading data: {{isLoading}}</p>
        <div v-show="results" class="resultsWrapper">
          <p>Api results:</p>
          <pre>{{results}}</pre>
        </div>
      </template>
    </SpotifySearch>
  `,
      secondExample: `
    <SpotifySearch :queryType="'artist'" :apiKey="apiKey" class="search">
      <template #inputHeader>
        <h3>Search for Spotify Artist</h3></h3>
      </template>
      <template #results="{isLoading, results}">
        <p v-show="isLoading">Loading...</p>
        <div v-if="results" class="resultsWrapper">
          <div class="artistWrapper">
            <SpotifyArtist
              v-for="artist in results.artists.items"
              :artist="artist"
              :key="artist.id"
            />
          </div>
        </div>
      </template>
    </SpotifySearch>
  `,
      apiKey:
        "BQBQHiKEj_SbES4H5dZOiSbGN5c6ff3HiaDCDsXI3YsktLG0EFLhlm7gQwJCgURMXtCvmHSsnYeTJAMI3I3Pd3JIiEuvJbaHxd3Li00CqAd9GcoOxM_5pvK0EXuWIKIDcL5rmHULtO1eqA"
    };
  },
  components: {
    SpotifySearch,
    SpotifyArtist
  }
};
</script>

<style lang="scss" scoped>
pre {
  text-align: left;
  margin: 0 auto;
  display: inline-block;
  overflow-y: scroll;
  max-height: 200px;
  border: 1px solid #eee;
  padding: 10px;
  background: #fff;
}

.search {
  box-shadow: 0 8px 6px -6px black;
  border: 1px solid #eee;
  margin: 20px 60px;
  padding: 20px 0;
  background: #fff;
}
.artistWrapper {
  display: grid;
  padding: 20px 0;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-items: center;
}

.tokenInfo {
  background: #ddd;
  margin: 40px 0;
}
hr {
  padding: 0;
  margin: 0;
}

.example {
  border: 1px solid green;
  margin: 30px 0;
  background: #f7f7f7;
}

.expiredToken {
  background: #cc0000;
  padding: 20px;
  color: #fff;

  h3 {
    font-size: 26px;
  }
  p {
    font-size: 20px;
  }
}
</style>
