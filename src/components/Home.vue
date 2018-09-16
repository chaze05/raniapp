<template>
  <v-container fluid class="np">
      <v-carousel hide-controls>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
      <div class="container">
        <h1 class="text-xs-center">News Letter</h1>
      </div>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      items: [
        {
          src: 'http://info.hdrelay.com/wp-content/uploads/2015/04/support-page-people.jpg'
        },
        {
          src: 'http://coolwallpapers.eu/wp-content/uploads/Abstract/ConceptualExpressivePeople/HD%20Wallpapers%20-%20Conceptual%20Expressive%20People%20(15)-730x412.jpg'
        },
        {
          src: 'https://images.wallpaperscraft.com/image/people_hands_concert_music_crowd_80452_1920x1080.jpg'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.np{
  padding: 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
