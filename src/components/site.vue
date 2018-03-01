<template>
  <!-- Third Parallax Section -->
<div class="jumbotron paral paralsec5" >
<div class="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <div class="row">
            <h2 class="sectionTitle-light col-lg-10 col-lg-offset-1">site selection</h2>
        </div>
        <div class="row justify-content-center">
            <div class="card col-lg-12" id="siteCard">
                <div class="row">
                    <div class="col-lg-6">
                    <img id="map" src="../assets/img/map-2.jpg" alt="map-icon">
                </div>
                    <div class=" col-lg">
                        <p class="siteText">Our sites and buildings are fully equipped and ready to go to work. From utility planning to advanced telecommunications connectivity, everything you need is in place so you’ll be up and doing business - with preapproved environmental, we are prepared to break ground on a new facility. </p>
                    </div>
                </div>
                <div class="row justify-content-end">
                    <!-- <div class="col-lg-4  col-md-3  col-sm-6 btn-push">
                        <p class="lead">
                        <a class="btn btn-cta btn-lg btn-md " href="../grow/Pages/site-selection.aspx#DataTables_Table_0" role="button">Parcels</a>
                        </p>
                    </div> -->
                    <div class="col-lg-3 col-sm-6  btn-push">
                        <p class="lead">
                        <a class="btn btn-cta btn-lg btn-md " href="../grow/Pages/site-selection.aspx" role="button">View Available Sites</a>
                        </p>
                    </div>
                </div>
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
background-image: url("../assets/img/about-bkgd.jpg");
}
h2.sectionTitle-light{
opacity: 0.7;
font-family: 'Montserrat-Bold', sans-serif;
font-size: 50px;
font-weight:bold;
color: #FFFFFF;
text-transform: uppercase;
text-shadow: 1px 0 #000;
}

#siteCard{
  margin-top:-20px;
  padding: 40px;
  background-color: #fff;
}
p.siteText{
font-family: 'Lato-Light', sans-serif;
font-size: 28px;
font-weight:100;
color: #212121;
padding: 0.8rem;
line-height: 24px;
text-align: left;
line-height: 125%;
}

.card{
    /* card: */

background: #FFFFFF;
border: 1px solid #BDBDBD;

margin-top: -20px;
}


a.btn-cta{
margin-top: 20px;
float: right;
}
.btn-push{
    padding-right: 0;
}
img#map{
    width:100%;
}
</style>
