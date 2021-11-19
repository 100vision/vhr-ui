<template>
    <div>
      <el-form ref="form" :model="form" class="login-form">
        <h3 class="login-caption">Welcome</h3>
        <el-form-item label="账号">
          <el-input type="text"  v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password"  v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Sign In</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          return{
            form:{
              name:'',
              password:''
            }

          }
        },
        methods:{
          onSubmit(){
            this.$router.push("/");
          }
      }
    }
</script>

<style scoped>
  .login-form {
    width: 350px;
    margin:150px auto;
    border:1px solid #DCDFE6;
    padding:20px;
    border-radius: 5px;
    box-shadow: 0 0 10px;
  }

  .login-caption {
    text-align: center;
  }

</style>
