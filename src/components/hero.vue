<template>
  <div class="jumbotron paral paralsec" id="hero">
    <div class="wrapper">
    <div class="left" :class="[leftActive ? 'leftNotshowing':'leftShowing']">
        <div class="inner">
           <div class="content-wrap"> 
            <transition name="fade-left-content">
              
                  <div v-if="leftActive"  class="leftCont content-body">
                      <h2 class="heroText">A world-class, 2,500 -  acre industrial & business park.
                        </h2>
                        <h3 class="heroText3">providing multimodal capabilities for global commerce.</h3>
                        <div>
                            <a class="btn btn-primary btn-lg btn-hero btn-md" href="#" role="button">Grow With Us</a>
                        </div>
                        <div>
                            <a class="btn btn-primary btn-lg btn-md btn-hero" href="#" role="button">Contact</a>
                        </div>
                  </div>
                  
              
              </transition>
           </div>
            <!-- <img class="split" src="../assets/img/hero-bkgd.jpg" alt="GTP"> -->
            <video class="split" src="../assets/vids/left.mp4" poster="../assets/img/hero-bkgd.jpg" autoplay loop muted></video>
        </div>
    </div>
    <div v-if="leftActive" class="controller" :class="[leftActive ? 'controlLeft':'controlRight']">
                <div class="calloutContainer">
            <div class="callouts"  id="callout1">
                <span id="callout1text" class="calloutText ctLeft">Acres ready for development</span>
                <button class="buttonCallouts btnLeft">900</button>
                
            </div>
            <div class="callouts"  id="callout2">
                <span id="callout2text" class="calloutText ctLeft">unknown</span>
                <button class="buttonCallouts btnLeft">5,775</button>
                
            </div>
            <div class="callouts"  id="callout3">
                <span id="callout3text" class="calloutText  ctLeft">unknown</span>
                <button class="buttonCallouts btnLeft">9</button>
            </div>
            <div class="callouts"  id="callout4">
                <span id="callout4text" class="calloutText ctLeft">Workforce size</span>
                <button class="buttonCallouts  btnLeft">500K</button>
                
            </div>
            <button id="sliderBckBtn"  class="switch" @click="changeWidth" ><i class="glyphicon glyphicon-chevron-right"></i></button>
        </div>
    </div>
    <div v-if="rightActive" class="controller" :class="[rightActive ? 'controlRight':'controlLeft']">
        <div class="calloutContainer">
            <div class="callouts" id="callout5">
                <span id="callout5text" class="calloutText">Colleges & Universities</span>
                <button  class="buttonCallouts btnRight">77</button>
            </div>
            <div class="callouts"  id="callout6">
                <span id="callout6text" class="calloutText">Lower housing costs<br>to National average</span>
                <button class="buttonCallouts btnRight">87%</button>
                
            </div>
            <div class="callouts" id="callout7">
                <span id="callout7text" class="calloutText ">Average high <br>temperature (24 C)</span>
                <button  class="buttonCallouts btnRight">75F</button>
            </div>
            <div class="callouts"  id="callout8text">
                <span class="calloutText">Coastal state <br>parks</span>
                <button id="callout8" class="buttonCallouts  btnRight">8</button>
                
            </div>
            <button id="sliderBckBtn" class="switch" @click="changeWidth" ><i class="glyphicon glyphicon-chevron-left"></i></button>
        </div>
        
    </div>
    <div class="right" :class="[rightActive ? 'rightNotshowing':'rightShowing']">
        <div class="inner">
            <!-- <img class="split" src="../assets/img/NC-img.jpg" alt="NC Life"> -->
            <video class="split" src="../assets/vids/right.mp4" poster="../assets/img/NC-img.jpg" autoplay loop muted></video>
            <div  class="content-wrap">
                  <transition name="fade-right-content" >
                  <div v-if="rightActive" class="rightCont content-body">
                      <h2 class="heroText">North Carolina
                        </h2>
                        <h3 class="heroText3">where the living is easy.</h3>
                  </div>
                  </transition>
              </div>
            
        </div>
    </div>
    <div  id="arrowContainer">
        <a class="btn btn-primary buttonArrow" href="#why" role="button"><i class="glyphicon glyphicon-chevron-down"></i></a>
    </div>
    </div>



      <div class="hero-overlay">

      </div> 
    </div>
