<template>
    <div style="display: flex; margin: auto; height: 35em ">
        <div id = "feeds" style="float: left; width:35%; height: 100%">
            <div>
                <el-input v-model="search"
                        size="nomal"
                        placeholder="Type to search"
                        style="height: 6%"
                        prefix-icon="el-icon-search"/>
                </div>
            <el-table
                    @cell-click = "sendUrl"
                    empty-text="결과가 없습니다."
                    :data="this.$data.propsdata.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%;"
                    height="88%">

                <el-table-column
                        width="120%"
                        label="category"
                        prop="category">
                </el-table-column>
                <el-table-column
                        width="280%"
                        label="Title"
                        prop="title">
                </el-table-column>
                <el-table-column

                        sortable
                        width="120%"
                        label="Date"
                        prop="date">
                </el-table-column>
                <el-table-column
                        width="100%"
                        align="right">
                    <template slot-scope="scope">
                        <el-button
                                icon = "el-icon-delete-solid"
                                size="mini"
                                type="danger"
                                style="height: 6%"
                                @click.stop="handleDelete(scope.$index, scope.row)"></el-button>
                    </template>
                </el-table-column>

            </el-table>
            <div id ="add_button" style="position: relative">
                <el-button
                    size="mini"
                    type="primary"
                    @click.stop = "dialogFormVisible = true"
                    style="width: 100%; position: absolute;bottom: -2.5em; left: 0"><span style="font-size: 130%">Add</span></el-button>
                <el-dialog title="피드 추가" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="Date" :label-width="formLabelWidth">

                            <el-date-picker
                                    v-model="form.date"
                                    placeholder="날짜"
                                    value-format = "yyyy-MM-dd"
                                    style="width:100%">
                            </el-date-picker>

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

        <div id = "reader" v-if="reader_web_info" style="width: 100%;" >
            <feed-reader v-bind:props="reader_web_info" style="width: 98%; height: 100%; margin: auto; overflow: hidden" ></feed-reader>
        </div>
    </div>
</template>

<script>
    import FeedReader from "./Feedreader";
    import axios from 'axios'; // import axios for Communication with json
    import {baseURL_feeds} from "../main";

    export default {

        name: "FeedRanking",
        data() {
            return {
                propsdata:""
                ,
                formLabelWidth: '120px',
                dialogFormVisible: false,
                reader_web_info :"",
                form: {
                    date: '',
                    title: '',
                    url: '',
                    rate:null,
                },
                search: '',
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
                console.log(row)
            },
            Create(){
                this.$data.dialogFormVisible = false;
                this.$data.propsdata.push(this.$data.form);
                this.$data.form = {date: '',title: '', url: '',rate:'',};

            },

        },
        computed:{
            create() {
                this.$data.propsdata = axios.get(baseURL_user);
            }
        }

    }

</script>

<style scoped>
</style>