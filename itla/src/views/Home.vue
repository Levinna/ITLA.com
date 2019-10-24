<template>
    <div class="home">
        <main>
            <div class="feedranking">
                <feed-ranking></feed-ranking>
            </div>
        </main>
    </div>
</template>

<script>
    // @ is an alias to /src
    //import HelloWorld from '../components/HelloWorld'
    import FeedRanking from '../components/FeedRanking'

    let APP_LOG_LIFECYCLE_EVENTS = false;

    export default {
        name: 'home',
        components: {
            FeedRanking
        },

        beforeCreate: function () {
            if (APP_LOG_LIFECYCLE_EVENTS) {
                console.log("beforeCreate");
            }
        }
    }
</script>

<style scoped>
  .feedranking {
    padding : 1%;
  }
</style>