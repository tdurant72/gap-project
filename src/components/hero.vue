<template>
    <div class="jumbotron paral paralsec" id="hero">
        <div class="wrapper hidden-sm-down">
    <div id="controllers"  >
                <div v-if="leftActive" class="controller controllerImg" :class="[leftActive ? 'controlLeft':'controlRight']">
                    <div class="calloutContainer">
                        <div class="callouts"  id="callout1">
                            <span id="callout1text" class="calloutText ctLeft">Expand Your Business</span>
                            <a class="buttonCallouts btnLeft" role="button" href="https://stage-wwwtest.ncgtp.com/grow/Pages/default.aspx"   >GROW</a>
                        </div>
                        <div class="callouts"  id="callout2">
                            <span id="callout2text" class="calloutText ctLeft">Carolina Quality of Life</span>
                            <a class="buttonCallouts btnLeft" role="button" href="https://stage-wwwtest.ncgtp.com/live/Pages/default.aspx" >LIVE</a>
                        </div>
                        <div class="callouts"  id="callout3">
                            <span id="callout3text" class="calloutText  ctLeft">Economic Impact<br>& Opportunities</span>
                            <a class="buttonCallouts btnLeft" role="button" href="https://stage-wwwtest.ncgtp.com/work/Pages/default.aspx" >WORK</a>
                        </div>
                        <button id="sliderBckBtn"  class="switch" @click="changeWidth" ><i class="glyphicon glyphicon-chevron-left"></i></button>
                    </div>
                </div>
            
                <div v-if="rightActive" class="controller controllerImg" :class="[rightActive ? 'controlRight':'controlLeft']">
                    <div class="calloutContainer">
                        <div class="callouts" id="callout5">
                            <span id="callout5text" class="calloutText">Expand Your Business</span>
                            <a  class="buttonCallouts btnRight" role="button" href="https://stage-wwwtest.ncgtp.com/grow/Pages/default.aspx" >GROW</a>
                        </div>
                        <div class="callouts"  id="callout6">
                            <span id="callout6text" class="calloutText">
                                Our quality of life</span>
                            <a  class="buttonCallouts btnRight" role="button" href="https://stage-wwwtest.ncgtp.com/live/Pages/default.aspx" >LIVE</a>
                                

                        </div>
                        <div class="callouts" id="callout7">
                            <span id="callout7text" class="calloutText ">
                                Economic Impact<br>& Opportunities</span>
                            <a class="buttonCallouts btnRight" role="button" href="https://stage-wwwtest.ncgtp.com/work/Pages/default.aspx" >WORK</a>

                        </div>
                        <button id="sliderBckBtn2" class="switch" @click="changeWidth" ><i class="glyphicon glyphicon-chevron-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="left" :class="[leftActive ? 'leftNotshowing':'leftShowing']">
                <div class="inner">
                    <div class="content-wrap"> 
                        <div v-if="rightActive" class="overlay">
                            <!-- <h2 class="overlayTextLt">Why NC</h2> -->
                            </div>
                        <!-- <h1 class="knockout-text-one">WHY GTP</h1> -->
                        <transition name="fade-left-content">
                            <div v-if="leftActive"  class="leftCont content-body">
                                
                                <h2 class="heroText">Putting the World Within Your Reach
                                    </h2>
                                    <h3 class="heroText3">A world-class, 2,500  acre industrial & business park.</h3>
                                    <div>
                                        <a class="btn btn-primary btn-lg btn-hero btn-md" href="https://stage-wwwtest.ncgtp.com/grow/Pages/default.aspx" role="button">Grow With Us</a>
                                    </div>
                                    <div>
                                        <a class="btn btn-primary btn-lg btn-md btn-hero" href="https://stage-wwwtest.ncgtp.com/contact/Pages/default.aspx" role="button">Contact</a>
                                    </div>
                            </div>
                        </transition>
                    </div>
                    <transition >
                        <div >
                            <video class="split" src="../assets/vids/left.mp4" poster="../assets/img/hero-bkgd.jpg" autoplay loop muted></video>
                        </div>
                    </transition>
                </div>
            </div>
            <div class="right " :class="[rightActive ? 'rightNotshowing':'rightShowing']">
                
                    <div class="inner ">
                        
                        <!-- <h1 class="knockout-text-two">WHY NC</h1> -->
                        <div class="">
                            <div class="rounded">
                            <div v-if="leftActive" class="overlay"></div>
                                
                                    
                                        <video  class="video split rounded" autoplay="autoplay" loop="loop" muted="muted" preload="preload" src="../assets/vids/right.mp4" >
                                        </video>
                                   
                        
                                        
                                
                            </div>
                        </div>
                       
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
                
            

            
            
            

                
            
        </div><!--/end vid wrapper -->
        <div class="hidden-md-up">
            <div id="carouselExampleIndicators" class="carousel slide" data-interval="false" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active itm1">
                        
                        <div class="carousel-caption d-md-block">
                            <h3 class="heroTextMobile">Putting the World Within Your Reach</h3>
                            <p class="heroText3Mobile">A world-class, 2,500  acre industrial & business park.</p>
                            <div>
                                <a class="btn btn-primary btn-lg btn-hero btn-md" href="#" role="button">Grow With Us</a>
                            </div>
                            <div>
                                <a class="btn btn-primary btn-lg btn-md btn-hero" href="#" role="button">Contact</a>
                             </div>
                        </div>
                    </div>
                    <div class="carousel-item itm2">
                        
                        <div class="carousel-caption d-md-block">
                            <h3 class="heroTextMobile">North Carolina</h3>
                            <p class="heroText3Mobile">where the living is easy.</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div><!--/end pic wrapper-->
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
#masked{

  /* -webkit-mask-image: radial-gradient(ellipse 85% 100% at 90% 60%, black 90%, transparent 60%);
  mask-image: radial-gradient(ellipse 85% 100% at 90% 60%, black 90%, transparent 60%); */
