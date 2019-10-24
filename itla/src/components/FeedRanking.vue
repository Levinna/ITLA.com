<template>
    <div style="display: flex">
        <div id = "feeds" style="float: left; width:30%">
            <el-table @cell-click = "sendUrl"
                    :data="this.$data.propsdata.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%">
                <el-table-column
                        label="Date"
                        prop="date">
                </el-table-column>
                <el-table-column
                        label="Title"
                        prop="title">
                </el-table-column>
                <el-table-column
                        align="right">
                    <template slot="header" slot-scope="scope">
                        <el-input
                                v-model="search"
                                size="mini"
                                placeholder="Type to search"/>
                    </template>
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="danger"
                                @click.stop="handleDelete(scope.$index, scope.row)">Delete</el-button>
                    </template>
                </el-table-column>

            </el-table>
            <div id ="add_button">
                <el-button
                    size="nomal"
                    type="primary"
                    @click.stop = "dialogFormVisible = true"
                    style="width: 100%">Add</el-button>
                <el-dialog title="피드 추가" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="Date" :label-width="formLabelWidth">
                            <el-input type = "date" v-model="form.date" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item label="Title" :label-width="formLabelWidth">
                            <el-input v-model="form.title" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item label="Url" :label-width="formLabelWidth">
                            <el-input placeholder="Please input" v-model="form.url">
                                <template slot="prepend">Http://</template>
                            </el-input>
                        </el-form-item>

                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="Create">Confirm</el-button>
                    </span>
                </el-dialog>
            </div>
        </div>
        <div style="clear: both"></div>

        <div id = "reader" v-show="reader_web_info" style="width: 100%; height: 100%" >
            <feed-reader v-bind:props="reader_web_info" style="width: 100%; height: 100%" ></feed-reader>
        </div>
    <div @click="sendUrl" style="width: 100%; height: 30px; background: teal"></div>

</div>
</template>
import FeedReader from "./Feedreader";
<script>
    import FeedReader from "../views/Feedreader";


    export default {
        name: "FeedRanking",
        data() {
            return {
                props:{propsdata:Array},
                formLabelWidth: '120px',
                dialogFormVisible: false,
                reader_web_info :"",
                form: {
                    date: '',
                    title: '',
                    url: '',
                    rate:'',
                },
                search: '',
                arr : ["1","2","3"],
            }
        },
        components:{
          FeedReader,
        },
        methods: {

            handleDelete(index, row) {
                this.$data.propsdata.splice(index,1);
                this.$data.reader_web_info = null;
            },
            sendUrl(row,column,e){
                this.$data.reader_web_info = row;
                console.log(this.$data);
            },
            Create(){
                this.$data.dialogFormVisible = false;
                this.$data.propsdata.push(this.$data.form);
                this.$data.form = {date: '',title: '', url: '',rate:'',};

            },

        },

    }

</script>

<style scoped>

</style>