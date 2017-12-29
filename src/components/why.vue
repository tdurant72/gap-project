<template>
  <!-- Second Parallax Section -->
<div class="jumbotron paral-sm paralsec2" id="why">
<h2 class="display-3 sectionTitle-dark">why global transpark</h2>
<!-- <app-statcards></app-statcards> -->
<app-reasons  ></app-reasons>
<!-- <div class="container">
    <div class="row">
        <div v-for="item in items" class="col-md-3 col-lg-2 col-sm-12">
            <div class="card h-370">
                <img :src="item.img" class="card-img-top">
                <div class="card-body">
                    <div class="card-title">{{ item.name }}</div>
                    <div>
                        <span class="badge badge-pill badge-info">${{ item.price }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> -->

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
font-family: Montserrat-Bold;
font-size: 48px;
color: #212121;
text-transform: uppercase;
text-align: center;
}
</style>
