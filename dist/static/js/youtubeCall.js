// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
  
//   var player1;
//   var player2;
//       function onYouTubeIframeAPIReady() {
//           player1 = new YT.Player('video', {
//               videoId: 'iiV5udOKPc4',
//               host: 'https://www.youtube.com',
//               playerVars: {
//                   mute: 1,
//                   loop: 1,
//                   controls: 0,
//                   showinfo: 0,
//                   autohide: 0,
//                   enablejsapi: 1,
//                   modestbranding: 1,
//                   vq: 'hd1080'
//               }
//           });
//           player2 = new YT.Player('player2', {
//             videoId: 'm60jj_-8Z6o',
//             playerVars: {
//                 mute: 1,
//                 loop: 1,
//                 controls: 0,
//                 showinfo: 0,
//                 autohide: 0,
//                 enablejsapi: 1,
//                 modestbranding: 1,
//                 vq: 'hd1080'
//             },
//             allowfullscreen: 1,
//             events: {
//                 'onReady': onPlayerReady, 
//                 'onStateChange': onPlayerStateChange   
//             }
//         });  
//       }
 
      
//       function onPlayerReady() {
//         player.mute();  
//         // player.playVide();
//         alert ("player ready"); 
//         $('#_buffering-background1').hide();
//         }
        
        
//         function onPlayerStateChange(event) {
//         alert ("something happened"); 
//         }

var tag = document.createElement('script');

tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player1;
var player2;
function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('ytplayer1', {
        events: {
            'onReady': onPlayerReady1,
            'onStateChange': onPlayerStateChange1
        }
    })
    player2 = new YT.Player('ytplayer2', {
        events: {
            'onReady': onPlayerReady2,
            'onStateChange': onPlayerStateChange2
        }
    })
}

function onPlayerReady1() {
    player1.playVideo();
    player1.mute();
} 
function onPlayerStateChange1(el){
    if(el.data === 1) {
        $('#_buffering-background1').fadeOut();
    }else{
        $('#_buffering-background1').fadeIn(300);
    }
    console.log('vid1 playing');
}
function onPlayerReady2() {
    player2.playVideo();
    player2.mute();
} 
function onPlayerStateChange2(el){
    if(el.data === 1) {
        $('#_buffering-background2').fadeOut();
    }else{
        $('#_buffering-background2').fadeIn(300);
    }
    console.log('vid2 playing');
}