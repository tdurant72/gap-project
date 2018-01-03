<template>
  <!-- Third Parallax Section -->
<div class="jumbotron paral paralsec6" id="contact">
<div class="container" >
        
        <div class="row">
            <div class="col-lg-offset-1 col-lg-10" id="contactCard">
              <div class="row">
                <div class="col-lg-6">
                <p class="contactText">To learn more about the services and facilities available at the N.C. Global TransPark, please fill out the form, or contact us directly. Your information will be kept confidential and will not be shared with any outside parties.</p>
                <p class="contactText">
                  3800 Hwy. 58 North<br>
                  Kinston, N.C. 28501<br>
                  Phone: 252/523-1351<br>
                  Fax: 252/522-1765
                </p>
                <p class="contactText">
                  For directions to the N.C. Global TransPark Authority, <a href="http://www.ncgtp.com/contact/directions.html">click here</a>
                </p>
                <p class="contactText">
                  <a class="contactLink" href="#">
                    <img src="../assets/img/logo.jpg" height="41" alt="">
                  </a>
                </p>
              </div>
                <div class="card col-lg-5 col-lg-offset-1" id="formCard" data-aos="slide-left" data-aos-duration="800" data-aos-delay="200">
                      <div id="formContainer" >
                          <div class="primary media-wrap">
                              <div class="col-lg-12">
                                  <label for="name">Name</label>
                              </div>
                              <div class="col-lg-12 last">
                                  <input type="text" name="name" id="name" class="validateBlank formFields"/>
                                  <!-- <em class="ms-metadata required-warning">Required</em> -->
                              </div>
                          </div>
                          <div class="primary media-wrap">
                              <div class="col-lg-12">
                                  <label for="organization">Organization</label>
                              </div>
                              <div class="col-lg-12">
                                  <input type="text" name="organization" id="organization" class="validateBlank formFields"/>
                                  <!-- <em class="ms-metadata required-warning">Required</em> -->
                              </div>
                          </div>
                          <div class="primary media-wrap">
                              <div class="col-lg-12">
                                  <label for="email">Email</label>
                              </div>
                              <div class="col-lg-12">
                                  <input type="text" name="email" id="email" class="validateBlank formFields"/>
                                  <!-- <em class="ms-metadata required-warning">Required</em> -->
                              </div>
                          </div>
                          <div class="primary media-wrap">
                              <div class="col-lg-12">
                                  <label for="phone">Phone</label>
                              </div>
                              <div class="col-lg-12">
                                  <input type="text" name="phone" id="phone" class="validateBlank formFields"/>
                                  <!-- <em class="ms-metadata required-warning">Required</em> -->
                              </div>
                          </div>
                            
                              <div class="col-lg-12 chbxTop ">
                                  <label>I am interested in learning more about:</label>
                              </div>
                              <div class="col-lg-6">
                                  <input type="checkbox" name="industrial" class="contact-learn-checkbox"/>
                                  <label for="industrial" class="contact-learn-label">Industrial Real Estate</label>
                                  <br>            
                                  <input type="checkbox" name="composite" class="contact-learn-checkbox"/>
                                  <label for="composite" class="contact-learn-label">Composite Center</label>
                                  <br>
                              </div>
                              <div class="col-lg-6 chbxBottom">
                                  <input type="checkbox" name="airport" class="contact-learn-checkbox"/>
                                  <label for="airport" class="contact-learn-label">Airport</label>
                                  <br>
                                  <input type="checkbox" name="general" class="contact-learn-checkbox"/>
                                  <label for="general" class="contact-learn-label">General Information</label>
                              </div>
                          
                          <div class="primary media-wrap">
                              <div class="col-lg-12">
                                  <label for="comments">Comments/Questions</label>
                              </div>
                              <div class="col-lg-12 ">
                                  <textarea name="comments" id="Comments" class="formFields" ></textarea>
                              </div>
                          </div>
                          <div id="validationLoading">
                          <!-- <div id="validateFields">
                              <div class="panel validationIcons">
                                  <img id='fieldsValidating' src='/_layouts/images/gears_anv4.gif' class="loadingIcon"/>
                                  <img id='fieldsValid' src='/_layouts/images/check.gif' class="checkMarkIcon"/>
                                  <img id='fieldsInvalid' src='/_layouts/images/WPPINVAL.gif' class="invalidIcon"/>
                              </div>
                              <span id="validFieldsText" class="validation">Validating Fields</span>
                          </div>  -->
                          <!-- <div id="submitForm">
                              <div class="panel validationIcons">
                                  <img id='submittingSpinner' src='/_layouts/images/gears_anv4.gif' class="loadingIcon"/>
                                  <img id='submitSuccess' src='/_layouts/images/check.gif' class="checkMarkIcon"/>
                                  <img id='submitFail' src='/_layouts/images/WPPINVAL.gif' class="invalidIcon"/>
                              </div> 
                              <span id="submitFormText" class="validation">Submitting Form</span>    
                          </div> -->
                      </div>
                      <div class="col-lg-12">
                      <input type="button" id="submitFormButton" value="Submit" class="important btn btn-cta btn-lg btn-md ">
                        </div>
                      </div><!--/formContainer-->
                </div>
              </div>
          </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.paralsec6 {
/* background-image: url("../assets/img/contact-bkgd.jpg"); */
background-color: #f6f6f6;
}
#contactCard{
  margin-top: 50px;
}
p.contactText{
font-family: Lato-Light;
font-size: 16px;
color: #212121;
letter-spacing: 0;
line-height: 125%;
margin-top: 20px;

padding-right: 2.5em;
padding-left: 2.5em;
text-align: left;
}
.contactLink{
  height: 50px;
  padding-right: 2.5em;
  margin-bottom: 20px;
}
a > img{
    mix-blend-mode: darken;
}
h2{
opacity: 0.65;
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 1px black;
font-family: Avenir-Black;
font-size: 5em;
color: #FFFFFF;
text-align: center;
}
.chbxTop{
  padding-top: 15px;
}
.chbxBottom{
  padding-bottom: 15px;
}
 label{
font-family: Lato-Regular;
font-size: 14px;
color: #757575;
font-weight:normal;
}
.formFields{
  width: 100%;
}
#formCard{
  padding-top: 40px;
  padding-bottom: 40px;
  top:-20px;
}
#submitFormButton{
  float: right;
}
.contactArea{
  margin-top: 50px;
}
.btn-cta{
  color: #ffffff;
  margin-top: 15px;
  height: 45px;
}
.btn-cta:hover{
  color: #eeeeee;
}
</style>