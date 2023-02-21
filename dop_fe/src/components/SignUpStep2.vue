<template>
  <div class="signup__container-step2">
    <h2 class="step2__title">
      <span>STEP 2</span>
      AGREEMENT
    </h2>
    <div class="frm-agree">
      <div class="frm__term-service">
        <div class="agree__title">Terms of Service</div>
        <div class="agree__content">
          Terms
          <br />
          These Terms of Service are a contract between you and INFINIQ Co,.Ltd.
          INFINIQ operates (mycrowd.ai) (“MY CROWD Site”). By accessing this web
          site, you are agreeing to be bound by these Terms and Conditions of
          Use, all applicable laws and regulations, and agree that you are
          responsible for
          <br /><br />
          Use License
          <br />

          INFINIQ hereby grants you a non-exclusive, non-transferable, worldwide
          right to access and use MY CROWD, solely with supported browsers
          through the Internet for your own internal purposes, subject to the
          Terms of Service. You may not permit INFINIQ to be used by or for the
          benefit of unauthorized third parties. Nothing in the Terms of Service
          shall be construed
        </div>
        <div class="agree__check">
          <input type="checkbox" id="" />
          <span>I agree</span>
        </div>
      </div>
      <div class="frm__privaci-policy">
        <div class="agree__title">Privacy Policy</div>
        <div class="agree__content">
          Terms
          <br />
          These Terms of Service are a contract between you and INFINIQ Co,.Ltd.
          INFINIQ operates (mycrowd.ai) (“MY CROWD Site”). By accessing this web
          site, you are agreeing to be bound by these Terms and Conditions of
          Use, all applicable laws and regulations, and agree that you are
          responsible for
          <br /><br />
          Use License
          <br />

          INFINIQ hereby grants you a non-exclusive, non-transferable, worldwide
          right to access and use MY CROWD, solely with supported browsers
          through the Internet for your own internal purposes, subject to the
          Terms of Service. You may not permit INFINIQ to be used by or for the
          benefit of unauthorized third parties. Nothing in the Terms of Service
          shall be construed
        </div>
        <div class="agree__check">
          <input type="checkbox" id="" />
          <span>I agree</span>
        </div>
      </div>
    </div>
    <div class="btn-area">
      <div class="btn-previous">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
        <button type="button">Previous step</button>
      </div>
      <div class="btn-next">
        <i class="fa fa-arrow-right" aria-hidden="true"></i>
        <button type="button">Next step</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.signup__container-step2 {
  margin: 30px;
}
.step2__title {
  font-weight: 700;
  font-size: 2.4rem;
  margin-top: 40px;
  margin-bottom: 30px;
  letter-spacing: 0.02em;
  text-align: center;
}
.step2__title span {
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 5px;
  color: var(--gray-color);
}
.frm-agree {
  background: var(--white-color);
  padding: 10px;
}
.frm__term-service,
.frm__term-service {
  display: block;
}
.agree__title {
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 0.02rem;
}
.agree__content {
  height: 137px;
  font-size: 11px;
  line-height: 1.5;
  border: 1px solid var(--gray-color);
  overflow-y: auto;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.agree__check{
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 10px;
}
</style>
