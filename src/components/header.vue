<template>
    <header class="site-header ncgtp-navbar">
        
        <div class="site-header__inner-wrapper row">
            <div class="col-lg-10">
                <a href="/" class="logo logo--header " title="">
                </a>
            </div>
            <div class="col-lg-2">
                <i class="glyphicon glyphicon-menu-hamburger gtpBurger menu-btn" id="menu-btn"></i>    
            </div>
                
        </div>

        
        <div class="navContainer ">
            <div class="main-nav-column col-lg-offset-1 col-lg-2">
                <ul class="main-nav-header-content main-nav-grow">
                    
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
        

        <!-- manual links -->
        <!--
        <nav class="navbar  fixed-top bg-faded" role="navigation" style="padding: 0px;">
  <button id="toggler" class="navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsing-navbar">
    &#9776;
 </button>
        <a class="navbar-brand" href="#">
            <img src="../assets/img/logo.jpg" height="41" alt="">
        </a>
        <div class="row justify-content-center">
    <div class="collapse navbar-toggleable col-lg-12 " id="collapsing-navbar">
    <ul class="row justify-content-center">
        <ul class="megamenu col-lg-1">
            <li class="nav-item home">
                <a href="#" class="nav-link primary active" id="home">Home</a>
            </li>
        </ul>
    <ul class="megamenu col-lg-2  ">
        <li class="nav-item dropdown menu-large ">
            <a class="nav-link primary" data-toggle="dropdown" href="#" id="grow">Grow</a>
        </li>
                <li>
                    <a href="#" class="secondary">
                        <i class="secondary" aria-hidden="false">
                        </i> Site Selection
                    </a>
                </li>
                <li>
                    <a href="#" class="secondary">
                        <i class="" aria-hidden="false">
                        </i>Accessibility
                    </a>
                </li>
                <li>
                    <a href="#" class="secondary">
                        <i class="" aria-hidden="false">
                        </i>Foreign Trade Zone
                    </a>
                </li>
                <li>
                    <a href="#" class="secondary">
                        <i class="" aria-hidden="false">
                        </i>Workforce
                    </a>
                </li>
                <li>
                    <a href="#" class="secondary">
                        <i class="" aria-hidden="false">
                        </i>Development & Training
                    </a>
                </li>
                <li>
                    <a href="#" class="secondary">
                        <i class="" aria-hidden="false">
                        </i>Incentives & Resources
                    </a>
                </li>
    </ul>
    
   <ul class="megamenu col-lg-2 ">
      <li class="nav-item dropdown menu-large">
        <a class="nav-link primary" data-toggle="dropdown" href="#" id="work">Work</a>
      </li>
                <li>
                    <a href="#" class="secondary">
                        <i class="secondary" aria-hidden="false">
                        </i>Major Employers
                    </a>
                </li>
                <li>
                    <a href="#" class="secondary">
                        <i class="" aria-hidden="false">
                        </i>GTP Jobs
                    </a>
                </li>
                <li>
                    <a href="#" class="secondary">
                        <i class="" aria-hidden="false">
                        </i>Workforce
                    </a>
                </li>
              <li>
                  <a href="#" class="secondary">
                        <i class="" aria-hidden="false">
                        </i>Development & Training
                    </a>
                </li>
    </ul>

    <ul class="megamenu col-lg-2">
      <li class="nav-item dropdown menu-large">
        <a class="nav-link primary" data-toggle="dropdown" href="#" id="live">Live</a>
      </li>
            <li>
                  <a href="#" class="secondary">
                    <i class="secondary" aria-hidden="false">
                    </i>Why Eastern NC
                  </a>
            </li>
            <li>
                <a href="#" class="secondary">
                    <i class="" aria-hidden="false">
                    </i>NC Events
                </a>
            </li>
            <li>
                  <a href="#" class="secondary">
                      <i class="" aria-hidden="false">
                          </i>Attractions & Culture
                    </a>
            </li>
            <li>
                  <a href="#" class="secondary">
                        <i class="" aria-hidden="false">
                        </i>Econonmy
                    </a>
            </li>
            <li>
                  <a href="#" class="secondary">
                        <i class="" aria-hidden="false">
                        </i>History
                    </a>
            </li>
    </ul>

    <ul class="megamenu col-lg-2">
      <li class="nav-item dropdown menu-large ">
        <a class="nav-link primary" data-toggle="dropdown" href="#" id="resources">Resources</a>
      </li>
            <li>
                  <a href="#" class="secondary">
                    <i class="secondary" aria-hidden="false">
                    </i>Industry News
                  </a>
            </li>
            <li>
                    <a href="#" class="secondary">
                        <i class="" aria-hidden="false">
                        </i>Environment
                    </a>
            </li>
            <li>
                <a href="#" class="secondary">
                    <i class="" aria-hidden="false">
                    </i>RFP's & RFQ's
                </a>
            </li>
            <li>
                  <a href="#" class="secondary">
                        <i class="" aria-hidden="false">
                        </i>Maps
                    </a>
            </li>
            <li>
                  <a href="#" class="secondary">
                        <i class="" aria-hidden="false">
                        </i>Downloads
                    </a>
            </li>
        </ul>
 
        <ul class="megamenu col-lg-2">
            <li class="nav-item dropdown menu-large">
                <a class="nav-link primary" data-toggle="dropdown" href="#">Contact</a>
            </li>
            <li>
                  <a href="#" class="secondary">
                    <i class="fa fa-check" aria-hidden="false">
                    </i>Contact Us
                  </a>
            </li>
            <li>
                  <a href="#" class="secondary"><i class="" aria-hidden="false"></i>Meet the Director</a>
            </li>
            <li>
                <a href="#" class="secondary">
                    <i class="" aria-hidden="false">
                    </i>Our Team
                </a>
            </li>
            <li>
                  <a href="#" class="secondary">
                    <i class="" aria-hidden="false">
                    </i>Board of Directors
                    </a>
            </li>
        </ul>
    </ul>
  </div>
        </div>
    </nav>
    -->
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
/* manual styling */
/* 
a.navbar-brand{
padding-top: 15px;
}
 nav > a > img{
    mix-blend-mode: darken;
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
    font-family: Lato-Bold;
    font-size: 18px;
    text-decoration: underline;
 }
 a.active{
     text-decoration: none;
     color:#212121;
 }
 a.secondary{
     color:#757575;
    font-family: Lato-Light;
    font-size: 16px;
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
     margin-bottom:0px;
     min-height:70px;
 }

 li.nav-item >a{
     margin-right: 0;
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

	.nav-link {
		color: #fff;
	}

.menu-large {
	position: static !important;
}
.megamenu {
	padding: 20px 0px;
    width: 100%;
}

ul {
    padding: 0;
    margin: 0;
}
    li {
        list-style: none;
    }
   .megamenu > li > a {
        display: block;
   
        clear: both;
        font-weight: normal;
        line-height: 110%;
        color: #1976D2;
        white-space: normal;
    }
.dropdown-menu {
	background: #f6f6f6;
} */

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
}

body.sp-authenticated.ms-backgroundImage {
    padding-top: 250px;
    background-color: #fff;
}

.ncgtp-navbar .logo {
    background-image: url(../assets/img/logo.jpg);
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



