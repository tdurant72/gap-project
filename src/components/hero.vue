<template>
    <div class="jumbotron paral paralsec" id="hero">
        <div class="wrapper hidden-sm-down">

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
                                    <h3 class="heroText3">A world-class, 2,500-acre multimodal, industrial & business park.</h3>
                                    <div>
                                        <a class="btn btn-secondary btn-lg btn-hero btn-md" href="../grow/Pages/default.aspx" role="button">Grow With Us</a>
                                    </div>
                                    <div>
                                        <a class="btn btn-primary btn-lg btn-md btn-hero" href="../contact/Pages/default.aspx" role="button">Contact</a>
                                    </div>
                            </div>
                        </transition>
                    </div>
                    <transition >
                        <div v-if="isSafari">
                            <!-- <div id="video-overlay1" class="split" style="background-image:url(https://connect.ncdot.gov/data/forms/ncgtp/SitePages/static/img/video-overlay1.png);">></div>-->

                            <!-- <div id="video" class="split"></div>  -->
                            <div id="_buffering-background1" class="ytOverlay"></div>
                            <!-- <video  id="leftVid" class="split" loop="loop" autoplay="autoplay" muted="muted" preload="preload" src="https://connect.ncdot.gov/data/forms/ncgtp/SitePages/static/media/left.1e0211a.mp4"   /> -->
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe id="ytplayer1" class="embed-responsive-item float-left" src="https://www.youtube.com/embed/ZCg6TIt1wj4?rel=0&loop=1&playlist=iiV5udOKPc4&controls=0&showinfo=0&mute=1&enablejsapi=1" frameborder="0" allow="encrypted-media" allowfullscreen poster="../assets/img/video-overlay1.png"  ></iframe>
                            </div>
                        </div>
                        <div v-else class="embed-responsive embed-responsive-16by9">
                            <video  id="leftVid" class="responsive-item float-left" loop="loop" autoplay="autoplay" muted="muted" preload="preload" src="../assets/vids/left.mp4"   />
                        </div>
                    </transition>
                </div><!--end of left inner-->
            </div>
            <div class="right " :class="[rightActive ? 'rightNotshowing':'rightShowing']">

                    <div class="inner ">
                        <div  class="content-wrap">
                            <transition name="fade-right-content" >
                            <div v-if="rightActive" class="rightCont content-body">
                                <h2 class="heroText">North Carolina
                                    </h2>
                                    <h3 class="heroText3">where the living is easy.</h3>
                            </div>
                            </transition>
                        </div>
                        <!-- <div v-if="leftActive" class="overlay"></div> -->

                            <!-- <video  id="rightVid" class="video rounded" autoplay="autoplay" loop="loop" muted="muted" preload="preload" playsinline src="https://connect.ncdot.gov/data/forms/ncgtp/SitePages/static/media/right.60bfb96.mp4"   >
                            </video> -->
                            <div v-if="isSafari" id="rtVidCont" class="swoosh ">
                                <div id="_buffering-background2" class="ytOverlay "></div>
                                <div class="embed-responsive embed-responsive-16by9 rtAdjust">
                                    <iframe id="ytplayer2" class="embed-responsive-item float-right" src="https://www.youtube.com/embed/V93YRVOK8PO?rel=0&loop=1&playlist=m60jj_-8Z6o&controls=0&showinfo=0&mute=1&enablejsapi=1" frameborder="0" allow="encrypted-media" allowfullscreen poster="../assets/img/video-overlay2.png"  ></iframe>
                                </div>
                            </div>
                            <div v-else class="swoosh embed-responsive embed-responsive-16by9 " id="rtVidContEb">
                                <video  id="rightVid" class="video responsive-item float-right" autoplay="autoplay" loop="loop" muted="muted" preload="preload" playsinline src="../assets/vids/right.mp4"   ></video>
                            <!-- <div id="video-overlay2" class="split" style="background-image:url(https://connect.ncdot.gov/data/forms/ncgtp/SitePages/static/img/NC-img.a241866.jpg);">></div>
                            <div id="player2" class="split video"></div> -->
                            </div>
                    </div><!--end of righ inner-->
            </div>

            <div id="controllers"  >
                    <div v-if="leftActive" class="controller controllerImg" :class="[leftActive ? 'controlLeft':'controlRight']">
                        <div class="calloutContainer">
                            <div class="callouts"  id="callout1">
                                <a class="buttonCallouts btnLeft" role="button" href="../grow/Pages/default.aspx"   >GROW</a>

                                <span id="callout1text" class="calloutText ctLeft">Expand Your Business</span>

                            </div>
                            <div class="callouts"  id="callout2">
                                <span id="callout2text" class="calloutText ctLeft">Carolina Quality of Life</span>
                                <a class="buttonCallouts btnLeft" role="button" href="../live/Pages/default.aspx" >LIVE</a>
                            </div>
                            <div class="callouts"  id="callout3">
                                <span id="callout3text" class="calloutText  ctLeft">Economic Impact<br>& Opportunities</span>
                                <a class="buttonCallouts btnLeft" role="button" href="../work/Pages/default.aspx" >WORK</a>
                            </div>
                            <button id="sliderBckBtn"  class="switch" @click="changeWidth" ><i class="glyphicon glyphicon-chevron-left"></i></button>
                        </div>
                    </div>

                    <div v-if="rightActive" class="controller controllerImg" :class="[rightActive ? 'controlRight':'controlLeft']">
                        <div class="calloutContainer">
                            <div class="callouts" id="callout5">
                                <span id="callout5text" class="calloutText rtLeft">Expand Your Business</span>
                                <a  class="buttonCallouts btnRight" role="button" href="../grow/Pages/default.aspx" >GROW</a>
                            </div>
                            <div class="callouts"  id="callout6">
                                <span id="callout6text" class="calloutText rtLeft">
                                    Our quality of life</span>
                                <a  class="buttonCallouts btnRight" role="button" href="../live/Pages/default.aspx" >LIVE</a>


                            </div>
                            <div class="callouts" id="callout7">
                                <span id="callout7text" class="calloutText rtLeft">
                                    Economic Impact<br>& Opportunities</span>
                                <a class="buttonCallouts btnRight" role="button" href="../work/Pages/default.aspx" >WORK</a>

                            </div>
                            <button id="sliderBckBtn2" class="switch" @click="changeWidth" ><i class="glyphicon glyphicon-chevron-right"></i></button>
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
                                <a class="btn btn-secondary btn-lg btn-hero btn-md" href="../grow/Pages/default.aspx" role="button">Grow With Us</a>
                            </div>
                            <div>
                                <a class="btn btn-primary btn-lg btn-md btn-hero" href="../contact/Pages/default.aspx" role="button">Contact</a>
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
      notSafari:true,
      isSafari:false,
      isOnTop: true,
      delta: delta,
      }
  },
  mounted(){
      this.checkBrowser()

  },
  methods:{
      changeWidth(){
          this.rightActive = !this.rightActive;
          this.leftActive = !this.leftActive;
      },
      changeVidSource(){
          this.isSafari = !this.isSafari;
          this.notSafari = !notSafari;
      },
    checkBrowser(){
        if (navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent && !navigator.userAgent.match('CriOS') ){
              console.log('Its Safari');
              this.isSafari = true;
          }else{
              console.log('not safari');
          }
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
vidAlt{
    background-size: cover;
}
.swoosh{
border-top-left-radius:93% 220%;
border-bottom-left-radius:30% 70%;
border:1px solid #fff;
height:100%;
-webkit-box-shadow: -40px 15px 0px 1px rgba(255, 255, 255, 1);
-moz-box-shadow:    -40px 15px 0px 1px rgba(255, 255, 255, 1);
box-shadow:         -40px 15px 0px 1px rgba(255, 255, 255, 1);
position: relative;
overflow: hidden;
margin-left:30px;
}
.rounded{
border-top-left-radius:120% 220%;
border-bottom-left-radius:30% 70%;
height:100vh;

overflow: hidden;
}


#_buffering-background1 {
		position: absolute;
        min-width: 100%;
        min-height: 100%;
        height: 100%;
        width: 100%;
		top: 65px;
        left: -2%;
		/* bottom: 0; */
		background:url(../assets/img/video-overlay1.png) no-repeat;
		/* z-index: 1; */
        padding: 0;
        background-size:cover;
        z-index: 1;

	}
#_buffering-background2 {
        margin-left:-105px;
		position: absolute;
		height: 100%;
        width: 100%;
		top: 0;
		bottom: 0;
		background:url(../assets/img/video-overlay2.png) no-repeat;
		z-index: 1;
        background-size: cover;
	}