</template>
<script>
var wrapper = $('#wrapper');
var topLayer = $('.top');
var handle = $('.handle');
var skewed = $('.skewed');
var skew = 0;
var delta = 0;

export default {
    name: 'hero',
  data(){
      return{
      wrapper:wrapper,
      handle:handle,
      skewed:skewed,
      top:top,
      skew : skew,
      leftActive: true,
      rightActive: false,
      isOnTop: true,
      delta: delta
      }
  },
  methods:{
      changeWidth(){
          this.rightActive = !this.rightActive;
          this.leftActive = !this.leftActive;
      }
  }
 
}
</script>
<style scoped>
.paralsec {
/* background-image: url("../assets/img/hero-bkgd.jpg"); */
/* background: url("../assets/vids/AA.mp4");  */
 min-height: 700px;
padding: 0;
}

/* 
#ncCulture {
    transform: skew(-30deg);
    margin-left: -1000px; */
    /* width: calc(50vw + 1300px); */
/* } */
/* .vidShowing{
    width: calc(50vw + 1300px);
}
 .notShowing{
    width: calc(50vw + 600px);
}

/* .vid-showing{
    width:80%;
    z-index: 45;
    overflow: hidden;
    position: absolute;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
} */
/* .GTP-vid{
    width:80%;
}
.GTP-img{

}
.NC-img{

} */

/*test*/
.split{
    top:0;
    position: absolute;
    height: 100vh;
}
.left .inner {
  margin-left: 9%;
}
.left .inner  img{
  
  width: 100%;
}
.right .inner {
  margin-left: -9%;
}
.right .inner img {
  
  width: 100%;
  /* margin-left: -9%; */
}
.wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #bdbdbd;
}
.left,
.right {
  width: 100%;
  height: 100%;
  top: 0;
  transform: skewX(-8deg);
  overflow: hidden;
  position: absolute;
}
.controller {
    position: absolute;
    height: 100%;
    display: block;
    top: 0;
    z-index: 10;
    width: 10px;
    background-color: #fff;
    transform: skewX(-8deg);
}
.calloutContainer{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
}
.controlLeft{
    right:15%;
    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
}
.controlRight{
    right:84%;
    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
}

button{
    display: block;
}
.switch{
     border: none;
    background-color: #757575;
    color: #fff;
    border-radius: 8px;
    font-size: 2em;
    padding: 15px;
    transform: skewX(8deg);
    width: 75px;
}
#sliderBtn {
    position: relative;
    z-index: 100;
    right: 40px;
    padding: 0 10px;
    margin-top: 50px;
    padding-top: 20px;
}
#sliderBckBtn {
    position: relative;
    z-index: 100;
    right: 40px;
    padding: 0 10px;
    margin-top: 50px;
}

.callouts{
    height: 100px;
}
#callout1{
    position: relative;
    right: 31px;
}
#callout2{
    position: relative;
    right: 34px;
}
#callout3{
    position: relative;
    right: 37px;
}
#callout4{
    position: relative;
    right: 40px;
}
#callout5{
    position: relative;
    right: 31px;

}
.callouts:hover .calloutText{
    width: 400px;
    opacity: 1;
    transition: all 0.3s ease-out;
    
}
.callouts:hover .ctLeft{
    width: 400px;
    left: -380px;
    opacity: 1;
    transition: all 0.3s ease-out;
}

