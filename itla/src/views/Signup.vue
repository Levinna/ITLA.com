<template>
    <span class="signup">

        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="signinForm" @keyup.enter.native="submitForm('ruleForm')">
            <el-form-item label="E-mail" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Confirm" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
                <el-button @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
        </el-form>

    </span>
</template>

<script>
    export default {
        name: "Signup",
        data() {
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input the password again'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('Two inputs don\'t match!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    email: '',
                    pass: '',
                    checkPass: ''
                },
                rules: {
                    email : [
                        {required : true, message : 'Please input the e-mail', trigger :'blur'},
                        {type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change']}
                    ],
                    pass: [
                        {required : true, message : "Please input the password", trigger : 'blur'},
                        {min : 6, message : 'Length should be at least 6', trigger : 'change'}
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$message({
                            message: "ID Creation Success!", // + JSON.stringify(this.user), FOR DEBUG
                            type: 'success'
                        });
                        this.$router.push("/login"); // to Login
                    } else {
                        this.$message.error("Some information you provided is invalid. Please Try Again.");
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>