#rtVidCont{
    /* height: 100vh;
    width: 100vw; */
    height: 100%;
    width: 100%;
    margin-left: 30px;
    z-index: 10;
}
#rtVidContEb{
    z-index: 10;
}
.ytOverlay {
/* opacity:1; */
transition: opacity 1s;
}

.ytOverlay.fade {
opacity:0;
}

#player2{
border-top-left-radius:120% 220%;
border-bottom-left-radius:30% 70%;
border:1px solid #fff;
height:100%;
-webkit-box-shadow: -15px 5px 0px 1px rgba(255, 255, 255, 1);
-moz-box-shadow:    -15px 5px 0px 1px rgba(255, 255, 255, 1);
box-shadow:         -15px 5px 0px 1px rgba(255, 255, 255, 1);
    position: relative;
    min-height: auto;
    min-width: auto;
    width: auto;

}
  /* .overlay {
   height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2; */
    /* background:#337ab7; */
    /* background:rgb(196, 196, 196);
    opacity: 0.6;

}*/
h2.overlayTextLt{
    font-size: 10rem;
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
    font-size: 10rem;
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

 #ytplayer1 {
    /* background: url(../assets/img/hero-bkgd.jpg) no-repeat center center fixed; */
    position: absolute;
    /* top:50px; */
    left: 0;
    min-height: 100%;
    min-width: 100%;
    height: 115%;
    width: 115%;
    top:-42px;
}
 #ytplayer2 {
    /* background: url(../assets/img/NC-img.jpg) no-repeat center center fixed; */
    position: absolute;
    top:5px;
    /* right: 8%; */
    /* height: 110vh;
    width: 100vw; */
    height: 100%;
    width: 100%;
    margin-left: -10%;
    /* margin-top: 5px; */
}
.rtAdjust{
    height:100%;
}
.vids{
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
}