.calloutText{
    opacity: 0;
    margin-top: 10px;
    margin-left: 22px;
    padding: 10px;
    /* height: 60px; */
    line-height: 110%;
    background-color: #0167B8;
    height: 70px;
    /* padding: 6.25% 70% 0 0; */
    padding: 20px;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    align-items: center;
    font-size: 18px;
    width:80%;
    white-space: nowrap;
    position: absolute;
    /* display: inline-block; */
    /* float: right; */
    vertical-align: middle;
    overflow: hidden;
    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
}
.ctLeft{
    float: left;
    left:-50px;
}
/* span {
  height: 55px;

  display: table-cell;
  vertical-align: middle;
} */

#callout6{
    position: relative;
    right: 34px;
}
#callout7{
    position: relative;
    right: 32px;
}
#callout8{
    position: relative;
    right: 35px;
}

.buttonCallouts {
    background-color: #008EFF;
    border: none;
    color: white;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    margin: 4px 2px;
    border-radius: 50%;
    width:80px;
    height: 80px;
    /* float: left; */
    font-family: Montserrat-LightItalic;
    font-size: 20px;
    transform: skewX(8deg);
}
.buttonCallouts:hover {
    background-color: #0167B8;
    width:85px;
    height: 85px;
    -webkit-transition: all 200ms cubic-bezier(0.47, 0, 0.745, 0.715);
    transition: all 200ms cubic-bezier(0.47, 0, 0.745, 0.715);
}
#arrowContainer{
    left:50%;
    top:75%;
    position: absolute;
    z-index: 1000;
}
.buttonArrow {
    background-color: #FFC107;
    border: none;
    color: white;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    width:80px;
    height: 80px;
    /* float: left; */
    font-family: Montserrat-LightItalic;
    font-size: 45px;
}
.buttonArrow:hover {
    background-color: #008EFF;
}

.btnRight{
    float: left;
}
.btnLeft{
    float: left;
}
.left {
  position: relative;
}
.leftShowing{
    left: -85%;
}
.leftNotshowing{
    left: -15%;
}
.right {
  position: absolute;
}
.rightShowing {
  position: absolute;
  right: -85%;
  -webkit-transition: all 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
    transition: all 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
}
.rightNotshowing {
  position: absolute;
  right: -16%;
  -webkit-transition: all 200ms cubic-bezier(0.47, 0, 0.745, 0.715);
    transition: all 200ms cubic-bezier(0.47, 0, 0.745, 0.715);
}
.left .inner,
.right .inner {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  transform: skewX(8deg);
}

h2.heroText{

font-family: Montserrat-Bold;
font-size: 40px;
color: #FFFFFF;
text-shadow: 0 2px 0 #1976D2;
padding-top: 15%;
padding-bottom: 10px;

} 
h3.heroText3{
font-family: Montserrat-LightItalic;
font-size: 30px;
color: #FFFFFF;
margin-left: 40px;
padding-bottom: 20px;
}
.layer .content-body{
    width: 25%;
    position: relative;
    top: 50%;
  
    transform: skewX(8deg);
}
.content-body{
    z-index: 50;
}
.rightCont {
    right: 10%;
   position: absolute;
   width: 50%;
}
.leftCont {
    left: 15%;
    position: absolute;
    width: 50%;
    
} 
.btn-hero{
    width: 150px;
    float: right;
    margin-right: 40px;
}

.fade-right-content-enter,
.fade-right-content-leave-to {
  opacity: 0;
}
.fade-right-content-enter-active,
.fade-right-content-leave-active {
  transition: opacity 2s;
}
.fade-left-content-enter,
.fade-left-content-leave-to {
    
  opacity: 0;
    
}
.fade-left-content-enter-active,
.fade-left-content-leave-active {
    transition: opacity 2s;
  
}

.slide-left-leave-active,
.slide-left-enter-active {
  transition: 1s;
}
.slide-left-enter {
  transform: translate(100%, 0);
}
.slide-left-leave-to {
  transform: translate(-100%, 0);
}
.slide-right-leave-active,
.slide-right-enter-active {
  transition: 1s;
}
.slide-right-enter {
  transform: translate(100%, 0);
}
.slide-right-leave-to {
  transform: translate(-100%, 0);
}
</style>

