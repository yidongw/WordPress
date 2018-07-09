<?php

function wpb_customize_register($wp_customize) {
  //showcase section
  $wp_customize->add_section('showcase', array(
    'title' => __('Showcase', 'wpbootstrap'),
    'description' => sprintf(__('Options for showcase','wpbootstrap')),
    'priotiry' => 130
  ));

  $wp_customize->add_setting('showcase_image', array(
    'default' => get_bloginfo('template_directory').'/img/showcase.jpg',
    'type'      => 'theme_mod'
  ));

  $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'showcase_image', array(
    'label' => __('Showcase Image', 'wpbootstrap'),
    'section' => 'showcase',
    'setting' => 'showcase_image',
    'priotiry' => 1
  )));

  $wp_customize->add_setting('showcase_heading', array(
    'default' => _x('Custom Bootstrap Wordpress Theme', 'wpbootstrap'),
    'type'      => 'theme_mod'
  ));

  $wp_customize->add_control('showcase_heading', array(
    'label' => __('Heading', 'wpbootstrap'),
    'section'      => 'showcase',
    'priotiry' => 2
  ));

  $wp_customize->add_setting('showcase_text', array(
    'default' => _x('Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam', 'wpbootstrap'),
    'type'      => 'theme_mod'
  ));

  $wp_customize->add_control('showcase_text', array(
    'label' => __('Text', 'wpbootstrap'),
    'section'      => 'showcase',
    'priotiry' => 3
  ));

  $wp_customize->add_setting('btn_url', array(
    'default' => _x('http://test.com', 'wpbootstrap'),
    'type'      => 'theme_mod'
  ));

  $wp_customize->add_control('btn_url', array(
    'label' => __('Button URL', 'wpbootstrap'),
    'section'      => 'showcase',
    'priotiry' => 4
  ));

  $wp_customize->add_setting('btn_text', array(
    'default' => _x('Read More', 'wpbootstrap'),
    'type'      => 'theme_mod'
  ));

  $wp_customize->add_control('btn_text', array(
    'label' => __('Button text', 'wpbootstrap'),
    'section'      => 'showcase',
    'priotiry' => 5
  ));

}

add_action('customize_register', 'wpb_customize_register');
?>
