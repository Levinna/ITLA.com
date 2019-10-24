<template>
    <div style="display: flex; margin: auto; height: 41em ">
        <div id = "feeds" style="float: left; width:35%; height: 100%">
            <el-table
                    @cell-click = "sendUrl"
                    empty-text="결과가 없습니다."
                    :data="this.$data.propsdata.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%;"
                    height="100%">
                <el-table-column
                        width="120%"
                        label="Date"
                        prop="date">
                </el-table-column>
                <el-table-column
                        width="280%"
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
            <div id ="add_button" style="position: relative">
                <el-button
                    size="small"
                    type="primary"
                    @click.stop = "dialogFormVisible = true"
                    style="width: 100%; position: absolute;bottom: -3em; left: 0"><span style="font-size: 130%">Add</span></el-button>
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

        <div id = "reader" v-if="reader_web_info" style="width: 100%;" >
            <feed-reader v-bind:props="reader_web_info" style="width: 98%; height: 100%; margin: auto; overflow: hidden" ></feed-reader>
        </div>
    </div>
</template>

<script>
    import FeedReader from "./Feedreader";


    export default {

        name: "FeedRanking",
        data() {
            return {
                propsdata:[{
                    date: '2019-11-24',
                    title: '기계가 사람을 뽑는 AI채용시대',
                    address: 'No. 189, Grove St, Los Angeles',
                    url:"https://brunch.co.kr/@yooncohg/141",
                    rate:0,
                },{
                    date: '2019-11-24',
                    title: '롤드컵이 독서에 미치는 영향',
                    address: 'No. 189, Grove St, Los Angeles',
                    url:"https://brunch.co.kr/@ssmile777/64",
                    rate:0,
                },{
                        date: '2019-11-24',
                        title: '블록체인은 닷컴 버블과 다르다',
                        address: 'No. 189, Grove St, Los Angeles',
                        url:"https://brunch.co.kr/@noder/14",
                        rate:0,
                 },{
                    date: '2019-11-24',
                    title: '아마존의 핵심, MSA를 따라가다',
                    address: 'No. 189, Grove St, Los Angeles',
                    url:"https://brunch.co.kr/@beennote/186",
                    rate:0,
                },
                    {
                    date: '2019-11-24',
                    title: '인공지능 시대의 건축과 도시',
                    address: 'No. 189, Grove St, Los Angeles',
                    url:"https://brunch.co.kr/@kimsungah/5",
                    rate:0,
                 }, {
                    date: '2019-11-24',
                    title: '구글 픽셀 4 수령기',
                    address: 'No. 189, Grove St, Los Angeles',
                    url:"https://brunch.co.kr/@minseungsong/43",
                    rate:0,
                }, {
                    date: '2019-11-16',
                    title: '[코딩 부트캠프] 좌절이 찾아올 때',
                    address: 'No. 189, Grove St, Los Angeles',
                    url:"https://brunch.co.kr/@byuldbyul/29",
                    rate:0,
                 }, {
                    date: '2019-09-25',
                    title: 'LINE 개발자 3인의 파이콘 2019 방문기',
                    address: 'No. 189, Grove St, Los Angeles',
                    url:"https://engineering.linecorp.com/ko/blog/pycon-korea-2019/",
                    rate:0,
                }, {
                    date: '2019-09-23',
                    title: '파이콘 2019 부스&굿즈 제작기',
                    address: 'No. 189, Grove St, Los Angeles',
                    url:"https://brunch.co.kr/@sundayoff/38",
                    rate:0,
                }, {
                    date: '2019-07-24',
                    title: 'ECMA6 is changing our coding style',
                    address: 'No. 189, Grove St, Los Angeles',
                    url:"https://medium.com/@arunrajeevan/ecma6-is-changing-our-coding-style-70a42b86b567",
                    rate:0,
                }, {
                    date: '2018-1-15',
                    title: '스팀잇  후기',
                    address: 'No. 189, Grove St, Los Angeles',
                    url:"https://brunch.co.kr/@byuldbyul/29",
                    rate:0,
                  },
                ],
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