<template>
  <div class="jumbotron paral-sm paralsec8" id="footer">
    <div class="container" id="footerContainer">


        <!-- dynamic -->
        <div class="site-footer__top">
                    <div class="site-footer__main row">
                        <div class="grid__cell col-lg">
                            <div class="grid__cell-inner">
                                <ul class="main-nav-footer-content main-nav-footer-grow">
                                </ul>
                            </div>
                        </div>
                        <div class="grid__cell col-lg">
                            <div class="grid__cell-inner">
                                <ul class="main-nav-footer-content main-nav-footer-live">
                                </ul>
                            </div>
                        </div>
                        <div class="grid__cell col-lg">
                            <div class="grid__cell-inner">
                                <ul class="main-nav-footer-content main-nav-footer-work">
                                </ul>
                            </div>
                        </div>
                    </div>
                <div class="site-footer__main row">
                    <div class="grid__cell col-lg">
                        <div class="grid__cell-inner">
                            <ul class="main-nav-footer-content main-nav-footer-resources">
                            </ul>
                        </div>
                    </div>
                    <div class="grid__cell col-lg">
                        <div class="grid__cell-inner">
                            <ul class="main-nav-footer-content main-nav-footer-contact">
                            </ul>
                        </div>
                    </div>
                    <div class="grid__cell col-lg">
                        <div class="grid__cell-inner">
                            <ul class="main-nav-footer-content main-nav-footer-location-info">
                                <p>3800 Hwy. 58 North<br>
                                North Carolina Global Transpark<br>
                                Kinston, N.C. 28504</p>
                                <p>
                                    Phone: <a tabindex="-1" href="tel:+1-252-523-1351">(252) 523-1351</a><br>
                                    Fax: <a tabindex="-1" href="fax:+1-252-522-1765">(252) 522-1765</a>
                                </p>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
    </div>
     <div class="grid__cell nav justify-content-center">
      <div class="grid__cell-inner">
        <div class="social-list ">
          <ul class="social-list__list ">
            <li class="social-list__item nav-item">
            <a class="social-list__link" target="_blank" href="https://www.facebook.com/GlobalTransPark" aria-label="NCGTP facebook link">
                <span class="social-list__link-text">
                </span>
                <i class="icon-facebook icon"></i>
            </a>
            </li>
            <li class="social-list__item nav-item">
            <a class="social-list__link" target="_blank" href="https://twitter.com/GlobalTransPark" aria-label="NCGTP twitter link">
                <span class="social-list__link-text">
                </span>
                <i class="icon-twitter icon"></i>
            </a>
            </li>
            <li class="social-list__item nav-item">
            <a class="social-list__link" target="_blank" href="https://www.linkedin.com/company/287838" aria-label="NCGTP linkedIn link">
                <span class="social-list__link-text">
                </span>
                <i class="icon-linkedin icon"></i>
            </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row privacy-copyright">
      <div class="col-md col-md-offset-4">
        <a class="privacy" href="../../pages/privacy-statement.aspx">Privacy Statement</a>
      </div>
      <div class="col-md-6">
        <p class="privacy">© Copyright North Carolina Global TransPark </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.paralsec8{
   background-color: #2196F3;
}
#footer{
    padding-top: 5%;
}
#footerContainer{
    padding-left: 10%;
    padding-right: 10%;
}
.grid__cell{
  margin-top: 10px;
}
ul{
    list-style: none;
}
li{
    list-style: none;
}
#socialContainer{
    padding-top: 40px;
    left: 35%;
}
/* .buttonSocial {
    background-color: #ffffff;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    margin: 4px 2px;
    border-radius: 50%;
    width:46px;
    height: 46px;
    font-family: Montserrat-LightItalic;
    font-size: 18px;
    display: block;
    -webkit-transition: all 200ms cubic-bezier(0.47, 0, 0.745, 0.715);
    transition: all 200ms cubic-bezier(0.47, 0, 0.745, 0.715);
}
.buttonSocial:hover {
    width:56px;
    height: 56px;
    -webkit-transition: all 200ms cubic-bezier(0.47, 0, 0.745, 0.715);
    transition: all 200ms cubic-bezier(0.47, 0, 0.745, 0.715);
} */

