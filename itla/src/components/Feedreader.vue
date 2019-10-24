<template>
    <div id = "reader_wrapper"  style = "background: wheat;">
        <div>
            <div id = "title" style="font-size:40px; text-align: center; display: inline">

                {{props.title}}
                <el-popover
                        placement="top"
                        width="200"
                        trigger="click">
                    <div class="block" style="display: inline; text-align: center">
                        <el-rate v-model="props.rate"></el-rate>
                    </div>
                    <i :class="star_class" slot="reference" @mouseover="on" @mouseleave= "off"></i>
                </el-popover>

            </div>


        </div>

        <div style="clear: both"></div>
        <iframe v-bind:src="props.url" style=" width:98%; height: 70vh; margin:auto;"></iframe>
    </div>
</template>

<script>
    export default {
        name: "Feedreader",
        props: ['props'],
        data() {
            return {
                star_class : "el-icon-star-off"
            }
        },
        methods:{
            on(){
                this.$data.star_class = "el-icon-star-on";
            },
            off(){
                this.$data.star_class = "el-icon-star-off";
            }
        }
    }
</script>

<style scoped>
    #title{

    }
</style>