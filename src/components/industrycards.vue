<template>
  <div class="container industrycards">
    <div class="row  no-gutters center">
        <div class="col col-md-3 col-lg-1 col-sm-0"></div>
        <div v-for="item in items" class="col-md-3 col-lg-2 col-sm-12 ">
            <div class="ind-card " data-aos="flip-up" data-aos-duration="600">
                <div class="">
                        <h4 class="top industryCardTitles">{{ item.name }}</h4>
                    </div>
                <img :src="item.img" class="card-img-top img-responsive">
                
                    <p class="lead">
                        <a class="btn btn-primary btn-lg btn-md" href="themes.html" role="button">Learn More</a>
                        </p>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    data:  function(items) {
        return{
            items: [
            {name: 'AEROSPACE & AVIATION', img: require('../assets/img/airplane-icon.png')},
            {name: 'ADVANCED MANUFACTURING', img: require('../assets/img/advanced-icon.png')},
            {name: 'LOGISTICS & EXPORTING', img: require ('../assets/img/ship-icon.png')},
            {name: 'DEFENSE & SECURITY', img: require ('../assets/img/defense-icon.png')},
            {name: 'EMERGENCY RESPONSE', img: require ('../assets/img/truck-icon.png')}
            ]
        }
  }
}
</script>
<style scoped>

h4.industryCardTitles{
font-family: Lato-Bold;
font-size: 16px;
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
      width: 112px;
    height: auto;
    margin: auto;
    padding-bottom: 15px;
} 


.container-card{

background: rgba(255, 255, 255, 90);
border: 1px solid #BDBDBD;
max-width: 960px;
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
    width: 150px;
}

.btn-primary{
background: #2196F3;
/* border: 1px solid #1976D2;
box-shadow: 0 2px 0 0 #1976D2, inset 0 2px 0 0 #BBDEFB; */
border-radius: 10px;
}
a.btn-primary{
font-family: Lato-Light;
font-size: 14px;
color: #FFFFFF;
margin-left: 20px;
}
.industrycards{
    padding-bottom: 50px;
}
</style>
