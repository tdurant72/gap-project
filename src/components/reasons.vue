<template>
    <div class="container" >
    <div class="row " data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
        <div  class="col-md-4 col-lg-4 col-sm-12 ">
            <div class="text-center res-card">
                <li><span aria-hidden="false" data-icon="&#xe98b;" class="icon-Increasing-Chart2" id="growIconRC"></span></li>
                
                    <div>
                        <h5 class="reasonText">How & why to grow your company at NC Global TransPark.</h5>
                    </div>
                    <div>
                        <a class="btn btn-primary btn-lg btn-md why-btn" href="#grow" role="button">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-lg-4 col-sm-12 " >
            <div class="text-center res-card">
                <img :src="item.img" class="card-img-top">
                
                    <div>
                        <h5 class="reasonText">Experience the quality of life we have to offer.</h5>
                    </div>
                    <div>
                        <a class="btn btn-primary btn-lg btn-md why-btn" href="#live" role="button">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
        <div  class="col-md-4 col-lg-4 col-sm-12 " ">
            <div class="text-center res-card">
                <img :src="item.img" class="card-img-top">
                
                    <div>
                        <h5 class="reasonText">A customizable workforce with state of the art training.</h5>
                    </div>
                    <div>
                        <a class="btn btn-primary btn-lg btn-md why-btn" href="#work" role="button">Learn More</a>
                    </div>
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
            {name: 'Grow', img: require('../assets/img/grow-oval.png'), desc: 'How & why to grow your company at NC Global TransPark.', link:'#grow'},
            {name: 'Live', img: require('../assets/img/live-oval.png'), desc: 'Experience the quality of life we have to offer.', link:'#live'},
            {name: 'Work', img: require ('../assets/img/work-oval.png'), desc: 'A customizable workforce with state of the art training.', link:'#work'}
            ]
        }
  }
}
</script>
<style scoped>
.row{
    padding-top: 5%;
    max-width: 960px;
    margin: 0 auto;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    display: block;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
      width: 175px;
    height: auto;
    margin: auto;
    padding-bottom: 20px;
} 

#growIconRC{
    font-size:50px;
}
.card{
    position: relative;
    border: none;
    background-color: none !important;
}

.col-centered{
    display: inline-block;
    float: none;
    margin-right: -4px;
}
.item{
    display: table;
}
.content{
    display: table-cell;
    vertical-align: middle;
}
h5.reasonText{
font-family: 'Lato-Light', sans-serif;
font-size: 14px;
font-weight:Light;
color: #202020;
padding-bottom: 20px;
}
.res-card{
    width: 200px;
    position: relative;
    border: none;
    height:325px;
    margin: 10px
}
.why-btn{
    bottom:0; left:30px; position:absolute;
}
.btn-primary{
    /* primary*/
background: #2196F3;
/* border: 1px solid #1976D2;
box-shadow: 0 2px 0 0 #1976D2, inset 0 2px 0 0 #BBDEFB; */
}
</style>
