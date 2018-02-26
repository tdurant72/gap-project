<template>
    <header class="site-header ncgtp-navbar">
        
        <div class="site-header__inner-wrapper row">
            <div class="col-lg-10 col-xs-10">
                <a href="/" class="logo logo--header " title="">
                </a>
            </div>
            <div class="col-lg-2 col-xs-2">
                <i class="glyphicon glyphicon-menu-hamburger gtpBurger menu-btn" id="menu-btn"></i>    
            </div>
                
        </div>

        
        <div class="navContainer row">
            <div>
                
                <ul class="main-nav-header-content main-nav-grow col-lg-offset-1 col-md-2 col-sm-12">
                    
                </ul>
            </div>
            <div>
                
                <ul class="main-nav-header-content main-nav-live  col-md-2 col-sm-12">
                </ul>
            </div>
            <div >
                
                <ul class="main-nav-header-content main-nav-work  col-md-2 col-sm-12">
                </ul>
            </div>
            <div >
                
                <ul class="main-nav-header-content main-nav-resources  col-md-2 col-sm-12">
                </ul>
            </div>
            <div >
                
                <ul class="main-nav-header-content main-nav-contact  col-md-2 col-sm-12">
                </ul>
            </div>
        </div>
        


    </header>

</template>
<script>

export default {
    data(){
        return{
            isActive:false,
            collapseClass: 'in'
        }
    },
  methods:{
      toggleIn:function(){
          this.isActive = !this.isActive;
      }
  }
}
</script>
<style scoped>
/* icons */
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

.main-nav-header-content li:first-child a:before {
    font-size: 20px;
    font-family: icomoon;
    padding-right: 10px;
}

.main-nav-header-content li:first-child a:before:hover {
    border-bottom: none;
}

.main-nav-grow li:first-child a:before {
    content: "\e90e";
}

.main-nav-live li:first-child a:before {
    content: "\e92a";
}
.main-nav-work li:first-child a:before {
    content: "\e917";
}
.main-nav-resources li:first-child a:before {
    content: "\e920";
}
.main-nav-contact li:first-child a:before {
    content: "\e904";
}


/* dynamic styling */

 nav > a > img{
    mix-blend-mode: darken;
}
body {
    padding-top:70px;
}

.ncgtp-navbar {
    background-color: #fff;
    position: fixed; /* Set the navbar to fixed position */
    width: 100%;  /*Full width */
}

/* Links inside the navbar */
.ncgtp-navbar a {
    display: block;
    padding: 14px 16px;
    text-decoration: none;
    float: left;
}

body.sp-authenticated.ms-backgroundImage {
    padding-top: 250px;
    background-color: #fff;
}

.ncgtp-navbar .logo {
    background-image: url(../assets/img/Global_Transpark_Logo_Color.png);
    width:300px;
}

.gtpBurger {
    transform: scale(2);
    cursor: pointer;
    float:right;
    padding-right: 10px;
}

.navContainer {
    display: none;
}

.expand {
    display: block;
}

.main-nav-column {
    float: left;
    width: 20%;
}

.main-nav-header {
    size: 1rem;
    color: white;
}

.main-nav-header-content, .main-nav-footer-content {
    list-style: none;
    color: white;
    display: inline-block;
}

.main-nav-header-content li{
    display: inline-block;
    width: 100%;
    line-height:110%;
}

.main-nav-header-content li:first-child a{
    color: #0081C3;
    font-size: 16px;
    border-bottom: .2rem solid;
    /* border-bottom-color: #0c6c2c; */
}
.main-nav-header-content li a {
    text-align: left;
}



.main-nav-footer-content a {
    font-family: 'Lato', sans-serif;
    text-decoration: none;
}

.main-nav-footer-content li:first-child a {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
}

.social-list__list {
    display: inline;
    text-align: center;
}

li.social-list__item {
    transform: scale(3);
    padding: 0 1rem;
}

.site-footer {
    margin-top: 1rem;
}

.site-footer, .site-footer__bottom, .social-list  {
    background: #0c98e2;
}

.main-nav-footer-location-info a {
    text-decoration: none;
    cursor: text;
}


a.navbar-brand{
padding-top: 15px;
}
 nav > a > img{
    mix-blend-mode: darken;
}


ul,
ol {
    margin-left: 0;
    padding: 0 0 0 40px;
    list-style:none important;
}
li{
    list-style-type: none;
}
button#toggler{
    width:30px;
    height: 30px;
    margin-top: 15px;
    margin-right: 10px;
}

.fa-check {
    color: #fff;
    margin-left: .8em;
}
.fa-circle {
    color: #fff;
    font-size: .5em;
    padding-right: 1em;
}

 a.primary{
     color: #757575;
    font-family: 'Lato-Bold',sans-serif;
    font-size: 18px;
    font-weight:bold;
    text-decoration: underline;
 }
 a.active{
     text-decoration: none;
     color:#212121;
 }
 a.secondary{
     color:#757575;
    font-family: 'Lato-Light', sans-serif;
    font-size: 16px;
    font-weight:200;
 }
  li.nav-item.dropdown.menu-large{
      padding-right: 20px;
  }
  li.home{
      padding-right: 20px;
  }
 li.nav-item.dropdown.menu-large.show.open > ul > li > ul > li{
     list-style: none;
 }

 li.nav-item.dropdown.menu-large.show.open > ul > li > ul{
     margin-left: 5px;
     padding-left: 5px;
 }
 .navbar{
     background-color: #fff;
 }

 li.nav-item >a{
     margin-right: 0;
 }
 li.nav-item {
    list-style:none;
 }

    .navbar-inner {
    padding: 0;
    }
    .nav {
    margin: 0;
    display: table;
        width: 100%;
    }
    .nav >li {
        display: table-cell;
        width: 1%;
        float: none;
        text-align: center;
    }
    a {
        line-height: 2.5;
    }

  .nav-link{
    color: #ffffff;
}

.menu-large {
    position: static ;
}
.megamenu {
    padding: 20px 0px;
    width: 100%;
    list-style:none;
}
    .megamenu > li {
    color: #fff;
    }

.megamenu >li >ul> li {
    list-style: none;
}
    li {
        list-style: none;
    }
   .megamenu > li > a {
        display: block;
        margin-top: 30px;
        clear: both;
        color: #fff;
        white-space: normal;
    }


ul {
    padding: 0;
    margin: 0;

}
   .megamenu{
        list-style:none imporant;
    }
ul.megamenu.col-lg-1 {
    list-style: none;
}

ul.megamenu.col-lg-2 {
    list-style: none;
}

</style>



