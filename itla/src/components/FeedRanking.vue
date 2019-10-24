<template>
    <div style="display: flex; margin: auto">
        <div id="feeds" style="float: left; width:35% ;">
            <el-table @cell-click="sendUrl"
                      empty-text="결과가 없습니다."
                      :data="this.$data.propsdata.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
                      style="width: 100%;"
                      height="70vh">
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
                                @click.stop="handleDelete(scope.$index, scope.row)">Delete
                        </el-button>
                    </template>
                </el-table-column>

            </el-table>
            <div id="add_button">
                <el-button
                        size="nomal"
                        type="primary"
                        @click.stop="dialogFormVisible = true"
                        style="width: 100%">Add
                </el-button>
                <el-dialog title="피드 추가" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="Date" :label-width="formLabelWidth">
                            <el-input type="date" v-model="form.date" autocomplete="off"></el-input>
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

        <div id="reader" v-if="reader_web_info" style="width: 100%; height: 100%">
            <feed-reader v-bind:props="reader_web_info" style="width: 98%; height: 100%; margin: auto"></feed-reader>
        </div>
    </div>
</template>

<script>
    import FeedReader from "./Feedreader";


    export default {

        name: "FeedRanking",
        data() {
            return {
                propsdata: [{
                    date: '2019-10-15',
                    title: 'AMD Ryzen 5 3500X 국내 출시 : 9400F를 저격하는 가성비',
                    address: 'No. 189, Grove St, Los Angeles',
                    url: "https://lwk24.tistory.com/618",
                    rate: 0,
                }, {
                    date: '2019-10-16',
                    title: '롤스스톤 공개된 카드들',
                    address: 'No. 189, Grove St, Los Angeles',
                    url: "http://www.inven.co.kr/board/lol/2778/66260",
                    rate: 0,
                }, {
                    date: '2019-10-23',
                    title: '삼성전자, 지문인식 오류 SW 패치 실시',
                    address: 'No. 189, Grove St, Los Angeles',
                    url: "https://biz.chosun.com/site/data/html_dir/2019/10/23/2019102301677.html",
                    rate: 0,
                }, {
                    date: '2019-10-23',
                    title: '인도 평정한 샤오미',
                    address: 'No. 189, Grove St, Los Angeles',
                    url: "http://www.bloter.net/archives/358513",
                    rate: 0,
                }],
                formLabelWidth: '120px',
                dialogFormVisible: false,
                reader_web_info: "",
                form: {
                    date: '',
                    title: '',
                    url: '',
                    rate: '',
                },
                search: '',
            }
        },
        components: {
            FeedReader,
        },
        methods: {

            handleDelete(index, row) {
                this.$data.propsdata.splice(index, 1);
                this.$data.reader_web_info = null;
            },
            sendUrl(row, column, e) {
                this.$data.reader_web_info = row;
                console.log(this.$data);
            },
            Create() {
                this.$data.dialogFormVisible = false;
                this.$data.propsdata.push(this.$data.form);
                this.$data.form = {date: '', title: '', url: '', rate: '',};

            },

        },

    }

</script>

<style scoped>
    .feed {
        display: flex;
    }

    .feedLeft {
        float: left;
        width: 50%;
    }
</style>