.carousel-item {
    width: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    height: 100vh;
}
.heroText3Mobile {
    font-size: 30px;
    line-height: 100%;
    color:#337ab7;
    text-shadow:1px 0 0;
    font-weight: normal;
}
.heroTextMobile {
    font-size: 40px;
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
    font-size: 14px;
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
    /* position: fixed; */
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

.right .inner img {

  width: 100%;
  /* margin-left: -9%; */
}
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #bdbdbd;
}
.left{
  width: 100%;
  height: 100%;
  top: 0;
  /* transform: skewX(-8deg); */
  overflow: hidden;
  position: absolute;
}

.right {
  width: 100%;
  height: 100%;
  top: 0;

  overflow: hidden;
  position: absolute;
}
#controllers{
    /* z-index: 10000; */
    width:10px;
    /* position: absolute; */
}

.controller {
    position: absolute;
    height: 100%;
    display: block;
    top: 0;
    z-index: 500;
    /* background-color: #ffffff; */
    width:10px;
    /* transform: skewX(3deg); */

}

.calloutContainer{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
}
.controlLeft{
    right:24%;
    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
}
.controlRight{
    right:85%;
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
    font-size: 28px;
    padding: 15px;
    /* transform: skewX(8deg); */
    width: 75px;
}

#sliderBckBtn {
    position: relative;
    /* z-index: 100; */
    right: 75%;
    padding: 0 10px;
    margin-top: 50px;
}
#sliderBckBtn2 {
    position: relative;
    /* z-index: 100; */
    right: -40%;
    padding: 0 10px;
    margin-top: 50px;
}

.callouts{
    height: 100px;
    margin:20px;
}
#callout1{
    position: relative;
    right: 40%;
}
#callout1:hover >span{
        /* background:url(../assets/img/icon-grow-white.png) no-repeat left 10px center; */
    display: block;
    background-color: #0167B8;
}
#callout5:hover >span{
        /* background:url(../assets/img/icon-grow-white.png) no-repeat right 10px center; */
    display: block;
    background-color: #0167B8;
}
#callout2:hover >span{
        /* background:url(../assets/img/icon-live-white.png) no-repeat left 10px center; */
    display: block;
    background-color: #0167B8;
}
#callout6:hover >span{
        /* background:url(../assets/img/icon-live-white.png) no-repeat right 10px center; */
    display: block;
    background-color: #0167B8;
}
#callout3:hover >span{
        /* background:url(../assets/img/icon-work-white.png) no-repeat left 10px center; */
    display: block;
    background-color: #0167B8;
}
#callout7:hover >span{
        /* background:url(../assets/img/icon-work-white.png) no-repeat right 10px center; */
    display: block;
    background-color: #0167B8;
}

