<template>
    <div id="app">
        <div class="header">
            <h1 class="sitename">
                <i class="el-icon-info"></i>
                ITLA.com
            </h1>
        </div>
        <div id="nav">
          <el-menu
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b">
            <el-menu-item index="1"> Home </el-menu-item>
            <el-menu-item index="2"> Login </el-menu-item>
            <el-menu-item index="3"> <a href="https://www.ele.me" target="_blank" style="text-decoration:none"> Ref </a></el-menu-item>
          </el-menu>
        </div>
        <router-view></router-view>
        <div class="footer">
            <div class="About">
                <span><router-link to="/about" style="text-decoration:none">About</router-link></span>
                <div class="version">Version 0.1</div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "App",
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath); // Debug
        switch (key) {
          case '1': {
            this.$router.push("/home");
            break;
          }
          case '2': {
            this.$router.push("/login");
            break;
          }
          // default : {
          //   this.$router.push("/");
          // }
        }
      }
    }
  }
</script>

<style>
    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif; /* element ui style font */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 1%;
    }

    body {
        margin: 0;
        padding: 0;
        background: #3b4e61; /* #102a43 */
        background-size: contain;
    }

    .header, .footer {
      padding: 20px;
      color: #f0f4f8;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1,
    h2,
    h3 {
        color: #f0f4f8;
        padding: 0;
        margin: 0;
    }

    .sitename {
      letter-spacing: 3px;
      padding-top: 15px;
      padding-bottom: 15px;
    }

    .About {
        display: flex;
    }

    .About span {
      padding: 0 10px;
      font-size: 18px;
      border-right: 1px solid #9fb3c8;
    }

    .About span:last-child {
      border-right: none;
    }

    .About span a {
      color: #f0f4f8;
    }

    .version {
        padding: 0 10px;
        color: #f0f4f8;
        font-size: 13px;
        margin-top: 5px;
    }

</style>
