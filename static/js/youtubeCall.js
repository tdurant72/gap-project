  var player1;
  var player2;
      function onYouTubeIframeAPIReady() {
          player1 = new YT.Player('player1', {
              videoId: 'iiV5udOKPc4',
              playerVars: {
                  mute: 1,
                  autoplay: 1,
                  loop: 1,
                  controls: 0,
                  showinfo: 0,
                  autohide: 0,
                  enablejsapi: 1,
                  modestbranding: 1,
                  playlist: 'iiV5udOKPc4',
                  vq: 'hd1080'
              }
          });
          player2 = new YT.Player('player2', {
            videoId: 'm60jj_-8Z6o',
            playerVars: {
                mute: 1,
                autoplay: 1,
                loop: 1,
                controls: 0,
                showinfo: 0,
                autohide: 0,
                enablejsapi: 1,
                modestbranding: 1,
                playlist: 'm60jj_-8Z6o',
                vq: 'hd1080'
            },
            allowfullscreen: 1,
            events: {
                'onStateChange': onPlayerStateChange
            }
        });  
      }
 
      
      function onPlayerStateChange(el) {
          if(el.data === 1) {
              $('#video-overlay1').hide();
              $('#video-overlay2').hide();
          }
      }