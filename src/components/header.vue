<template>
    <!-- <nav class="navbar navbar-light bg-faded navbar-fixed-top">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar1">
        ☰
    </button>
     <a class="navbar-brand" href="#">
            <img src="../assets/img/logo.jpg" height="41" alt="">
        </a>
    <div class="collapse" id="collapsingNavbar1">
        <ul class="nav navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">Bootstrap 4</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
        </ul>
        <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
                <a class="nav-link" href="#" title="I collapse on `md` screens">About</a>
            </li>
        </ul>
    </div>
</nav> -->

    <nav class="navbar  fixed-top bg-faded" role="navigation" style="padding: 0px;">
  <button id="toggler" class="navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsing-navbar">
    &#9776;
 </button>
        <a class="navbar-brand" href="#">
            <img src="../assets/img/logo.jpg" height="41" alt="">
        </a>
  <div class="collapse navbar-toggleable col-sm-8 col-sm-offset-3" id="collapsing-navbar">
    <ul class="nav navbar-nav">
      <li class="nav-item home">
        <a href="#" class="nav-link primary active" id="home">Home</a>
      </li>
      <li class="nav-item dropdown menu-large">
        <a class="nav-link primary" data-toggle="dropdown" href="#" id="grow">Grow</a>
        <ul class="dropdown-menu megamenu row">
          <li class="col-sm-3 col-sm-offset-1">
            <ul>
                <li>
                    <a href="#" class="secondary">
                        <i class="secondary" aria-hidden="true">
                        </i> Site Selection
                    </a>
                </li>
                <li>
                    <a href="#" class="secondary">
                        <i class="fa fa-circle" aria-hidden="true">
                        </i>Accessibility
                    </a>
                </li>
                <li>
                    <a href="#" class="secondary">
                        <i class="fa fa-circle" aria-hidden="true">
                        </i>Foreign Trade Zone
                    </a>
                </li>
                <li>
                    <a href="#" class="secondary">
                        <i class="fa fa-circle" aria-hidden="true">
                        </i>Workforce
                    </a>
                </li>
                <li>
                    <a href="#" class="secondary">
                        <i class="fa fa-circle" aria-hidden="true">
                        </i>Development & Training
                    </a>
                </li>
                <li>
                    <a href="#" class="secondary">
                        <i class="fa fa-circle" aria-hidden="true">
                        </i>Incentives & Resources
                    </a>
                </li>
            </ul>
          </li>
        </ul>
      </li>
   
      <li class="nav-item dropdown menu-large">
        <a class="nav-link primary" data-toggle="dropdown" href="#" id="work">Work</a>
        <ul class="dropdown-menu megamenu row">
          <li class="col-sm-3 col-sm-offset-2">
            <ul>
              <li>
                    <a href="#" class="secondary">
                        <i class="secondary" aria-hidden="true">
                        </i>Major Employers
                    </a>
                </li>
                <li>
                    <a href="#" class="secondary">
                        <i class="fa fa-circle" aria-hidden="true">
                        </i>GTP Jobs
                    </a>
                </li>
              <li><a href="#" class="secondary"><i class="fa fa-circle" aria-hidden="true"></i>Workforce</a></li>
              <li>
                  <a href="#" class="secondary">
                        <i class="fa fa-circle" aria-hidden="true">
                        </i>Development & Training
                    </a>
                </li>
            </ul>
          </li>
        </ul>
      </li>

      <li class="nav-item dropdown menu-large">
        <a class="nav-link primary" data-toggle="dropdown" href="#" id="live">Live</a>
        <ul class="dropdown-menu megamenu row">
          <li class="col-sm-3 col-sm-offset-3">
            <ul>
              <li>
                  <a href="#" class="secondary">
                    <i class="secondary" aria-hidden="true">
                    </i>Why Eastern NC
                  </a>
                </li>
              <li><a href="#" class="secondary"><i class="fa fa-circle" aria-hidden="true"></i>NC Events</a></li>
              <li><a href="#" class="secondary"><i class="fa fa-circle" aria-hidden="true"></i>Attractions & Culture</a></li>
              <li>
                  <a href="#" class="secondary">
                        <i class="fa fa-circle" aria-hidden="true">
                        </i>Econonmy
                    </a>
                </li>
                <li>
                  <a href="#" class="secondary">
                        <i class="fa fa-circle" aria-hidden="true">
                        </i>History
                    </a>
                </li>
            </ul>
          </li>
        </ul>
      </li>

      <li class="nav-item dropdown menu-large">
        <a class="nav-link primary" data-toggle="dropdown" href="#" id="resources">Resources</a>
        <ul class="dropdown-menu megamenu row">
          <li class="col-sm-3 col-sm-offset-4">
            <ul>
              <li>
                  <a href="#" class="secondary">
                    <i class="secondary" aria-hidden="true">
                    </i>Industry News
                  </a>
                </li>
              <li>
                    <a href="#" class="secondary">
                        <i class="fa fa-circle" aria-hidden="true">
                        </i>Environment
                    </a>
                </li>
              <li><a href="#" class="secondary"><i class="fa fa-circle" aria-hidden="true"></i>RFP's & RFQ's</a></li>
              <li>
                  <a href="#" class="secondary">
                        <i class="fa fa-circle" aria-hidden="true">
                        </i>Maps
                    </a>
                </li>
                <li>
                  <a href="#" class="secondary">
                        <i class="fa fa-circle" aria-hidden="true">
                        </i>Downloads
                    </a>
                </li>
            </ul>
          </li>
        </ul>
      </li>

      <li class="nav-item dropdown menu-large">
        <a class="nav-link primary" data-toggle="dropdown" href="#">Contact</a>
        <ul class="dropdown-menu megamenu row">
          <li class="col-sm-3 col-sm-offset-6">
            <ul>
              <li>
                  <a href="#" class="secondary">
                    <i class="fa fa-check" aria-hidden="true">
                    </i>Contact Us
                  </a>
                </li>
              <li>
                  <a href="#" class="secondary"><i class="fa fa-circle" aria-hidden="true"></i>Meet the Director</a></li>
              <li><a href="#" class="secondary"><i class="fa fa-circle" aria-hidden="true"></i>Our Team</a></li>
              <li><a href="#" class="secondary"><i class="fa fa-circle" aria-hidden="true"></i>Board of Directors</a></li>
            </ul>
          </li>
        </ul>
      </li>

    </ul>
  </div>
