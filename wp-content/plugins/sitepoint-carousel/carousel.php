<?php
/*
Plugin Name: Carousel
Plugin URI:
Description: Creates a simple carousel
Version: 0
Author: Jérémy Heleine
Author URI: http://jeremyheleine.me
License: MIT
*/

// Enqueues the style of the carousel
function enqueue_carousel_style() {
	wp_enqueue_style('carousel', plugin_dir_url(__FILE__) . 'carousel.css');
}
add_action('wp_enqueue_scripts', 'enqueue_carousel_style');

// Displays the carousel
function display_carousel() {
	// Retrieves the right links
	$args = array(
		'category_name' => 'carousel',
		'orderby' => 'rating',
		'order' => 'DESC',
		'limit' => 5
	);

	$links = get_bookmarks($args);
	$n = count($links);

	// Displays the carousel only if there's something to display
	if (!empty($links)) {
		wp_enqueue_script('carousel', plugin_dir_url(__FILE__) . 'carousel.js', array('jquery'), '1.0', true);
		?>
		<div id="carousel">
			<ul>
				<?php
				foreach ($links as $i => $link) {
					// Background (image or random color)
					$background = (!empty($link->link_image)) ? 'url(' . $link->link_image . ')' : 'rgb(' . rand(0, 255) . ', ' . rand(0, 255) . ', ' . rand(0, 255) . ')';

					// Target and rel attributes (if needed)
					$target = (!empty($link->link_target)) ? ' target="' . $link->link_target . '"' : ' target="' . $link->link_target . '"';
					$rel = (!empty($link->link_rel)) ? ' rel="' . $link->link_rel . '"' : '';
					?>
					<li style="background: <?php echo $background; ?>;">
						<a class="carousel-link" href="<?php echo $link->link_url; ?>" title="<?php echo $link->link_name; ?>" <?php echo $target . $rel; ?>>
							<strong><?php echo $link->link_name; ?></strong>
							<?php
							if (!empty($link->link_description)) {
								?>
								<em><?php echo $link->link_description; ?></em>
								<?php
							}
							?>
						</a>

						<?php
						// Previous link
						if ($i > 0) {
							?>
							<a href="#prev" class="carousel-prev">&lt;</a>
							<?php
						}

						// Next link
						if ($i < $n - 1) {
							?>
							<a href="#next" class="carousel-next">&gt;</a>
							<?php
						}
						?>
					</li>
					<?php
				}
				?>
			</ul>
		</div>
		<?php
	}
}
?>
