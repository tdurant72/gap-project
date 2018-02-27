<template>
    <div class="none">
        <div class="row justify-content-center" id="whyCont">
            <h2 class="display-3 sectionTitle-dark col-lg-12">why global transpark</h2>
        </div>
        <div class="row  justify-content-center stats">
            <div class="col-md-6 col-lg col-sm-12">
                    <div>
                        <p class="calc"><span class="counter" data-count="5775">0</span></p>
                        <p class="whyText">Acres of Environmentally Permitted Land</p>
                    </div>
            </div>
            <div class="col-md-6 col-lg col-sm-12">
                        <div>
                            <p class="calc"><span class="counter" data-count="450000">O</span>+</p>
                            <p class="whyText">Regional Workforce</p>
                        </div>
            </div>
            <div class="col-md-6 col-lg col-sm-12">
                        <div>
                            <p class="calc"><span class="counter" data-count="33000">0</span></p>
                            <p class="whyText">Square-Foot Composite Training Center</p>
                        </div>
            </div>
            <div class="col-md-6 col-lg col-sm-12">
                        <div>
                            <p class="calc"><span class="counter" data-count="11500">0</span></p>
                            <p class="whyText">Square-Foot Runway</p>
                        </div>
            </div>

        </div>
        <div class="row  justify-content-center stats">
            <div class="col-md-6 col-lg col-sm-12">
                    <div>
                        <p class="calc"><span >#1</span></p>
                        <p class="whyText">Best State for Business</p>
                        <p class="whyText"><i>(Forbes 2017)</i></p>
                    </div>

            </div>

            <div class="col-md-6 col-lg col-sm-12">
                        <div>
                            <p class="calc"><span >#2</span></p>
                            <p class="whyText">Business Climate Ranking</p>
                            <p class="whyText"><i>(Site Selection 2016)</i></p>
                        </div>
            </div>
            <div class="col-md-6 col-lg col-sm-12">
                        <div>
                            <p class="calc"><span >3%</span></p>
                            <p class="whyText">Corporate Income Tax Rate, Lowest in the U.S.</p>
                            <p class="whyText"><i>(Tax Foundation 2017)</i></p>
                        </div>
            </div>
            <div class="col-md-6 col-lg col-sm-12">
                        <div>
                            <p class="calc"><span >#4</span></p>
                            <p class="whyText">Aerospace Manufacturing Attractiveness</p>
                            <p class="whyText"><i>(2016 PricewaterhouseCoopers)</i></p>
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
h2.sectionTitle-dark{
opacity: 0.7;
font-family: 'Montserrat-Bold', sans-serif;
font-size: 60px;
font-weight:bold;
color: #212121;
text-transform: uppercase;
text-align: center;
margin-top: 50px;
margin-bottom: 50px;
}
.stats{
    margin-top: 20px;
}
.calc{
 bottom: 15%;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
font-family: 'Montserrat-Bold',sans-serif;
font-size: 40px;
font-weight: bold;
color: #1976D2;
text-align: center;
display:block;
line-height: 120%;
}
.whyText{
    font-size: 20px;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    text-align: center;
}

</style>
