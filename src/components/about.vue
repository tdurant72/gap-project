<template>
  <!-- Third Parallax Section -->
<div class="jumbotron paral-sm paralsec3">
    <div class="row container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
        <div class="row" >
            <h2 class="sectionTitle-light col-lg-8">THE TRANSPARK</h2>
            <div class="card col-lg-8 col-lg-offset-2" >
            <p class="aboutText">A multi-modal industrial park and airport strategically located on the east coast of the United States to support the manufacturing and logistics needs of the aviation, aerospace, defense, emergency response and advanced materials industries. </p>
            </div>
            <div class="col-lg-2 col-lg-offset-8 btn-push">
                <p class="lead">
                <a class="btn btn-cta btn-lg btn-md" href="themes.html" role="button">Learn More</a>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.paralsec3 {
background-image: url("../assets/img/about-bkgd.jpg");
}
h2.sectionTitle-light{
opacity: 0.7;
font-family: Montserrat-Bold;
font-size: 60px;
color: #FFFFFF;
padding-left: 10%;
}

p.aboutText{
font-family: Lato-Light;
font-size: 16px;
color: #212121;
line-height: 125%;
padding-top: 50px;
padding-bottom: 50px;
text-align: center;
}
.card{
    /* card: */
opacity: 0.90;
background: #FFFFFF;
border: 1px solid #BDBDBD;
/* max-width: 960px; */
margin-top: -25px;
}

a.btn-cta{
margin-top: 20px;
float: right;
}
.btn-push{
    padding-right: 0;
}
</style>