</nav>    
        

</template>
<script>

export default {
    data(){
        return{
            isActive:false,
            collapseClass: 'in'
        }
    },
  methods:{
      toggleIn:function(){
          this.isActive = !this.isActive;
      }
  }
}
</script>
<style scoped>
 a.navbar-brand{
padding-top: 15px;
}
 nav > a > img{
    mix-blend-mode: darken;
}
/* body {
    padding-top:70px;
}


.navbar .navbar-brand {
    float:none;
    display: block;
}
.navbar .navbar-nav>.nav-item {
    float: none;
    margin-left: .1rem;
}
.navbar .navbar-nav {
    float:none !important;
}
button.navbar-toggler{
    position: absolute;
    right: 20px;
    width:40px;
    height: 40px;
    margin-top: 5px;
} */


button#toggler{
    width:30px;
    height: 30px;
    margin-top: 15px;
    margin-right: 10px;
}

.fa-check {
	color: #fff;
	margin-left: .8em;
}
.fa-circle {
	color: #fff;
	font-size: .5em;
	padding-right: 1em;
}

 a.primary{
     color: #757575;
    font-family: Lato-Bold;
    font-size: 18px;
    text-decoration: underline;
 }
 a.active{
     text-decoration: none;
     color:#212121;
 }
 a.secondary{
     color:#757575;
    font-family: Lato-Light;
    font-size: 16px;
 }
  li.nav-item.dropdown.menu-large{
      padding-right: 20px;
  }
  li.home{
      padding-right: 20px;
  }
 li.nav-item.dropdown.menu-large.show.open > ul > li > ul > li{
     list-style: none;
 }

 li.nav-item.dropdown.menu-large.show.open > ul > li > ul{
     margin-left: 5px;
     padding-left: 5px;
 }
 .navbar{
     background-color: #fff;
 }

 li.nav-item >a{
     margin-right: 0;
 }

	.navbar-inner {
		padding: 0;
    }
	.nav {
		margin: 0;
		display: table;
        width: 100%;
    }
		.nav >li {
			display: table-cell;
			width: 1%;
			float: none;
            text-align: center;
        }
			a {
				line-height: 2.5;
			}
			/* &:nth-child(1) {
				background: #212121;
			}
			&:nth-child(2) {
				background: #009EDB;
			}
			&:nth-child(3) {
				background: #0086B9;
			}
			&:nth-child(4) {
				background: #0079A6;
			}
			&:nth-child(5) {
				background: #01729C;
			}
			&:last-child {
				background: #00688D;
			}
	
		li {
			&:first-child {
				a {
					border-left: 0;
					border-radius: 3px 0 0 3px;
				}
			}
			&:last-child {
				a {
					border-right: 0;
					border-radius: 0 3px 3px 0;
				}
			}
		}
	}
} */

	.nav-link {
		color: #fff;
	}

.menu-large {
	position: static !important;
}
.megamenu {
	padding: 20px 0px;
    width: 100%;
}
	.megamenu > li {
    color: #fff;
    }
ul {
    padding: 0;
    margin: 0;
}
    li {
        list-style: none;
    }
   .megamenu > li > a {
        display: block;
        margin-top: 30px;
        clear: both;
        font-weight: normal;
        line-height: 1.428571429;
        color: #fff;
        white-space: normal;
    }
.dropdown-menu {
	background: #f6f6f6;
}










</style>
