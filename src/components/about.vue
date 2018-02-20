<template>
  <!-- Third Parallax Section -->
<div class="jumbotron paral-sm paralsec3">
    <div class="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
        <div class="row justify-content-center" >
            <h2 class="sectionTitle-light col-lg-8">about us</h2>
        </div>
        <div class="row justify-content-center" >
            <div class="col-md-12 col-lg-10" >
            <p class="aboutText">Our mission is to enhance the economic well-being of North Carolinians by providing multimodal capabilities for global commerce.</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-2 col-lg-4">
                <p class="lead">
                <a class="btn btn-cta btn-lg btn-md" id="aboutBtn" href="../contact/Pages/default.aspx" role="button">Learn More</a>
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
background-image: url("../assets/img/world-map.jpg");
}
h2.sectionTitle-light{
opacity: 0.7;
font-family: 'Montserrat-Bold', sans-serif;
font-size: 60px;
font-weight:bold;
color: #FFFFFF;
text-transform: uppercase;
text-align: center;
}
.lead{
    text-align: center;
}
p.aboutText{
font-family: 'Lato-Light', sans-serif;
font-size: 40px;
font-weight:200;
color: #ffffff;
line-height: 125%;
padding-top: 50px;
padding-bottom: 30px;
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

}
.btn-push{
    padding-right: 0;
}
#aboutBtn{
    background-color: #17b1ff;
    border-radius: 0px;
    margin-top: 0;
}
</style>
