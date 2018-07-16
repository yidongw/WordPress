<?php

if ( ! function_exists( 'powervision_seo' ) ) :

    /**
     * Enqueue scripts and styles.
     *
     * @since 1.0.0
     */
    function powervision_seo()
    {
        wp_title('',true);
        if (is_home() || is_front_page()) {
            bloginfo('name'); echo " | "; bloginfo('description');  //首页
        } elseif (is_category()){
            single_cat_title(); echo " | "; bloginfo('name');
        } elseif (is_single()){
            single_post_title(); echo " | "; bloginfo('name');
        } elseif (is_search()){
            echo "The Search Results"; echo " | "; bloginfo('name');
        } elseif (is_404()){
            echo "Page not found!" ;
        } else {
            wp_title('',true);   //默认
        }
    }



endif;