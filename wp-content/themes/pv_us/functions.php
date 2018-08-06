<?php
  // Register Nav Walker class_alias
  require_once('wp_bootstrap_navwalker.php');

  // Theme Support
  function pv_theme_setup(){
    add_theme_support('post-thumbnails');
    add_theme_support( 'title-tag' );

    // Nav Menus
    register_nav_menus(array(
      'primary' => __('Primary Menu')
    ));

    // Post Formats
    add_theme_support('post-formats', array('aside', 'gallery'));
  }

  add_action( 'init', 'pv_theme_setup' );


  function wpb_init_widgets($id){
    register_sidebar(array(
      'name'  => 'Sidebar',
      'id'    => 'sidebar',
      'before_widget' => '<div class="sidebar-module">',
      'after_widget'  => '</div>',
      'before_title'  => '<h4>',
      'after_title'   => '</h4>'
    ));

    register_sidebar(array(
      'name'  => 'Video1',
      'id'    => 'video1',
      'before_widget' => '<div class="col-sm-6 col-md-3 p-1">',
      'after_widget'  => '</div>',
      'before_title'  => '<h4>',
      'after_title'   => '</h4>'
    ));

    register_sidebar(array(
      'name'  => 'Video2',
      'id'    => 'video2',
      'before_widget' => '<div class="col-sm-6 col-md-3 p-1">',
      'after_widget'  => '</div>',
      'before_title'  => '<h4>',
      'after_title'   => '</h4>'
    ));

    register_sidebar(array(
      'name'  => 'Video3',
      'id'    => 'video3',
      'before_widget' => '<div class="col-sm-6 col-md-3 p-1">',
      'after_widget'  => '</div>',
      'before_title'  => '<h4>',
      'after_title'   => '</h4>'
    ));

    register_sidebar(array(
      'name'  => 'Video4',
      'id'    => 'video4',
      'before_widget' => '<div class="col-sm-6 col-md-3 p-1">',
      'after_widget'  => '</div>',
      'before_title'  => '<h4>',
      'after_title'   => '</h4>'
    ));



  }

  add_action('widgets_init', 'wpb_init_widgets');


?>
