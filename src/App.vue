<template>
  <div>
    <app-header></app-header>
    <app-hero></app-hero>
      <app-why></app-why>
      <app-about></app-about>
      <app-industries></app-industries>
      <app-site></app-site>
      <app-contact></app-contact>
      <app-move></app-move>
      <app-footer></app-footer>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import industries from './components/industries.vue';
import header from './components/header.vue';
import hero from './components/hero.vue';
import site from './components/site.vue';
import why from './components/why.vue';
import about from './components/about.vue';
import contact from './components/contact.vue';
import move from './components/move.vue';
import footer from './components/footer.vue';

export default {

  components:{
    'app-industries':industries,
    'app-header':header,
    'app-hero':hero,
    'app-site':site,
    'app-why':why,
    'app-about':about,
    'app-contact':contact,
    'app-move':move,
    'app-footer':footer
  },
  data(){
    return{

    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* Header Parallax Element Style*/ 
.paral {
min-height: 700px;
background-attachment: fixed;
background-size: cover;
background-position: 50% 50%;
}
.paral-banner{
  min-height:150px
  }
.paral-sm {
min-height: 600px;
background-attachment: fixed;
background-size: cover;
background-position: 50% 50%;
}
.paral-lg {
min-height: 800px;
background-attachment: fixed;
background-size: cover;
background-position: 50% 50%;
}
/* Paragraph for Parallax Section */ 
.paral p {
font-size: 24px;
color:#f5f5f5;
text-align: center;
line-height: 60px;
}

/* Heading for Parallax Section */ 
.paral h1 {
color: rgba(255, 255, 255, 0.8);
font-size: 60px;
text-align: center;
/* padding-top: 60px; */
line-height: 100px;
}

.jumbotron{margin-bottom: 0 !important;}

.btn-cta{
/* background: #FFC107;
border: 1px solid #FFC107;
box-shadow: 0 3px 0 0 #D7A102, inset 0 2px 0 0 #FFDE79; */
border-radius: 10px;
background: #0081C3;
}

a.btn-cta{
font-family: 'Lato-Light', sans-serif;
font-size: 16px;
color: #FFFFFF;
text-shadow: 0 1px 0 #BDBDBD;
text-transform: uppercase;
}
.btn-primary{
background: #0081C3;
/* border: 1px solid #006396;
box-shadow: 0 2px 0 0 #004E76, inset 0 2px 0 0 #01A9FF; */
border-radius: 10px;
}

a.btn-primary{
font-family: 'Lato-Light',sans-serif;
font-size: 16px;
color: #FFFFFF;
text-shadow: 0 1px 0 #BDBDBD;
text-transform: uppercase;
}


.ncgtp-navbar {background-color: #eee;top: 100px; width: 100%;}
.ncgtp-navbar a {float: left;display: block;text-align: center; padding: 5px 10px;text-decoration: none;}
.ncgtp-navbar .logo {background-image: url(./assets/img/logo.jpg); width:400px; height:50px; margin:10px 10px	5px 10px; background-repeat:no-repeat; position:relative; left:20px;}
.ncgtp-navbar .logo {mix-blend-mode: darken;}
.gtpBurger {transform: scale(1.5);cursor: pointer;margin:20px;}
.navContainer {display: none;}
.expand { display: block;padding-top:75px;}
.main-nav-column {float: left;width: 20%;}
.main-nav-header { size: 2rem;color: white;}
.main-nav-header-content, .main-nav-footer-content {list-style: none;color: white;display: inline-block;}
.main-nav-header-content li{display: inline-block;width: 100%;}
.main-nav-header-content li:first-child a{color: #0081C3;font-size: 18px;border-bottom: .2rem solid;}
.main-nav-header-content li a { text-align: left;}
.main-nav-footer-content a {font-family: 'Lato', sans-serif;text-decoration: none; margin-left:0px;}
.main-nav-footer-content li:first-child a {font-family: 'Montserrat', sans-serif;font-size: 20px; font-weight:bold; margin-left:-10px}
.social-list__list {text-align: center;}
li.social-list__item { transform: scale(3);padding: 0 2rem;}
.site-footer {margin-top: 2rem;}
.site-footer, .site-footer__bottom  { background: #0c98e2;}
.main-nav-footer-location-info a {text-decoration: none; cursor: text;}
ul.main-nav-footer-content.main-nav-footer-location-info > p {font-size: 16px;font-family: 'Lato',sans-serif;}
.site-footer__main.row { padding-bottom: 20px;}
i.icon-instagram{background:url(./assets/img/instagram.png) left bottom;background-size:50%;background-repeat:no-repeat;}
i.icon-facebook{background:url(./assets/img/facebook.png) left bottom; background-size:50%;background-repeat:no-repeat;}
i.icon-linkedin{background:url(./assets/img/linkedIn.png) left bottom; background-size:50%;background-repeat:no-repeat;}
.icon{  float:left;width:25px; height:25px; position:relative; display:block; }
.icon:before, .icon:after{ position:absolute; content:""; display:block; }
ul.social-list__list { margin: 20px;}

ul.social-list__list>li { display: inline-block;}


</style>
