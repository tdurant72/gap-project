<template>
    <div class="container">
        <div class="row  justify-content-center stats">
            <div class="col-md-3 col-lg-4 col-sm-12">
                
                    <div>
                        <p class="calc"><span class="counter">5,775</span></p>
                        <p class="whyText">Acres of Environmentally Permitted Land</p>
                    </div>
                
            </div>
            <div class="col-md-3 col-lg-4 col-sm-12">
               
                        <div>
                            <p class="calc"><span class="counter">450,000</span>+</p>
                            <p class="whyText">Regional Workforce</p>
                        </div>
                
            </div>
            <div class="col-md-3 col-lg-4 col-sm-12">
                
                        <div>
                            <p class="calc"><span class="counter">33,000</span></p>
                            <p class="whyText">Square-Foot Composite Training Center</p>
                        </div>
                
            </div>
        </div>
        <div class="row  justify-content-center stats">
            <div class="col-md-3 col-lg-4 col-sm-12">
                
                    <div>
                        <p class="calc"><span >#1</span></p>
                        <p class="whyText">Best State for Business</p>
                        <p class="whyText"><i>(Forbes 2017)</i></p>
                    </div>
                
            </div>
            <div class="col-md-3 col-lg-4 col-sm-12">
               
                        <div>
                            <p class="calc"><span >#2</span></p>
                            <p class="whyText">Business Climate Ranking</p>
                            <p class="whyText"><i>(Site Selection 2016)</i></p>
                        </div>
                
            </div>
            <div class="col-md-3 col-lg-4 col-sm-12">
                
                        <div>
                            <p class="calc"><span >3%</span></p>
                            <p class="whyText">Corporate Income Tax Rate, Lowest in the U.S.</p>
                            <p class="whyText"><i>(Tax Foundation 2017)</i></p>
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
font-size: 32px;
font-weight: bold;
color: #1976D2;
text-align: center;
display:block;
line-height: 120%;
}
.whyText{
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    text-align: center;
}

</style>