/* -webkit-mask-image:url('../assets/img/test.png');
-webkit-mask-repeat:no-repeat;
-webkit-mask-position:center;
-webkit-mask-position-y:180px;
mask-image:url('../assets/img/test.png');
mask-repeat:no-repeat;
mask-position:center;
mask-position-y:180px; */
/* -webkit-clip-path:circle(80% at 90% 95%);
clip-path: circle(80% at 90% 95%); */
clip-path:url("#mask");
-webkit-clip-path: url("#mask");
position: relative;
}
.bordered{
    /* background-color:white;
    -webkit-clip-path:circle(92% at 97% 100%);
    clip-path: circle(92% at 97% 100%);
    height: 110%;
    position: relative; */
}
.rounded{
    border-top-left-radius: 120% 220%;
    border-bottom-left-radius: 30% 70%;
    border: white solid 10px;
}
.video{
    position: relative;
    min-height: auto;
    min-width: auto;
    width: auto;
}
 .overlay {
    /* height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2; */
    /* background:#337ab7; */
    /* background:rgb(196, 196, 196);
    opacity: 0.6;    */
   
}
h2.overlayTextLt{
    font-size: 10em;
    line-height: 90%;
    font-weight: bold;
    text-align: right;
    width: 45%;
    position: relative;
    top: 10%;
    right:-5%;
    margin: 0 auto;
    
}
h2.overlayTextRt{
    font-size: 10em;
    line-height: 90%;
    font-weight: bold;
    text-align: left;
    width: 40%;
    position: relative;
    top: 50%;
    left:-10%;
    margin: 0 auto;
    
}
/* .knockout-text-one{
    color:white;
    font-family: 'Montserrat-Bold', sans-serif;
    font-weight: bold;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size:100vh;
    text-align: center;
} */
 .itm1 {
    background: url(../assets/img/hero-bkgd.jpg) no-repeat center center fixed;
}
 .itm2 {
    background: url(../assets/img/NC-img.jpg) no-repeat center center fixed;
}

.carousel-item {
    width: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    height: 100vh;
}
.heroText3Mobile {
    font-size: 18px;
    line-height: 110%;
    color:#337ab7;
    text-shadow:1px 0 0;
    font-weight: normal;
}
.heroTextMobile {
    font-size: 22px;
    color:#337ab7;
    text-shadow: 1px 0 0;
    font-weight: bold;
}
.cap-mobile {
    width: 80%;
    text-align: center;
    left: 7%;
}

a.btn-mobile {
    margin-right: 10px;
    font-size: 12px;
}
.carousel-indicators{
    position:absolute;
    bottom: 20%;
}
.carousel-caption{
    position:absolute;
    top:30%;
}
/*test*/
.split{
    top:50%;
    left:50%;
    position: fixed;
    min-height:100%;
    min-width:100%;
    width:auto;
    height: auto;
    -webkit-transform: translateY(-50%) translateX(-50%);
    transform: translateX(-50%) translateY(-50%);
    background-size:cover;
}
.left .inner {
  margin-left: 10px;
}
.left .inner  img{
  
  width: 100%;
}
.right .inner {
  /* margin-left: -9%; */
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
  width: 110%;
  height: 110%;
  top: 0;
  transform: skewX(-8deg);
  overflow: hidden;
  position: absolute;
}
#controllers{
    z-index: 1000;
    width:10px;
    
}

