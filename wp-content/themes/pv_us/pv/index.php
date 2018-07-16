<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <meta name="author" content="">

    <title><?php bloginfo('name'); ?></title>

    <!-- Bootstrap core CSS -->
    <link href="<?php bloginfo('template_url'); ?>/css/bootstrap.css" rel="stylesheet">
    <link href="<?php bloginfo('template_url'); ?>/css/flag-icon.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="<?php bloginfo('stylesheet_url'); ?>" rel="stylesheet">
    <?php wp_head(); ?>
  </head>

  <body>


    <div class="blog-masthead">
      <div class="container">
        <nav class="blog-nav">
          <?php
           wp_nav_menu( array(
               'menu'              => 'primary',
               'theme_location'    => 'primary',
               'depth'             => 2,
               'container'         => 'div',
               'container_class'   => 'collapse navbar-collapse',
               'container_id'      => 'bs-example-navbar-collapse-1',
               'menu_class'        => 'nav navbar-nav',
               'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
               'walker'            => new wp_bootstrap_navwalker())
           );
          ?>
        </nav>
      </div>
    </div>




    <nav class="navbar navbar-expand-md navbar-light bg-white">
      <a class="navbar-brand mx-auto" href="http://www.powervision.me/en">
        <img class="banner" alt="PowerVision" src="http://www.powervision.me/images/logo.svg">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item dropdown">
            <a class="nav-link" id="marineDrones" data-toggle="dropdown">
              Marine Drones
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">PowerDolphin</a>
              <a class="dropdown-item" href="#">PowerRay</a>
              <a class="dropdown-item" href="#">PowerSeeker</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" id="aerialDrones" data-toggle="dropdown">
              Aerial Drones
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="#">PowerEgg</a>
              <a class="dropdown-item" href="#">PowerEye</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Store</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Support</a>
          </li>
        </ul>
        <div class="navbar-nav navbar-nav dropdown mr-3">
          <a class="nav-link" id="lang" data-toggle="dropdown">
            <i class="flag-icon flag-icon-cn mr-1"></i>中文
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">
              <i class="flag-icon flag-icon-jp mr-1"></i>日本語
            </a>
            <a class="dropdown-item" href="#">
              <i class="flag-icon flag-icon-us mr-1"></i>English - US
            </a>
            <a class="dropdown-item" href="#">
              <i class="flag-icon flag-icon-gb mr-1"></i>English - UK
            </a>
          </div>
        </div>
        <div class="navbar-nav navbar-nav dropdown mr-3">
          <a class="nav-link" id="user" data-toggle="dropdown">
            <i class="fa fa-user-circle-o fa-2x"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">
              Login
            </a>
            <a class="dropdown-item" href="#">
              Register
            </a>
          </div>
        </div>
      </div>

    </nav>



    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleControls" data-slide-to="1"></li>
        <li data-target="#carouselExampleControls" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=First slide" alt="First slide [800x400]" data-holder-rendered="true">
          <div class="carousel-caption d-none d-md-block">
            <h5>PowerDolphin</h5>
            <p>Keep Changing</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Second slide" alt="Second slide [800x400]" data-holder-rendered="true">
          <div class="carousel-caption d-none d-md-block">
            <h5>PowerSeeker</h5>
            <p>...</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Thrid slide" alt="Thrid slide [800x400]" data-holder-rendered="true">
          <div class="carousel-caption d-none d-md-block">
            <h5>PowerRay</h5>
            <p>Explore the Underwater World</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>


    <div class="row no-gutters">
      <div class="col-sm-6 col-md-3 p-1 ">
        <a data-toggle="modal" data-target="#youtubeModal" data-whatever="kpk4hO1IEdo">
          <img class="img-fluid"  src="http://img.youtube.com/vi/kpk4hO1IEdo/maxresdefault.jpg">
        </a>
      </div>
      <div class="col-sm-6 col-md-3 p-1">
        <a data-toggle="modal" data-target="#youtubeModal" data-whatever="WfS4ktSwCB4">
          <img class="img-fluid"  src="http://img.youtube.com/vi/WfS4ktSwCB4/maxresdefault.jpg">
        </a>
      </div>
      <div class="col-sm-6 col-md-3 p-1">
        <a data-toggle="modal" data-target="#youtubeModal" data-whatever="y_oxLfqhsF4">
          <img class="img-fluid"  src="http://img.youtube.com/vi/y_oxLfqhsF4/maxresdefault.jpg">
        </a>
      </div>
      <div class="col-sm-6 col-md-3 p-1">
        <a data-toggle="modal" data-target="#youtubeModal" data-whatever="H3ZG8cnWsuc">
          <img class="img-fluid" src="http://img.youtube.com/vi/GVLSh9kKh8w/maxresdefault.jpg">
        </a>
      </div>
    </div>

    <div id="youtubeModal" class="modal fade" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <iframe id="youtube" src="http://www.youtube.com/embed/y_oxLfqhsF4" width="800" height="450" frameborder="0" allowfullscreen=""></iframe>
        </div>
      </div>
    </div>

    <div class="row no-gutters">
      <div class="col-md-6 p-1">
        <a href="#">
          <img class="img-fluid" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=PowerEgg" alt="PowerEgg [800x400]" data-holder-rendered="true">
        </a>
      </div>
      <div class="col-md-6 p-1">
        <a href="#">
          <img class="img-fluid" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=PowerEye" alt="PowerEye [800x400]" data-holder-rendered="true">
        </a>
      </div>
      <div class="col-md-6 p-1">
        <a href="#">
          <img class="img-fluid" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Store" alt="Store [800x400]" data-holder-rendered="true">
        </a>
      </div>
      <div class="col-md-6 p-1">
        <a href="#">
          <img class="img-fluid" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Support" alt="Support [800x400]" data-holder-rendered="true">
        </a>
      </div>
    </div>

    <form class="my-5">
      <h1 class="text-center">NEWSLETTER</h1>
      <p class="text-center">Would you like to learn more about the news from PowerVision?</p>

      <div class="input-group col-xs-offset-3 col-xs-6 col-md-4 offset-md-4">
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">Submit</button>
        </div>
      </div>
      <div class="text-center mt-4">
        <i class="fa fa-twitter fa-2x mr-4" aria-hidden="true"></i>
        <i class="fa fa-facebook fa-2x mr-4" aria-hidden="true"></i>
        <i class="fa fa-youtube fa-2x mr-4" aria-hidden="true"></i>
        <i class="fa fa-weibo fa-2x mr-4" aria-hidden="true"></i>
        <i class="fa fa-weixin fa-2x mr-4" aria-hidden="true"></i>
      </div>
    </form>

    <!-- Footer -->
    <div class="bg-black text-white">
      <footer class="py-5 bg-inverse text-white container">
        <div class="row">
          <div class="col-md-9">
            <div class="row">
              <div class="col-sm">
                <h5>About</h5>
                <ul class="list-unstyled text-muted">
                  <li>
                    <a href="#!">About</a>
                  </li>
                  <li>
                    <a href="#!">Contact</a>
                  </li>
                  <li>
                    <a href="#!">Careers</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm">
                <h5>Channals</h5>
                <ul class="list-unstyled text-muted">
                  <li>
                    <a href="#!">PowerVision</a>
                  </li>
                  <li>
                    <a href="#!">BestBuy</a>
                  </li>
                  <li>
                    <a href="#!">Amazon</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm">
                <h5>Media Center</h5>
                <ul class="list-unstyled text-muted">
                  <li>
                    <a href="#!">News</a>
                  </li>
                  <li>
                    <a href="#!">Media Coverage</a>
                  </li>
                  <li>
                    <a href="#!">Media Kit</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm">
                <h5>Support</h5>
                <ul class="list-unstyled text-muted">
                  <li>
                    <a href="#!">Warranty Policy</a>
                  </li>
                  <li>
                    <a href="#!">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm">
                <h5>R&D Support</h5>
                <ul class="list-unstyled text-muted">
                  <li>
                    <a href="#!">Developer</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <h5>400-8701-088</h5>
            <p>Monday - Friday</p>
            <p>9:00am - 6:00pm</p>
          </div>
        </div>
      </footer>

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">
        Copyright © <?php echo Date('Y'); ?>, PowerVision Robot Inc. All rights reserved
      </div>
      <!-- Copyright -->
    </div>

    <?php wp_footer(); ?>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

    <!-- <script>window.jQuery || document.write('<script src="../../../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script> -->
    <!-- For dropdowns -->
    <script src="<?php bloginfo('template_url'); ?>/js/popper.min.js"></script>

    <script src="<?php bloginfo('template_url'); ?>/js/bootstrap.js"></script>

    <!-- For Imageholding -->
    <script src="<?php bloginfo('template_url'); ?>/js/holder.min.js"></script>

    <script src="<?php bloginfo('template_url'); ?>/pv.js"></script>
  </body>
</html>
