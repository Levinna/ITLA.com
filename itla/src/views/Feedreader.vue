<template>
    <div id = "reader_wrapper">
        <div>
            <div id = "title" style="font-size:40px; text-align: center; display: inline">

                {{props.title}}

            </div>
            <div class="block" style="display: inline">
                <el-rate v-model="props.rate"></el-rate>
            </div>
        </div>

        <div style="clear: both"></div>
        <iframe v-bind:src="props.url" style="display:block; width:80%; height: 70vh"></iframe>
    </div>
</template>

<script>
    export default {
        name: "Feedreader",
        props: ['props'],
        data() {
            return {

            }
        },
    }
</script>

<style scoped>
    #title{

    }

</style>