.social-icon {
  display: block;
  background: #95a0ad;
  color: white !important;
  width: 3rem;
  text-align: center;
  height: 3rem;
  text-decoration: none;
  line-height: 3rem;
  position: relative;
}
/* @font-face {
  font-family: "custom-icomoon";
  font-style: normal;
  font-weight: normal;
  src: url("../assets/fonts/custom-icomoon.eot");
  src: url("../assets/fonts/custom-icomoon.eot?#iefix") format("embedded-opentype"), url("../assets/fonts/custom-icomoon.ttf") format("truetype"), url("../assets/fonts/custom-icomoon.woff") format("woff");

  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;

} */
@font-face {
  font-family: "icomoon";
  font-style: normal;
  font-weight: normal;
  src: url("../assets/fonts/icomoon.eot");
  src: url("../assets/fonts/icomoon.eot?#iefix") format("embedded-opentype"), url("../assets/fonts/icomoon.ttf") format("truetype"), url("../assets/fonts/icomoon.woff") format("woff");
  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;
  /* Support for IE. */
}
.site-footer a{
  color: white;
}
.social-list__list {text-align: center;}
li.social-list__item {  margin: 20px 20px;}
a.social-list__link{font-size:40px;}
.social-list__item { display:inline-block; }
/* ul.social-list__list { margin: 20px;} */

ul.social-list__list>li { display: inline-grid;}

/* .social-icon--twitter:hover {
  background: #2196f3;
}

.social-icon--facebook:hover {
  background: #2196f3;
}
.social-icon--linkedin:hover {
  background: #2196f3;
}
.social-icon--twitter {
  background: white;
}

.social-icon--facebook {
  background: white;
}
.social-icon--linkedin {
  background: white;
}
a.social-item__link{
  color:white;
} */
a.social-item__link:hover{
  color:rgb(37, 52, 255);
}
[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-facebook:before {
  content: "\ea90";
  /* -webkit-text-fill-color: #fff; */

}

.icon-twitter:before {
  content: "\ea96";
  /* -webkit-text-fill-color: #fff; */
}

.icon-linkedin:before {
  content: "\eaca";
  /* -webkit-text-fill-color: #fff; */
}
.footerText{
    font-family: 'Lato-Ligh',sans-serif;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 110%;
    text-align: left;
    margin-left: 50px;
}
.footerText > a {
    color:#ffffff;
    text-decoration: underline;
}
.footerText > a:hover {
    color:#eeeeee;
    font-weight: bold;
}
.row.privacy-copyright {
    margin-top: 30px;
    font-size: 1rem;
}
.privacy{
  color:white;
  font-size:10px;
  margin-top: 10px;
  margin-bottom: 0px;
}
a.privacy{
  font-size:10px
}
 a.primary{
     color: #ffffff;
    font-family: 'Lato-Bold', sans-serif;
    font-size: 18px;
    font-weight:bold;
 }
 a{
     color: #ffffff;
    font-family: 'Lato-Bold', sans-serif;
    font-size: 18px;

 }
 a.active{
     text-decoration: none;
     color:#ffffff;
 }
 a.secondary{
     color:#ffffff;
    font-family: 'Lato-Light', sans-serif;
    font-size: 16px;
    font-weight:bold;
    margin-left: 20px;
 }
 .secondRow{
     padding-top: 40px;
 }


.footer {
    background: #1f1f1f;
    overflow: auto;
}

.footer-inner {
    color: #fff;
    font-family: 'Lato-Light', sans-serif;
    font-size: 16px;
    font-weight:Light;
    padding: 1rem;
    margin: 0 auto;
    display: block;
    max-width: 80%;
}

.footer li a {
    text-decoration: none;
    color: #fff;
}

.footer ul {
    list-style-type: none;
}

.footer-row {
    margin: 0 0 21px 0;
}

.main-nav-footer-content a {
    font-family: 'Lato', sans-serif;
    text-decoration: none;
}

.main-nav-footer-content li:first-child a {
    font-family: 'Lato-Bold', sans-serif;
    font-weight:bold;
    font-size: 16px;
}
</style>
