<template>
  <div class="column">
    <div class="menu">
      <user-menu></user-menu>
    </div>
    <div class="feedranking">
      <feed-ranking></feed-ranking>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '../components/HelloWorld'
import UserMenu from "../components/UserMenu";
import FeedRanking from '../components/FeedRanking'

export default {
  name: 'home',
  components: {
    UserMenu,
    FeedRanking
  }
}
</script>

<style scoped>

</style>