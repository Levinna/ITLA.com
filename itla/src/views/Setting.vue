<!--
세팅
사용 데이터:  User Attribute
1. 로그인 상태일 떄
    비밀번호 변경 기능, 카테고리 설정 기능


-->


<template>
    <!--로그인 했을 때-->
    <div v-if="userID">
        <!--카테고리 선택 항목-->

        <div id = "category_wrap">
            <h1 id = "setting_head">카테고리 편집</h1>
            <input type="text" v-model="search_target">
            <div id = "list"></div>
        </div>

        <!--비밀번호 변경 항목-->
        <div id = "change_password">
            <h1 id = "password_head">비밀번호 변경</h1>
            <div>

            </div>
        </div>
    </div>


    <!--로그인 하지 않았을 떄-->
    <div v-else>
        로그인 해 주세요
    </div>
</template>

<script>
    export default {
        name: "Setting",
        data(){
            return{
                userID : 3,
                search_target :""
            }

        }
    }
</script>

<style scoped>

</style>