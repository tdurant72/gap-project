<template>
  <!-- Third Parallax Section -->
<div class="jumbotron paral paralsec6" id="contact">
<div id="tpbkgd"></div>
<div class="none" >

        <div class="row justify-content-center">
            <div class="col-lg-12" id="contactCard">
              <div class="row justify-content-center">
                <div class="col-lg-6">
                    <p class="contactText">
                        <a class="contactLink" href="#">
                            <img src="../assets/img/Global_Transpark_Logo_Color.png" height="41" alt="NCGTP logo">
                        </a>
                    </p>
                <p class="contactText">To learn more about the services and facilities available at the N.C. Global TransPark, please fill out the form, or contact us directly. Your information will be kept confidential and will not be shared with any outside parties.</p>
                <p class="contactText">
                  3800 Hwy. 58 North<br>
                  Kinston, N.C. 28501<br>
                </p>
                <p class="contactText">
                  Phone: (252) 523-1351<br>
                  Fax: (252) 522-1765
                </p>

                 <a id="directionsBtn" class="btn btn-secondary btn-lg btn-md btn-hero" href="http://www.ncgtp.com/contact/directions.html" role="button">Get Directions</a>
              </div>
                <div class="card col-lg-4 col-md-5" id="formCard" >
                      <div id="formContainer" >
                          <div class="primary media-wrap">
                              <div class="col-lg-12">
                                  <label for="first-name">First Name *</label>
                              </div>
                              <div class="col-lg-12 last">
                                  <input type="text" name="first-name" id="first-name" class="validateBlank formFields" >
                                  <em class="ms-metadata required-warning">Required</em>
                              </div>
                          </div>
                          <div class="primary media-wrap">
                              <div class="col-lg-12">
                                  <label for="last-name">Last Name *</label>
                              </div>
                              <div class="col-lg-12 last">
                                  <input type="text" name="last-name" id="last-name" class="validateBlank formFields">
                                  <em class="ms-metadata required-warning">Required</em>
                              </div>
                          </div>
                          <div class="primary media-wrap">
                              <div class="col-lg-12">
                                  <label for="organization">Organization</label>
                              </div>
                              <div class="col-lg-12">
                                  <input type="text" name="organization" id="organization" class="formFields"/>
                                  <!--<em class="ms-metadata required-warning">Required</em> -->
                              </div>
                          </div>
                          <div class="primary media-wrap">
                              <div class="col-lg-12">
                                  <label for="email">Email *</label>
                              </div>
                              <div class="col-lg-12">
                                  <input type="text" name="email" id="email" class="validateBlank formFields" required/>
                                  <em class="ms-metadata required-warning">Required</em>
                              </div>
                          </div>
                          <div class="primary media-wrap">
                              <div class="col-lg-12">
                                  <label for="phone">Phone</label>
                              </div>
                              <div class="col-lg-12">
                                  <input type="text" name="phone" id="phone" class="formFields" />
                                  <!--<em class="ms-metadata required-warning">Required</em>-->
                              </div>
                          </div>

                              <div class="col-lg-12 chbxTop ">
                                  <label>I am interested in learning more about:</label>
                              </div>
                              <div class="col-lg-6">
                                  <input type="checkbox" name="chkBuildings" class="contact-learn-checkbox" value="chkBuildings"/>
                                  <label for="chkBuildings" class="contact-learn-label">Building/Sites</label>
                                </div>
                              <div class="col-lg-6">
                                  <input type="checkbox" name="chkTraining" class="contact-learn-checkbox" value="chkTraining"/>
                                  <label for="chkTraining" class="contact-learn-label">Training/Education</label>
                                </div>
                                <div class="col-lg-6">
                                  <input type="checkbox" name="chkComposite" class="contact-learn-checkbox" value="chkComposite"/>
                                  <label for="chkComposite" class="contact-learn-label">Composite Center</label>
                                  <br>
                              </div>
                              <div class="col-lg-6">
                                  <input type="checkbox" name="chkAirport" class="contact-learn-checkbox"/>
                                  <label for="chkAirport" class="contact-learn-label" value="chkAirport">Airport</label>
                                </div>
                                <div class="col-lg-6 chbxBottom">
                                  <input type="checkbox" name="chkGeneral" class="contact-learn-checkbox"/>
                                  <label for="chkGeneral" class="contact-learn-label" value="chkGeneral">General Information</label>
                                  <input type="hidden" name="area-of-interest" id="area-of-interest" class="formFields">
                                  <input type="hidden" name="submitted-from" id="submitted-from" class="formFields">
                              </div>

                          <div class="primary media-wrap">
                              <div class="col-lg-12">
                                  <label for="Comments">Comments/Questions</label>
                              </div>
                              <div class="col-lg-12 ">
                                  <textarea name="comments" id="Comments" class="formFields" ></textarea>
                              </div>
                          </div>
                          <div id="validationLoading">
                          <div id="validateFields">
                              <div class="panel validationIcons">
                                  <img id='fieldsValidating' src='../assets/img/gears_anv4.gif' class="loadingIcon"  alt="loading"/>
                                  <img id='fieldsValid' src='../assets/img/check.gif' class="checkMarkIcon" alt="valid"/>
                                  <img id='fieldsInvalid' src='../assets/img/WPPINVAL.gif' class="invalidIcon" alt="invalid"/>
                              </div>
                              <span id="validFieldsText" class="validation">Validating Fields</span>
                          </div>
                          <div id="submitForm">
                              <div class="panel validationIcons">
                                  <img id='submittingSpinner' src='../assets/img/gears_anv4.gif' class="loadingIcon" alt="loading"/>
                                  <img id='submitSuccess' src='../assets/img/check.gif' class="checkMarkIcon" alt="successfull"/>
                                  <img id='submitFail' src='../assets/img/WPPINVAL.gif' class="invalidIcon" alt="error"/>
                              </div>
                              <span id="submitFormText" class="validation">Submitting Form</span>
                          </div>
                      </div>
                      <div class="col-lg-12">
                      <input type="button" id="submitFormButton" value="Submit" class="important btn btn-cta btn-lg btn-md " role="button">
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
  background:
  linear-gradient(
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0.75)
    ),
  url("../assets/img/contact-bkgd.jpg") no-repeat top left fixed;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
  background-size:cover;
}

#contactCard{
  margin-top: 50px;
}
p.contactText{
font-family: 'Lato-Light', sans-serif;
font-size: 28px;
color: #212121;
letter-spacing: 0;
line-height: 125%;
margin-top: 30px;
padding-right: 2.5rem;

text-align: left;
}
.contactInfo{
    margin-top:50px;
}
.contactLink{
  height: 50px;
  padding-right: 2.5rem;
  margin-bottom: 20px;
}
a > img{
    mix-blend-mode: darken;
}

.chbxTop{
  padding-top: 15px;
}
.chbxBottom{
  padding-bottom: 15px;
}
 label{
font-family: 'Lato-Regular', sans-serif;
font-size: 16px;
color: #757575;
font-weight:normal;
}
.formFields{
  width: 100%;
}
#formCard{
  padding-top: 40px;
  padding-bottom: 40px;

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
#directionsBtn{
    font-size:18px;
    margin-top:30px;
    margin-bottom:30px;
}
</style>
