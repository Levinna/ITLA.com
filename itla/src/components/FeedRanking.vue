<template>

    <div class="feed">
        <div class="feedLeft">
            <el-row>
                <section>
                    <div>
                        Expand/Collapse Accordion
                    </div>
                </section>
                <el-col>

                </el-col>
                <el-collapse v-model="activeNames" accordion>
                    <div v-for="t in todos">
                        <el-collapse-item v-bind:title="t.displayName" :name="t.id">
                            <el-row>
                                <div>
                                    <div>{{t.displayName}} editor</div>
                                    <input type="text" />
                                </div>
                                This will contain some other fields for this item
                            </el-row>
                        </el-collapse-item>
                    </div>
                </el-collapse>
            </el-row>
        </div>
        <div class="feedRight">

        </div>
    </div>

</template>

<script>
    export default {
        name: "FeedRanking",
        data() {
            return {
                todos: [
                    { id: 'first',  displayName: 'First' },
                    { id: 'second', displayName: 'Second' },
                    { id: 'third',  displayName: 'Third'}
                ],
                activeNames: [' ']
            }
        },
        methods: {

        },
    }
</script>

<style scoped>
    .feed {
        display:flex;
    }
    .feedLeft {
        float:left;
        width:50%;
    }
</style>