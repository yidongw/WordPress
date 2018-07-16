<?php

/*
 * Plugin Name: Carousel
 * Plugin URI:
 * Description: Carousel
 * Version: 1.0.0
 * Author: Alan
 * Author URI: https://www.alan.com/
 */
 function pv_display_carousel() {
   $args = array(
	'category_name' => 'carousel',
	'orderby' => 'link_id',
	'order' => 'DESC',
	'limit' => 5
);

$links = get_bookmarks($args);
$n = count($links);


if (!empty($links)) {
	?>
	<div id="carousel">
		<ul>
      <?php
      	foreach ($links as $i => $link) {
      	}
      ?>
		</ul>
	</div>
	<?php
}

 }
