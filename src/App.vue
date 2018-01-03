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
.paral-banner {
height: 148px;
/* background-attachment: fixed; */
/* background-position: 50% 50%; */
/* background-repeat: no-repeat; */
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
font-family: Lato-Light;
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
font-family: Lato-Light;
font-size: 16px;
color: #FFFFFF;
text-shadow: 0 1px 0 #BDBDBD;
text-transform: uppercase;
}
</style>
