<template>

<!-- Third Parallax Section -->
<div class="jumbotron paral paralsec4" id="industries">
<h2 class="display-3 sectionTitle-dark">INDUSTRIES</h2>

    <transition name="fade">
      <div class="card" id="industryCard" data-aos="fade-up" data-aos-duration="600" >
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <p class="lead industriesText">A multimodal industrial park and airport strategically located on the east coast of the United States to support the manufacturing and logistics needs of the aviation, aerospace, defense, emergency response and advanced materials industries. </p>
              </div>
          </div>
      <app-industrycards></app-industrycards>
      </div>
    </transition>

<!-- <app-statcards></app-statcards> -->


</div>

</template>

<script>
import industrycards from './industrycards.vue';
// import statcards from './statcards.vue';

export default {
   components:{
    'app-industrycards':industrycards
            // 'app-statcards':statcards

},
  data(){
      return{
        demo: 'Transition Me',
        show:false
      }
  }
}
</script>

<style scoped>
.paralsec4{

background-color: #f6f6f6;
}
h2.sectionTitle-dark{
opacity: 0.7;
font-family: 'Montserrat-Bold', sans-serif;
font-weight:bold;
font-size: 50px;
color: #212121;
text-transform: uppercase;
text-align: center;
}

p.industriesText{
font-family: 'Lato-Light', sans-serif;
font-size: 24px;
font-weight:Light;
color: #212121;
letter-spacing: 0;
line-height: 125%;
padding: 2rem;


}
.card{
 opacity: .95;
background: rgba(255, 255, 255, 90);


max-width: 1080px;
margin: 0 auto;

}

.fade-enter-active, .fade-leave-active{
  transition: opacity 2.0s ease-out;
}
.fad-enter, .fade-leave-to{
  opacity: 0;
}

</style>


// font-family: 'Lato', sans-serif;
// font-family: 'Montserrat', sans-serif;
