<template>
  <!-- Third Parallax Section -->
<div class="jumbotron paral paralsec5" >
<div class="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <div class="row">
            <h2 class="sectionTitle-light col-lg-8">site selection</h2>
        </div>
        <div class="row">
            <div class="card col-lg-offset-1 col-lg-10" id="siteCard">
              <div class="row">
                <div class="col-lg-6">
                <img id="map" src="../assets/img/map.jpg" alt="map-icon">
              </div>
                <div class=" col-lg-6">
                    <p class="siteText">Our sites and buildings are fully equipped and ready to go to work. From utility planning to advanced telecommunications connectivity, everything you need is in place so you’ll be up and doing business - with preapproved environmental, we are prepared to break ground on a new facility. </p>
                </div>
              </div>
          </div>
        </div>
        <div class="row">
            <div class="col-lg-2 col-lg-offset-9 btn-push">
                <p class="lead">
                <a class="btn btn-cta btn-lg btn-md " href="themes.html" role="button">Available sites</a>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
 name:'site'
}
</script>
<style scoped>
.paralsec5 {
background-image: url("../assets/img/site-bkgd.jpg");
}
h2.sectionTitle-light{
opacity: 0.7;
font-family: Montserrat-Bold;
font-size: 48px;
color: #FFFFFF;
text-transform: uppercase;
}

#siteCard{
  margin-top:-20px;
  padding: 40px;
  background-color: #fff;
}
p.siteText{
font-family: 'Lato-Light', sans-serif;
font-size: 16px;
font-weight:light;
color: #212121;
padding-top: 30px;
padding-bottom: 50px;
line-height: 24px;
text-align: left;
}
.card{
    /* card: */

background: #FFFFFF;
border: 1px solid #BDBDBD;

margin-top: -20px;
}

p.siteText{
font-family: 'Lato-Light', sans-serif;
font-size: 16px;
font-weight:light;
padding: 0.8em;
line-height: 125%;
color: #212121;
}
a.btn-cta{
margin-top: 20px;
float: right;
}
.btn-push{
    padding-right: 0;
}
</style>