#callout2{
    position: relative;
    right: 80%;
}
#callout3{
    position: relative;
    right: 100%;
}
#callout4{
    position: relative;
    right: 40px;
}
#callout5{
    position: relative;
    right: -80%;

}
.callouts:hover .calloutText{
    width: 400px;
    opacity: 1;
}
.callouts:hover .ctLeft{
    width: 400px;
    left: -405px;
    opacity: 1;
    transition: all 0.3s ease-out;
}
.callouts:hover .rtLeft{
    margin-left: 85px;
}

.calloutText{
    opacity: 0;
    margin-top: 20px;
    margin-left: 22px;
    padding: 10px;
    /* height: 60px; */
    line-height: 100%;
    z-index: 50;
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
    left:-40px;
}


#callout6{
    position: relative;
    right: -40%;
}
#callout7{
    position: relative;
    right: -20%;
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
    width:100px;
    height: 100px;
    z-index: 60;
    /* float: left; */
    font-family: 'Montserrat-LightItalic', sans-serif;
    font-weight:ligher;
    font-size: 20px;
    /* transform: skewX(-2deg); */
}
.buttonCallouts:hover {
    background-color: #0167B8;
    width:100px;
    height: 100px;
    /* -webkit-transition: all 200ms cubic-bezier(0.47, 0, 0.745, 0.715);
    transition: all 200ms cubic-bezier(0.47, 0, 0.745, 0.715); */
    z-index: 50;
}

#arrowContainer{
    left:50%;
    top:75%;
    position: absolute;
    /* z-index: 1000; */
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
    left: -50%;
  -webkit-transition: all 200ms cubic-bezier(0.47, 0, 0.745, 0.715);
    transition: all 200ms cubic-bezier(0.47, 0, 0.745, 0.715);
}
.leftNotshowing{
    left: -5%;

}
.right {
  position: absolute;
  z-index: 10;
}
.rightShowing {
  position: absolute;
  right: -70%;
  padding-left: 20px;
  -webkit-transition: all 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
    transition: all 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
}
.rightNotshowing {
  position: absolute;
    right:-17%;
    padding-left: 20px;
}
.left .inner{
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  /* transform: skewX(8deg); */
}
.right .inner {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;

}

h2.heroText{
font-family: 'Montserrat-Bold', sans-serif;
font-size: 60px;
font-weight:bold;
color: #FFFFFF;
text-shadow: 0 2px 0 #1976D2;
padding-bottom: 10px;
-webkit-text-stroke:1px #1976d2;
}
h3.heroText3{
font-family: 'Montserrat-LightItalic',sans-serif;
font-size: 40px;
font-weight:200;
color: #FFFFFF;
text-shadow:0 1px 0 #1976d2;

padding-bottom: 20px;
}
.layer .content-body{
    width: 25%;
    position: relative;
    top: 50%;

    /* transform: skewX(8deg); */
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

    float: left;
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
#rightVid{
    background:transparent url('../assets/img/video-overlay2.png') no-repeat 0 0;
   -webkit-background-size:cover;
   -moz-background-size:cover;
   -o-background-size:cover;
   background-size:cover;
   position: absolute;
   width: 100vw;
   margin-left: -10%;
   margin-top:25px;
}
video#leftVid {
    background:transparent url('../assets/img/video-overlay1.png') no-repeat 0 0;
   -webkit-background-size:cover;
   -moz-background-size:cover;
   -o-background-size:cover;
   background-size:cover;
   position: absolute;
   top:0;
   left:0;

   min-height: 100%;
   min-width: 100%;
}

@media (-webkit-video-playable-inline){
    .video img{display: none};
    .video video {display: initial};
}

/* youtube styles */
.ytp-spinner { display:none;}
.player-api {background-color: transparent;}
.player-unavailable {background-color: transparent;}
.html5-video-player {background-color: transparent;}
.ytp-gradient-top {background-image: none;}
.typ-gradient-bottom {background-image: none;}
</style>

