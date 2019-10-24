<template>
    <span class="login">
        <h1>This is login page</h1> <!-- 추후 다른 스타일로 변경 -->

        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="120px" class="loginForm" @keyup.enter.native="submitForm('loginForm')">
            <el-form-item label="E-mail" prop="email">
                <el-input v-model="loginForm.email" ></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="loginForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="trySignup">Sign Up</el-button>
                <el-button type="primary" @click="submitForm('loginForm')">Login</el-button>
                <!-- <el-link type="primary">Forgot password?</el-link> -->
            </el-form-item>
        </el-form>

    </span>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginForm : {
                    email : "",
                    password : ""
                },
                rules : {
                    email : [
                        {required : true, message : 'Please input the e-mail', trigger :'blur'},
                        {type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change']}
                    ],
                    password : [
                        {required : true, message : "Please input the password", trigger : 'blur'},
                        {min : 6, message : 'Length should be at least 6', trigger : 'change'}
                    ]
                }
            }
        },
        methods: {
            trySignup() {
                //Transition to Signup
                this.$router.push("/signup");
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$message({
                            message: "Login Success!", // + JSON.stringify(this.user), FOR DEBUG
                            type: 'success'
                        });
                        this.$router.push("/home"); // to Home
                    } else {
                        //console.log('error submit!!');  // FOR DEBUG
                        this.$message.error("Some information you provided is invalid. Please Try Again.");
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>