<template>
  <div class="container">
    <div class="row  no-gutters center" id="stats">
        
        <div class="col-md-3 col-lg-2 col-sm-12 no-gutters col-lg-offset-2">
            <div class="card stat-card"  >
                    <div class="">
                        <h4 class="card-title top reasonCardTitles">Shovel Ready</h4>
                    <!-- <div>
                        <h5 class="reasonCardBody">Acres</h5>
                    </div> -->
                    <div>
                        <p class="calc">Acres<br><span class="counter">900</span></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-3 col-lg-2 col-sm-12 no-gutters">
            <div class="card stat-card"  >
                    <div class="">
                        <h4 class="card-title top reasonCardTitles">Regional</h4>
                    <!-- <div>
                        <h5 class="reasonCardBody">Workforce</h5>
                    </div> -->
                    <div>
                        <p class="calc">Workforce<br/><span class="counter">500000</span></p>
                    </div>
                </div>
            </div>
        </div>

       <div class="col-md-3 col-lg-2 col-sm-12 no-gutters">
            <div class="card stat-card"  >
                    <div class="">
                        <h4 class="card-title top reasonCardTitles">Lower Housing Cost</h4>
                    <!-- <div>
                        <h5 class="reasonCardBody">To Nat Ave</h5>
                    </div> -->
                    <div>
                        <p class="calc"><span class="counter">81</span>%<br/>To Nat Ave</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-3 col-lg-2 col-sm-12 no-gutters">
            <div class="card stat-card"  >
                    <div class="">
                        <h4 class="card-title top reasonCardTitles">Miles of Sandy Beach</h4>
                    </div>
                    <div>
                        <p class="calc"><span class="counter">65</span></p>
                    </div>
            </div>
        </div>

    </div> 

</div>
</template>
<script>



// import ICountUp from 'vue-countup-v2';
  export default {
    name: 'viewCount',

    data() {
      return {

      };
    }
  };
</script>
<style scoped>
.card{
    border: 2px solid #1976d2;
}

.stat-card{
    height: 160px;
    background-color: #ffffff;
}
.top {
  top: 0;
  background: rgba(33, 150, 243, 1.0);
  padding: 0.5em;
  position: absolute;
 height:25%;
  margin: 0 auto;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
text-align: center;
}
h4.reasonCardTitles{
font-family: 'Lato-Bold', sans-serif;
font-size: 18px;
font-weight:Bold;
color: #FFFFFF;
}

h5.reasonCardBody{
position: absolute;
bottom: 10%;
  padding: 0.5em;
  position: absolute;
  text-align: left;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
text-align: center;
font-family: Montserrat-Bold;
font-size: 36px;
color: #1976D2;
}

.calc{
 bottom: 15%;
  
  position: absolute;
  text-align: left;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
font-family: Montserrat-Bold;
font-size: 32px;
color: #1976D2;
text-align: center;
display:block;
line-height: 110%;
}
.xtra{
 bottom: 0.5%;
  padding-top: 0.5em;
  padding-left: 2em;
  padding-right: 0em;
  padding-bottom: 0;
  position: absolute;
  text-align: right;
  
  width: 100%;
  overflow: hidden;
font-family: Montserrat-Bold;
font-size: 24px;
color: #212121;
text-align: center;
display:block;
}
.col-centered{
    float: none;
}
.no-gutter.row{
    margin-left: 0;
    margin-right: 0;
}
.no-gutters{
    padding-left: 0;
    padding-right: 0;
}
.no-gutter>[class^="col-"]{
    padding-left: 0;
    padding-right: 0;
}
</style>
