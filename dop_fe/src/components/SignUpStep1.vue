<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="signup__container--step1">
    <h2 class="step1__title">
      <span>STEP 1</span>
      COUNTRY SELECTION
    </h2>
    <div class="step1__frm-selection-country">
      <div class="frm__select-box">
        <select name="userCountry" id="userCountry">
          <option value="">Country Selction</option>
          <option value="KOR">South Korea</option>
          <option value="VNM">Viet Nam</option>
          <option value="USA">United State</option>
        </select>
        <i class="fa fa-caret-down" aria-hidden="true"></i>
      </div>

      <p class="frm__txt">
        In the case of a country that is not in the country selection list, it
        is not possible to work in a country where the task is not currently in
        progress in MY CROWD.
        <br />
        If you sign up by selecting 'Other Country', you can change it when a
        country is added later.
      </p>
      <div class="frm__txt-box">
        <p>
          ※ Mycrowd is not a general service portal, but a work platform that
          supports telecommuting. If you use illegal programs or maliciously
          damage your business, you may be subject to civil and criminal
          actions.
        </p>
        <p>
          ※ Accumulated points are automatically deposited into the account on
          the set settlement date, and payment cannot be delayed for personal
          reasons.
        </p>
      </div>
      <div class="frm__agree-bottom">
        <div class="btn-area">
          <button type="button" id="btn-agree" @click="nextStep">
            I agree
          </button>
          <button type="button" id="btn-disagree">I disagree</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpStep1",
  methods: {
    nextStep() {
      this.$router.push("/signUp/step2");
    },
  },
};
</script>

<style>
.signup__container--step1 {
  margin: 30px;
}
.step1__title {
  font-weight: 700;
  font-size: 2.4rem;
  margin-top: 40px;
  margin-bottom: 30px;
  letter-spacing: 0.02em;
  text-align: center;
}
.step1__title span {
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 5px;
  color: var(--gray-color);
}
.step1__frm-selection-country {
  background: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  text-align: center;
}

.frm__select-box {
  margin-top: 25px;
  margin-bottom: 10px;
  width: 230px;
}
.frm__select-box i {
  font-size: 1.3rem;
  display: block;
  width: 10px;
  height: 10px;
  bottom: 22px;
  left: 210px;
  color: var(--gray-color);
}
.frm__select-box select {
  color: var(--gray-color);
  appearance: none;
  background: var(--btn-gray);
  line-height: 30px;
  padding-left: 7px;
  padding-right: 26px;
  width: 100%;
  border: 0;
  border-radius: 3px;
}

.frm__txt {
  width: 650px;
  font-size: 1.3rem;
  line-height: 1.5;
  margin-top: 10px;
  color: var(--gray-color);
}

.frm__txt-box {
  width: 650px;
  padding: 15px 20px 5px;
  border: 1px solid var(--gray-pale);
  margin-top: 20px;
}
.frm__txt-box p {
  color: var(--gray-color);
  font-size: 1.3rem;
  line-height: 1.5;
  text-align: left;
  padding-left: 18px;
  text-indent: -17px;
  padding-bottom: 10px;
  word-break: keep-all;
}

.frm__agree-bottom button {
  height: 26px;
  margin: 20px 5px;
  padding: 0 10px;
  border-radius: 5px;
  background: var(--btn-gray);
  color: var(--gray-color);
  border: 0;
}
.frm__agree-bottom button:hover {
  background: var(--border-color);
  color: var(--white-color);
}
</style>
