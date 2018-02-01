<template>
  <!-- Second Parallax Section -->
    <div class="jumbotron paral-sm paralsec2" id="why">
        <div class="row justify-content-center" id="whyCont">
            <h2 class="display-3 sectionTitle-dark">why global transpark</h2>
        </div>
    <app-statcards></app-statcards>
    <!-- <app-reasons  ></app-reasons> -->

        
    </div>
</template>
<script>
import statcards from './statcards.vue';
import reasons from './reasons.vue';
export default {
    components:{
        'app-statcards':statcards,
        'app-reasons':reasons
    },
    data(){
        return{
            items:[]
        }
    }

  
}
</script>
<style scoped>
.paralsec2 {
background-image: url("../assets/img/why-bkgd.jpg");
}
h2.sectionTitle-dark{
opacity: 0.7;
font-family: 'Montserrat-Bold', sans-serif;
font-size: 48px;
font-weight:bold;
color: #212121;
text-transform: uppercase;
text-align: center;
margin-top: 50px;
margin-bottom: 50px;
}

</style>
