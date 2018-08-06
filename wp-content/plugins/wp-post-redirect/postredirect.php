<?php
/*
Plugin Name: WP Post Redirect
Description: Redirect your posts to an external link by adding the url into a new metabox. Simply and efficient!
Version: 1.3
Author: Marco Milesi
Author Email: milesimarco@outlook.com
License:
Copyright 2013 Marco Milesi (milesimarco@outlook.com)

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License, version 2, as 
published by the Free Software Foundation.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

//Crea Metabox
add_action( 'add_meta_boxes', 'wpr_metaboxes' );

function wpr_metaboxes() {
    add_meta_box('wpr_redirect_url', 'Redirect URL', 'wpr_redirect_url', 'post', 'side', 'core');
}

function wpr_redirect_url() {
    global $post;
    echo '<input type="hidden" name="prurlmeta_noncename" id="prurlmeta_noncename" value="' .
    wp_create_nonce( plugin_basename(__FILE__) ) . '" />';
    $prurl = get_post_meta($post->ID, '_prurl', true);
    // Return metabox content
    echo '<input type="text" name="_prurl" value="' . $prurl  . '" class="widefat" />';
}

function wpr_save_prurl_meta($post_id, $post) {

	if ( !wp_verify_nonce( $_POST['prurlmeta_noncename'], plugin_basename(__FILE__) )) {
	return $post->ID;
	}

	if ( !current_user_can( 'edit_post', $post->ID ))
		return $post->ID;

	// OK, we're authenticated: we need to find and save the data
	// We'll put it into an array to make it easier to loop though.
	
	$prurls_meta['_prurl'] = $_POST['_prurl'];
	
	// Add values of $aturls_meta as custom fields
	
	foreach ($prurls_meta as $key => $value) { // Cycle through the $aturls_meta array!
		if( $post->post_type == 'revision' ) return; // Don't store custom data twice
		$value = implode(',', (array)$value); // If $value is an array, make it a CSV (unlikely)
		if(get_post_meta($post->ID, $key, FALSE)) { // If the custom field already has a value
			update_post_meta($post->ID, $key, $value);
		} else { // If the custom field doesn't have a value
			add_post_meta($post->ID, $key, $value);
		}
		if(!$value) delete_post_meta($post->ID, $key); // Delete if blank
	}

}

add_action('save_post', 'wpr_save_prurl_meta', 1, 2); // save the custom fields

// Redirect basato sul plugin "Redirect by Custom Field" di Michael 芳貴 Erlewine ============================================

if ( !defined('REDIRECT_HTTP_STATUS') )
	define( 'REDIRECT_HTTP_STATUS', 301 );

// This section will redirect URL's when the real permalink is hit directly.
// Note: I didn't use rewrite because I didn't want to have to keep track of all redirect mappings.
add_action('template_redirect', 'wpr_redirect_header', 1);
function wpr_redirect_header() {
	global $wp_query;
	if ( is_singular() &&
		 ($id = get_queried_object_id()) &&
		 ($link = wpr_get_redirect_url($id)) ) {
		wp_redirect($link, REDIRECT_HTTP_STATUS);
		exit;
	}
}

// This section will replace every instance of the permalink with the redirect URL.
add_filter('post_link', 'wpr_redirect', 10, 2);
function wpr_redirect($link, $postarg = null) {
	global $post;
	if ( is_admin() )
		return $link;
	if (is_object($postarg))
		$id = $postarg->ID;
	else if (is_int($postarg))
		$id = $postarg;
	else if (is_object($post))
		$id = $post->ID;
	else
		return $link;
	
	if ( $redirect = wpr_get_redirect_url($id) )
		return $redirect;
	
	return $link;
}

// id must be int
function wpr_get_redirect_url($id) {
	static $placeholders;

	if ( $redirect = get_post_meta( absint($id), '_prurl', true ) ) {

		if ( !isset($placeholders) ) {
			$placeholders = apply_filters( 'redirect_placeholders', 
				array(
					'%home%' => get_home_url(),
					'%site%' => get_site_url(),
				)
			);
		}

		return str_replace( array_keys($placeholders),
			array_values($placeholders),
			is_array($redirect) ? $redirect[0] : $redirect );
	}
	return false;
}

add_filter('get_sample_permalink_html', 'wpr_display_modifier', 10, 4);
function wpr_display_modifier($return, $id, $new_title, $new_slug) {
	if ( $redirect = wpr_get_redirect_url($id) )
		$return = "<strong>" . __("Redirect:", 'redirect-by-custom-field') . "</strong> " . esc_html($redirect) . "<style>#titlediv {margin-bottom: 30px;}</style><br/>" . $return;
	return $return;
}

?>