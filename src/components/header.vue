<template>
    <header class="site-header ncgtp-navbar">
        <div class="site-header__inner-wrapper">

            <a href="/" class="logo logo--header " title="">
            </a>

            <i class="glyphicon glyphicon-menu-hamburger gtpBurger menu-btn" id="menu-btn"></i>    
                    
                
        </div>
        <div class="navContainer ">
            <div class="main-nav-column col-lg-offset-1 col-lg-2">
                <ul class="main-nav-header-content main-nav-grow">
                    <!--<a href="#">Link 1</a> -->
                </ul>
            </div>
            <div class="main-nav-column col-lg-2">
                <ul class="main-nav-header-content main-nav-live">
                </ul>
            </div>
            <div class="main-nav-column col-lg-2">
                <ul class="main-nav-header-content main-nav-work">
                </ul>
            </div>
            <div class="main-nav-column col-lg-2">
                <ul class="main-nav-header-content main-nav-resources">
                </ul>
            </div>
            <div class="main-nav-column col-lg-2">
                <ul class="main-nav-header-content main-nav-contact">
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

 nav > a > img{
    mix-blend-mode: darken;
}
body {
    padding-top:70px;
}

.ncgtp-navbar {
    background-color: #fff;
    position: fixed; /* Set the navbar to fixed position */
    top: 100px; /* Position the navbar at the top of the page, should be top: 0 if we didn't have other SharePoint stuff in the way; */
    width: 100%; /* Full width */
}

/* Links inside the navbar */
.ncgtp-navbar a {
    float: left;
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

body.sp-authenticated.ms-backgroundImage {1
    padding-top: 250px;
    background-color: #fff;
}

.ncgtp-navbar .logo {
    background-image: url(../assets/img/logo.jpg);
    width:300px;
}

.gtpBurger {
    transform: scale(3);
    cursor: pointer;
    float:right;
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
    size: 2rem;
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
    font-size: 2rem;
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
    font-size: 2rem;
}

.social-list__list {
    display: inline;
    text-align: center;
}

li.social-list__item {
    transform: scale(3);
    padding: 0 2rem;
}

.site-footer {
    margin-top: 2rem;
}

.site-footer, .site-footer__bottom, .social-list  {
    background: #0c98e2;
}

.main-nav-footer-location-info a {
    text-decoration: none;
    cursor: text;
}

@media only screen and (min-width: 600px){
    .main-nav-column {
    width: auto;
    }
}



</style>
