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

    <nav class="navbar navbar-expand-md navbar-light bg-white">
      <a class="navbar-brand mx-auto" href="http://www.powervision.me/en">
        <img class="banner" alt="PowerVision" src="http://www.powervision.me/images/logo.svg">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <?php
       wp_nav_menu( array(
           'menu'              => 'primary',
           'theme_location'    => 'primary',
           'depth'             => 2,
           'container'         => 'div',
           'container_class'   => 'collapse navbar-collapse',
           'container_id'      => 'menu',
           'menu_class'        => 'navbar-nav mx-auto',
           'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
           'walker'            => new wp_bootstrap_navwalker())
       );
      ?>
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
    </nav>
