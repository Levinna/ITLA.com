<template>
    <div class="login">
        <el-card class="login-card">
            <h2>Login</h2>
            <el-form class="loginForm" :model="loginModel" :rules="loginRules" ref="form" @submit.native.prevent="login">
                <el-form-item prop="email">
                    <el-input v-model="loginModel.email" placeholder="E-mail" prefix-icon="el-icon-user" ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginModel.password" placeholder="Password" type="password" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button :loading="loading" class="login-button" type="primary" native-type="submit" block>Login</el-button> <br/>
                    <el-button class="signup-button" type="success" @click="trySignup">Sign Up</el-button>
                </el-form-item>
                <a class="forgot-password" style="text-decoration: none" href="https://localhost:8080/password-recovery">Forgot password ?</a>
            </el-form>
        </el-card>
    </div>

</template>

<script>
    import loginStates from "../../public/mockup/AccountInfo";
    export default {
        name: "Login",
        data() {
            return {
                loading : false,
                credential : false,
                loginModel : {
                    email : "",
                    password : ""
                },
                loginRules : {
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

        created: function () {
          // console.log("loginCred",loginStates);
          // console.log("IDCOUNT", loginStates.users[0].email);
          // for(let testCount in loginStates.users){
          //     console.log("TST2",testCount);
          // }
          // console.log("IDCOUNT2", loginStates.users.length);
        },

        methods: {
            simulateLogin() {
                return new Promise(resolve => {
                    setTimeout(resolve, 500);
                });
            },
            async login() {
                let valid = await this.$refs.form.validate();
                if (!valid) {
                    return;
                }

                this.loading = true;
                await this.simulateLogin();
                this.loading = false;

                for(let userCount = 0 ; userCount < loginStates.users.length; userCount++){
                    // console.log("COUNTING", loginStates.users[userCount].email);
                    if(this.loginModel.email === loginStates.users[userCount].email && this.loginModel.password === loginStates.users[userCount].password){
                        this.credential = true;
                        await this.$router.push("/home"); // to Home
                        break;
                    }
                    else{
                        this.credential = false;
                    }
                }
                if(this.credential)
                    this.$message.success("Login successfull");
                else
                    this.$message.error("Some information you provided is invalid. Please Try Again.");

                // if (this.loginModel.email === this.validCredentials.email &&
                //     this.loginModel.password === this.validCredentials.password) {
                //     this.$message.success("Login successfull");
                //     await this.$router.push("/home"); // to Home
                // } else {
                //     this.$message.error("Some information you provided is invalid. Please Try Again.");
                // }
            },
            trySignup() {
                //Transition to Signup
                this.$router.push("/signup");
            },
            // submitForm(formName) {
            //     this.$refs[formName].validate((valid) => {
            //         if (valid) {
            //             this.$message({
            //                 message: "Login Success!", // + JSON.stringify(this.user), FOR DEBUG
            //                 type: 'success'
            //             });
            //             this.$router.push("/home"); // to Home
            //         } else {
            //             //console.log('error submit!!');  // FOR DEBUG
            //             this.$message.error("Some information you provided is invalid. Please Try Again.");
            //             return false;
            //         }
            //     });
            // }
        }
    }
</script>

<style scoped>
    .login {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:3%;
    }
    .login-button, .signup-button{
        width: 100%;
        margin-top: 1%;
    }
    .login-card {
        display: flex;
        justify-content: center;
        width: 340px;
        padding-top : 1%;
        padding-bottom : 1%;
    }
    .loginForm {
        width: 300px;
    }
    .forgot-password {
        margin-top: 10px;
    }

    h2 {
        color: black;
        letter-spacing: 1px;
        padding-bottom: 20px;
    }
    .login .el-input input {
        padding-left: 35px;
    }
</style>