<template>
  <div class="container-card industrycards">
    <div class="row justify-content-center">
        <div v-for="item in items" class="col-lg" :key="item.name" > <!--fixed width cards means no cols-->
            
                <div class="">
                        <h4 class="top industryCardTitles">{{ item.name }}</h4>
                    </div>
                <img :src="item.img" class="card-img-top">
                </div>
           
        </div>
        <div class="row xtra">
            <div class="col-lg-12">
                <p class="lead">
                        <a class="btn btn-primary btn-lg btn-md" href="#all" role="button">Learn More</a>
                        </p>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    data:  function(items) {
        return{
            items: [
            {name: 'AEROSPACE & AVIATION', img: require('../assets/img/icon-aero.png'),link:'#aerospace'},
            {name: 'ADVANCED MANUFACTURING', img: require('../assets/img/icon-man.png'), link:'#manufacturing'},
            {name: 'LOGISTICS & EXPORTING', img: require ('../assets/img/icon-log.png'), link:'#logistics'},
            {name: 'DEFENSE & SECURITY', img: require ('../assets/img/icon-def.png'), link:'#defense'},
            {name: 'EMERGENCY RESPONSE', img: require ('../assets/img/icon-emer.png'), link:'#emergency'}
            ]
        }
  }
}
</script>
<style scoped>
.xtra{
    margin-top: 40px;
}
h4.industryCardTitles{
font-family: 'Lato-Bold', sans-serif;
font-size: 16px;
font-weight:Bold;
color: #212121;
letter-spacing: -0.28px;
}

.color-overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #2196f3;
    opacity: 0.5;
}

img{
    display: block;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
      width: 80px;
    height: auto;
    margin: auto;
    padding-bottom: 15px;
} 


.container-card{

background: rgba(255, 255, 255, 90);


margin: 0 auto;
margin-top: -40px;

}
.top {
    top: 0;
    padding: 0.5em;
    position: relative;
    height:25%;
    margin: 0 auto;
    width: 100%;
    max-height: 100%;
    overflow: hidden; 
    text-align: center;
}

.ind-card{
    background: #FFFFFF;
    border: 2px solid #BDBDBD;
    position: relative;
    opacity: 1;
    
}

.btn-primary{
background: #2196F3;
/* border: 1px solid #1976D2;
box-shadow: 0 2px 0 0 #1976D2, inset 0 2px 0 0 #BBDEFB; */
border-radius: 10px;
}
a.btn-primary{
font-family: 'Lato-Light', sans-serif;
font-size: 14px;
font-weight:Light;
color: #FFFFFF;
margin-left: 10px;
}
.industrycards{
    padding-bottom: 50px;
}
</style>
