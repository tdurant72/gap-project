var wrapper = $('#wrapper');
var topLayer = $('.top');
var handle = $('.handle');
var skew = 0;
var delta = 0;

if($('.skewed')!=-1){
    skew = 1000;
}
$( "#wrapper" ).mousemove(function( event ) {
  delta = (e.clientX - window.innerWidth/2) *0.5; 
  console.log(delta);
});
document.addEventListener('DOMContentLoaded', function(){
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;

    if(wrapper.className.indexOf('skewed') != -1){
        skew = 990;
    }
    
    wrapper.addEventListener('mousemove', function(){
        delta = (e.clientX - window.innerWidth/2) *0.5; 
        handle.style.left = e.clientX + delta + 'px';

        topLayer.style.width = e.clientX + skew + delta + 'px';
    });
});

