AOS.init({
    offset: 200,
      duration: 700,
      easing: 'ease-in',
      delay: 300,
  }, {offset:'50%'});

  jQuery(document).ready(function($) {
        $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
         

          initNav();
          
              getMainNavItems("Grow"); 
              getMainNavItems("Live");
              getMainNavItems("Work"); 
              getMainNavItems("Resources");  
              getMainNavItems("Contact"); 
                  
          
              //video stuff below here
          
              scaleVideoContainer();
          
              initBannerVideoSize('.video-container .poster img');
              initBannerVideoSize('.video-container .filter');
              initBannerVideoSize('.video-container video');
          
              $(window).on('resize', function () {
                  scaleVideoContainer();
                  scaleBannerVideoSize('.video-container .poster img');
                  scaleBannerVideoSize('.video-container .filter');
                  scaleBannerVideoSize('.video-container video');
              });
          
              initAnalytics();
          
        });


        function initNav() {
          $('.menu-btn' ).click(function(){
              $('.navContainer').toggleClass('expand')
          })
      }
      
      function getMainNavItems(uniqueId) {
          var dfd = $.Deferred();
      
          var camlQueryUniqueID  = "<Query><Where><And><Eq><FieldRef Name='RR_IsVisible' /><Value Type='Text'>Yes</Value></Eq><Eq><FieldRef Name='RR_UniqueID' /><Value Type='Text'>"+uniqueId+"</Value></Eq></And></Where><OrderBy><FieldRef Name='RR_SortOrder' Ascending='True' /></OrderBy></Query>";
          var camlViewFields = "<ViewFields><FieldRef Name='Title' /><FieldRef Name='RR_LinkUrl' /><FieldRef Name='RR_UniqueID' /></ViewFields>";
          var getNavItems = $().SPServices.SPGetListItemsJson({
            webURL: "/",
            listName: "Global Navigation",
            viewName: "",
            CAMLQuery: camlQueryUniqueID,
            CAMLViewFields: camlViewFields,
            CAMLRowLimit: "",
            CAMLQueryOptions: "",
            changeToken: "",
            contains: "",
            mapping: null,
            mappingOverrides: null,
            debug: true
        });
          $.when(getNavItems).fail(function() {
              console.log("query for nav items failed");
          })
          .done(function() {
              //convert this to switch case
              if (this.data[0].RR_UniqueID == "Grow") {
                  for (var i=0; i< this.data.length; i++) {
                      $(".main-nav-grow").append("<li><a href='" + this.data[i].RR_LinkUrl.Url + "'>" + this.data[i].Title + "</a></li>");
                      $(".main-nav-footer-grow").append("<li><a href='" + this.data[i].RR_LinkUrl.Url + "'>" + this.data[i].Title + "</a></li>");
                  }
              }
              else if (this.data[0].RR_UniqueID == "Work") {
                  for (var i=0; i< this.data.length; i++) {
                      $(".main-nav-work").append("<li><a href='" + this.data[i].RR_LinkUrl.Url + "'>" + this.data[i].Title + "</a></li>");
                      $(".main-nav-footer-work").append("<li><a href='" + this.data[i].RR_LinkUrl.Url + "'>" + this.data[i].Title + "</a></li>");
                  }
              }
              else if (this.data[0].RR_UniqueID == "Contact") {
                  for (var i=0; i< this.data.length; i++) {
                      $(".main-nav-contact").append("<li><a href='" + this.data[i].RR_LinkUrl.Url + "'>" + this.data[i].Title + "</a></li>");
                      $(".main-nav-footer-contact").append("<li><a href='" + this.data[i].RR_LinkUrl.Url + "'>" + this.data[i].Title + "</a></li>");
                  }
              }
              else if (this.data[0].RR_UniqueID == "Live") {
                  for (var i=0; i< this.data.length; i++) {
                      $(".main-nav-live").append("<li><a href='" + this.data[i].RR_LinkUrl.Url + "'>" + this.data[i].Title + "</a></li>");
                      $(".main-nav-footer-live").append("<li><a href='" + this.data[i].RR_LinkUrl.Url + "'>" + this.data[i].Title + "</a></li>");
                  }
              }
              else if (this.data[0].RR_UniqueID == "Resources") {
                  for (var i=0; i< this.data.length; i++) {
                      $(".main-nav-resources").append("<li><a href='" + this.data[i].RR_LinkUrl.Url + "'>" + this.data[i].Title + "</a></li>");
                      $(".main-nav-footer-resources").append("<li><a href='" + this.data[i].RR_LinkUrl.Url + "'>" + this.data[i].Title + "</a></li>");
                  }
              }
          });
      }
      
      
      function scaleVideoContainer() {
      
          var height = $(window).height() + 5;
          var unitHeight = parseInt(height) + 'px';
          $('.homepage-hero-module').css('height', unitHeight);
      
      }
      
      function initBannerVideoSize(element) {
      
          $(element).each(function () {
              $(this).data('height', $(this).height());
              $(this).data('width', $(this).width());
          });
      
          scaleBannerVideoSize(element);
      
      }
      
      function scaleBannerVideoSize(element) {
      
          var windowWidth = $(window).width(),
          windowHeight = $(window).height() + 5,
          videoWidth,
          videoHeight;
      
          // console.log(windowHeight);
      
          $(element).each(function () {
              var videoAspectRatio = $(this).data('height') / $(this).data('width');
      
              $(this).width(windowWidth);
      
              if (windowWidth < 1000) {
                  videoHeight = windowHeight;
                  videoWidth = videoHeight / videoAspectRatio;
                  $(this).css({ 'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px' });
      
                  $(this).width(videoWidth).height(videoHeight);
              }
      
              $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
      
          });
      }
      
      function initAnalytics() {
      
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'UA-54711710-1');
      
      
      
        // WebTrends SmartSource Data Collector Tag v10.4.1
        // Copyright (c) 2014 Webtrends Inc.  All rights reserved.
        // Tag Builder Version: 4.1.3.2
        // Created: 2014.03.27
        window.webtrendsAsyncInit = function () {
            var dcs = new Webtrends.dcs().init({
                dcsid: "dcs22272znkfmz6rt0ipucjol_2t9t",
                domain: "statse.webtrendslive.com",
                timezone: -5,
                fpcdom: ".ncgtp.com",
                plugins: {
                    //hm:{src:"//s.webtrends.com/js/webtrends.hm.js"}
                }
            }).track();
        };
      
      
      }