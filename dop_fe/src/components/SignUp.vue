<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="signup-container">
    <div class="signup__step">
      <h1 class="logo">
        <img src="../assets/imgs/logo.png" alt="" />
      </h1>
      <h2 class="title">SIGN-UP</h2>
      <ol>
        <li class="step">
          <span>STEP1</span>
          <div class="step__title">Contry selection</div>
        </li>
        <li class="step">
          <span>STEP2</span>
          <div class="step__title">Agreement</div>
        </li>
        <li class="step">
          <span>STEP3</span>
          <div class="step__title">Member information</div>
        </li>
        <li class="step">
          <span>STEP4</span>
          <div class="step__title">Done</div>
        </li>
      </ol>
      <div class="nav-idinfor">
        <div class="idinfor">
          <router-link to="/home"
            ><i class="fa fa-home" aria-hidden="true"></i><br />
            HOME</router-link
          >
        </div>
        <div class="idinfor">
          <router-link to="/login"
            ><i class="fa fa-user" aria-hidden="true"></i><br />
            LOGIN</router-link
          >
        </div>
      </div>
    </div>
    <div class="signup__detail-step">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
@import "../assets/main.css";

.signup-container {
  width: 1000px;
  height: 620px;
  box-shadow: 0 0 20px rgb(0 0 0 / 20%);
  border-radius: 7px;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--background-gray);
  display: flex;
}
.signup__step {
  width: 200px;
  height: 100%;
  border-radius: 7px 0 0 7px;
  padding-top: 50px;
  position: relative;
  background: var(--white-color);
}
.signup__step::after {
  content: "";
  width: 0px;
  height: 0px;
  border-left: 24px solid #fff;
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  position: absolute;
  top: 50%;
  right: -24px;
  margin-top: -18px;
  z-index: 1;
}
.signup__step .logo {
  width: 52px;
  height: 52px;
  margin: 0 auto;
}
.signup__step .logo img {
  height: 100%;
  width: 100%;
}
.signup__step .title {
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.07em;
  margin-top: 20px;
  margin-bottom: 20px;
}
.signup__step ol {
  margin-top: 60px;
  margin-left: 20px;
  margin-bottom: 80px;
  position: relative;
}
.signup__step .step {
  height: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #a5a4a6;
  text-align: left;
  margin-bottom: 25px;
  position: relative;
  z-index: 1;
}
.step span {
  width: 100%;
  font-size: 1.2rem;
  color: var(--gray-color);
  line-height: 1.5;
}
.step .step__title {
  font-size: 1.2rem;
  color: var(--gray-color);
  line-height: 1.5;
}
.signup__step ol::after {
  display: block;
  content: "";
  width: 2px;
  height: 160px;
  background: #ccc;
  position: absolute;
  left: 20px;
  top: 20px;
}
.signup__step ol li::after {
  display: block;
  content: "";
  width: 9px;
  height: 9px;
  background: var(--gray-color);
  border: 2px solid var(--gray-color);
  border-radius: 50%;
  position: absolute;
  left: -23px;
  top: 11px;
}
.nav-idinfor {
  margin-top: 90px;
  width: 180px;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  position: relative;
}
.nav-idinfor a {
  font-size: 1.2rem;
  color: var(--gray-pale);
  line-height: 1.3;
}
.nav-idinfor a:hover {
  background: none;
  color: var(--gray-color);
}
.nav-idinfor i {
  width: 26px;
  height: 25px;
  font-size: 26px;
  color: var(--gray-pale);
}
.nav-idinfor i:hover {
  color: var(--gray-color);
}
.signup__detail-step {
  width: calc(100% - 200px);
  height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  justify-content: space-between;
}
</style>
