<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="login-container">
    <h1 class="logo"><img src="../assets/imgs/logo.png" alt="" /></h1>
    <div>
      <h2 class="login-title">Login</h2>
      <form action="">
        <div class="login-form">
          <div class="input-bar">
            <div class="boder-icon">
              <i class="fa fa-lock icon" aria-hidden="true"></i>
            </div>
            <input class="" type="text" placeholder="Enter your ID" /><br />
          </div>
          <div class="input-bar">
            <div class="boder-icon">
              <i class="fa fa-user icon" aria-hidden="true"></i>
            </div>
            <input
              class=""
              type="text"
              placeholder="Enter your password"
            /><br />
          </div>
          <button type="submit" class="btn-login">Login</button><br />
          <div class="remenberID">
            <input type="checkbox" id="cb-rememberID" v-bind:class="{ischeck:checked}" value="" />
            <label>RememberID</label>
          </div>
        </div>
      </form>

      <hr />
    </div>
    <div class="go-join">
      <router-link class="dot" to="/signup">Join</router-link>
      <router-link class="dot" to="/singup">Find ID</router-link>
      <router-link to="/singup">Reset PW</router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const state={
      ID:"",
      password:""
    }
    const getter ={
      
    }
    const mutations ={
      
    }
    const actions ={
      
    }
  },
};
</script>


<style scoped>
@import "../assets/main.css";

.boder-icon {
  padding: 3px 15px 3px 10px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 10px;
  border-right: 1px solid var(--gray-color);
}
.login-form .icon {
  color: var(--gray-color);
  font-size: 2rem;
}
.logo {
  text-align: center;
}
.logo img {
  width: 52px;
  height: 52px;
}
.remenberID {
  margin-top: 20px;
  margin-left: 82px;
}
.remenberID label {
  font-weight: 700;
  font-size: 1.6rem;
  color: var(--gray-color);
  display: inline-block;
  line-height: 24px;
}
.remenberID input {
  width: 20px;
  height: 20px;
  border: 1px solid var(--gray-color);
  float: left;
  margin-right: 10px;
}

.btn-login {
  width: 100%;
  display: inline-block;
  height: 42px;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  border-radius: 4px;
  padding: 10px 0 12px;
  background: var(--btn-color);
  border: none;
  color: var(--white-color);
}
.btn-login:hover {
  cursor: pointer;
}
.btn-login .ischeck{
  background: var(--border-color);
}
.input-bar input {
  width: 100%;
  position: relative;
  background-color: var(--white-color);
  border: 1px solid var(--gray-color);
  padding-left: 64px;
  height: 42px;
  border-radius: 7px;
}
.input-bar {
  margin-bottom: 15px;
  position: relative;
}
.input-bar input:hover {
  border-color: var(--border-color);
}

.login-title {
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.07em;
  margin-top: 20px;
  margin-bottom: 20px;
}
.login-form {
  width: 300px;
  margin: 0 auto;
}
.login-container {
  width: 1000px;
  height: 620px;
  box-shadow: 0 0 20px rgb(0 0 0 / 20%);
  border-radius: 7px;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  padding-top: 105px;
  transform: translate(-50%, -50%);
  background-color: var(--background-gray);
}
hr {
  margin: 20px auto;
  width: 300px;
}
.go-join {
  text-align: center;
  margin-bottom: auto;
}
.go-join a {
  margin: 20px 15px;
  color: var(--gray-color);
  font-size: 1.6rem;
}
.go-join .dot::before {
  display: block;
  content: "";
  width: 4px;
  height: 4px;
  background: var(--gray-color);
  border-radius: 50%;
  position: absolute;
  right: -18px;
  top: 5px;
}
.go-join a:hover {
  background: none;
  color: var(--border-color);
}
</style>