.controller {
    position: absolute;
    height: 100%;
    display: block;
    top: 0;
    z-index: 10;
    /* background-color: #ffffff; */
    width:250px;
    transform: skewX(3deg);
    
}
.controllerImg {

    /* height: 100vh;
    display: block;
    top: 0;
    z-index: 20;
    width:100px;*/
    /* background-image: url("../assets/img/white-border.svg") ;  */
}
.calloutContainer{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
}
.controlLeft{
    right:-5%;
    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
}
.controlRight{
    right:68%;
    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
}

button{
    display: block;
}
.switch{
     border: none;
    background-color: #FFC107;
    color: #fff;
    border-radius: 8px;
    font-size: 2em;
    padding: 15px;
    /* transform: skewX(8deg); */
    width: 75px;
}

#sliderBckBtn {
    position: relative;
    z-index: 100;
    right: 110px;
    padding: 0 10px;
    margin-top: 50px;
}
#sliderBckBtn2 {
    position: relative;
    z-index: 100;
    right: -15px;
    padding: 0 10px;
    margin-top: 50px;
}

.callouts{
    height: 100px;
    margin:20px;
}
#callout1{
    position: relative;
    right: -10px;
}
#callout1:hover >span{
        background:url(../assets/img/icon-grow-white.png) no-repeat left 10px center;
    display: block;
    background-color: #0167B8;
}
#callout5:hover >span{
        background:url(../assets/img/icon-grow-white.png) no-repeat right 10px center;
    display: block;
    background-color: #0167B8;
}
#callout2:hover >span{
        background:url(../assets/img/icon-live-white.png) no-repeat left 10px center;
    display: block;
    background-color: #0167B8;
}
#callout6:hover >span{
        background:url(../assets/img/icon-live-white.png) no-repeat right 10px center;
    display: block;
    background-color: #0167B8;
}
#callout3:hover >span{
        background:url(../assets/img/icon-work-white.png) no-repeat left 10px center;
    display: block;
    background-color: #0167B8;
}
#callout7:hover >span{
        background:url(../assets/img/icon-work-white.png) no-repeat right 10px center;
    display: block;
    background-color: #0167B8;
}

#callout2{
    position: relative;
    right: 50px;
}
#callout3{
    position: relative;
    right: 100px;
}
#callout4{
    position: relative;
    right: 40px;
}
#callout5{
    position: relative;
    right: -140px;

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
    margin-top: 20px;
    margin-left: 22px;
    padding: 10px;
    /* height: 60px; */
    line-height: 110%;
    
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
    right: -75px;
}
#callout7{
    position: relative;
    right: -20px;
}
#callout8{
    position: relative;
    right: 35px;
}

.buttonCallouts {
    background-color: #008EFF;
    border: none;
    color: white;
    text-align: center;
    padding-top: 35%;
    text-decoration: none;
    margin: 4px 2px;
    border-radius: 50%;
    width:90px;
    height: 90px;
    /* float: left; */
    font-family: 'Montserrat-LightItalic', sans-serif;
    font-weight:ligher;
    font-size: 20px;
    transform: skewX(-2deg);
}
.buttonCallouts:hover {
    background-color: #0167B8;
    width:100px;
    height: 100px;
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
    left: -65%;
  -webkit-transition: all 200ms cubic-bezier(0.47, 0, 0.745, 0.715);
    transition: all 200ms cubic-bezier(0.47, 0, 0.745, 0.715);
}
.leftNotshowing{
    left: -5%;

}
.right {
  position: absolute;
}
.rightShowing {
  position: absolute;
  right: -90%;
  
  -webkit-transition: all 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
    transition: all 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
}
.rightNotshowing {
  position: absolute;
    right:-27%;

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
font-family: 'Montserrat-Bold', sans-serif;
font-size: 40px;
font-weight:bold;
color: #FFFFFF;
text-shadow: 0 2px 0 #1976D2;
padding-bottom: 10px;
-webkit-text-stroke:1px #1976d2;
} 
h3.heroText3{
font-family: 'Montserrat-LightItalic',sans-serif;
font-size: 30px;
font-weight:LightItalic;
color: #FFFFFF;
text-shadow:0 1px 0 #1976d2;
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
   top: 30%;
}
.leftCont {
    left: 15%;
    position: absolute;
    width: 40%;
    top:30%;
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
.overlay-right-content-enter,
.overlay-right-content-leave-to {
  opacity: 0.5;
}
.overlay-right-content-enter-active,
.overlay-right-content-leave-active {
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
.overlay-left-content-enter,
.overlay-left-content-leave-to {
  opacity: 0.5;
}
.overlay-left-content-enter-active,
.overlay-left-content-leave-active {
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

