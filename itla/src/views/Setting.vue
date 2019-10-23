<!--
세팅
사용 데이터:  User Attribute
1. 로그인 상태일 떄
    비밀번호 변경 기능, 카테고리 설정 기능


-->


<template>

    <div id = "main_wrap">
        <!--로그인 했을 때-->
        <div v-if="userID" id ="login_true" style="display: flex;">
            <!--카테고리 선택 항목-->
                <div id = "category_wrap" style="float: left; width:60%; margin: 0 auto auto;">
                    <h1>카테고리 편집</h1>
                    <el-main id = "list"  style="height: 300px; width: 80%">
                        <el-table

                                :data="UserCategory.filter(data => !search_target || data.category.toLowerCase().includes(search_target.toLowerCase()))"
                                height="250"
                        >
                            <el-table-column
                                    prop="category"
                                    align="center">
                            </el-table-column>

                            <el-table-column align="right">
                                <template slot="header" slot-scope="scope">
                                    <div  style = "display: flex">
                                        <el-input
                                                auto-complete="true"
                                                v-model.lazy="search_target"
                                                size="large"
                                                placeholder="Type to search"
                                                style="float: left; width:100%"

                                        />
                                        <el-button @click = "Create" style="float: left">create</el-button>
                                    </div>
                                </template>
                                <template slot-scope="scope">
                                    <el-button
                                            size="mini"
                                            @click="Edit(scope.$index, scope.row)">Edit</el-button>
                                    <el-button
                                            type="danger"
                                            size="mini"
                                            @click="Delete(scope.$index, scope.row)">delete</el-button>



                                </template>
                            </el-table-column>
                        </el-table>
                    </el-main>
                </div>
                <div class="clear"></div>

                <!--비밀번호 변경 항목-->
                <div id = "change_password" style="width: 30%; margin: 0 auto auto;">
                <h1 id = "password_head">비밀번호 변경</h1>
                <div style="display: flex; padding: auto">
                    <div style="margin-right: 1%;">
                        <el-input type="password" v-model="new_password" placeholder="비밀번호는 6자리 이상입니다" show-password style="margin-bottom: 1%"></el-input>

                        <el-input type="password" v-model="confirm" placeholder = "비밀번호 확인" show-password></el-input>
                    </div>
                    <el-button id = "submit" type = "primary"  @click="confirmingPassword(new_password,confirm)" style="width: 20%">확인</el-button>
                </div>
            </div>
        </div>


        <!--로그인 하지 않았을 떄-->
        <div v-else id = "login_false">
            <img src="https://www.freeiconspng.com/uploads/error-icon-4.png" width = "300" height="300">
            <p>로그인 해 주십시오</p>
        </div>
    </div>

</template>

<script>
    function changePassword(new_password) {
        console.log(new_password,"로 변경됨")
    }

    export default {
        name: "Setting",
        data() {
            return {
                process_state:"primary",
                userID: 1,
                search_target: "",
                confirm : "",
                new_password: "",
                visible: false,
                UserCategory: [
                    {
                        "category": "shopping",

                    },
                    {
                        "category": "reading",

                    },
                    {
                        "category": "cleaning",

                    },
                    {
                        "category": "exercise",

                    },
                    {
                        "category": "news",

                    },
                    {
                        "category": "review"
                    },{
                        "category": "buy"
                     }
                ]
            }
        },
        methods: {
            Edit(index, row) {
                row.category = prompt("변경할 카테고리를 입력하세요");
            },
            Delete(index, row) {
                this.$data.UserCategory.splice(index,1);
                console.log(this.$data.UserCategory)
            },
            Create(){
                this.$data.UserCategory.push({category:prompt("데이터를 입력하세요")});
                console.log(this.$data.UserCategory)
            },
            confirmingPassword(new_password,confirm){
                if(new_password == confirm) {
                    changePassword(new_password);
                }
                else
                    alert("비밀번호 확인이 다릅니다.");
            },
        },

    }
</script>

<style scoped>
tr{
    display: flex;
}
/*    html, body, div{
        height:100%;
        width: 100%;

    }



    #login_false{
        text-align: center;
        height: 50%;
        width: 50%;
        background: white;
        color:black;
        margin: auto;
        border: 1px solid black ;
    }
    #category_wrap,#change_password{
    }
    #list{
        background: wheat;
        min-height: 300px;
    }*/
#login_true{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    height: 80%; width: 100%;
}
    .clear{
        clear: both;
    }
</style>