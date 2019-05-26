<template>
  <section>
    <h1>Advanced</h1>
    <p>
      We can resuse data, and leave heavy lifting to a component (like auth, api
      calls)
    </p>
    <pre>{{ componentSyntax }}</pre>
    <div class="tokenInfo">
      <hr />
      <p>At the beginning check if Spotify token is still valid</p>
      <p>Current token:</p>
      <textarea name id cols="30" rows="10" v-model="apiKey"></textarea>
      <hr />
    </div>
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <article class="example">
      <h2>#1 - component will display what's availible</h2>
      <SpotifySearch
        :queryType="spotifySearchType"
        :apiKey="apiKey"
        class="search"
      >
        <template #inputHeader>
          <h3>
            Search for Spotify
            <select v-model="spotifySearchType">
              <option disabled value>Please select one</option>
              <option>artist</option>
              <option>track</option>
              <option>playlist</option>
              <option>album</option>
            </select>
          </h3>
        </template>
        <template #results="{isLoading, results}">
          <p>Is loading data: {{ isLoading }}</p>
          <div v-show="results" class="resultsWrapper">
            <p>Api results:</p>
            <pre>{{ results }}</pre>
          </div>
        </template>
        <template #tokenExpired="{isTokenExpired}">
          <TokenExpired v-if="isTokenExpired" />
        </template>
      </SpotifySearch>
    </article>
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <article class="example">
      <h2>#2 - We will use that that as we wish</h2>
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
          <TokenExpired v-if="isTokenExpired" />
        </template>
      </SpotifySearch>
    </article>
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <article class="example">
      <h2>#3 - We will display another component</h2>
      <SpotifySearch :queryType="'track'" :apiKey="apiKey" class="search">
        <template #inputHeader>
          <h3>Search for a tracks</h3>
        </template>
        <template #results="{isLoading, results}">
          <p v-show="isLoading">Loading...</p>
          <div v-if="results" class="resultsWrapper">
            <div class="tracksWrapper">
              <SpotifyTrack
                v-for="track in results.tracks.items"
                :track="track"
                :key="track.id"
              />
            </div>
          </div>
        </template>
        <template #tokenExpired="{isTokenExpired}">
          <TokenExpired v-if="isTokenExpired" />
        </template>
      </SpotifySearch>
    </article>
  </section>
</template>

<script>
import SpotifySearch from "@/components/AdvancedExample/SpotifySearch/SpotifySearch.vue";
import SpotifyArtist from "@/components/AdvancedExample/SpotifyArtist/SpotifyArtist.vue";
import SpotifyTrack from "@/components/AdvancedExample/SpotifyTrack/SpotifyTrack.vue";
import TokenExpired from "@/components/AdvancedExample/TokenExpired.vue";
export default {
  data() {
    return {
      spotifySearchType: "",
      componentSyntax: `
  <div>
    <slot name="inputHeader"></slot>
    <input type="text" v-model="query">
    <slot name="results" :isLoading="isLoading" :results="results"></slot>
    <slot name="tokenExpired" :isTokenExpired="isTokenExpired"></slot>
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
      thirdExample: `
      <SpotifySearch :queryType="'track'" :apiKey="apiKey" class="search">
        <template #inputHeader>
          <h3>Search for a tracks</h3>
        </template>
        <template #results="{isLoading, results}">
          <p v-show="isLoading">Loading...</p>
          <div v-if="results" class="resultsWrapper">
            <div class="tracksWrapper">
              <SpotifyTrack v-for="track in results.tracks.items" :track="track" :key="track.id"/>
            </div>
          </div>
        </template>
        <template #tokenExpired="{isTokenExpired}">
          <TokenExpired v-if="isTokenExpired"/>
        </template>
      </SpotifySearch>`,
      apiKey:
        "BQAK025ZvnEElZdn52lB4HoyD0oNCtVJ_-NY4mPBtsGp_ubYQjLIHNaejhz81gfj_ftKP51NxGDL2mjypynwXdUXHibGp5zMfjvUynJK-Hx3UbPweu6xqajRzF7NY5xnO-r3Zp8NIxs8Zg"
    };
  },
  components: {
    SpotifySearch,
    SpotifyArtist,
    SpotifyTrack,
    TokenExpired
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
  /* box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2); */
  border: 1px solid rgb(194, 192, 192);
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

.tracksWrapper {
  display: grid;
  padding: 20px 0;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
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
  margin: 70px 0;
  padding: 30px;
  background: #f7f7f7;
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
}
</style>
