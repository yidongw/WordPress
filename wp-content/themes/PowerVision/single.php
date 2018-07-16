<?php
/**
 * single post detail file
 * @package WordPress
 * @subpackage spasalon
 */
get_header(); 
?>

<!-- Blog & Sidebar Section -->
<section id="section">		
	<div class="container">
		<div class="row">
			
			
			<div class="container">
		       <div class="safety_area">
					
					<?php while( have_posts() ): the_post(); ?>
						
						<?php  
							the_title(); 
							
							echo get_video_cover($post->ID);
						
							
							the_content();
						
						?>
						
						
					<?php endwhile; ?>
			
				</div>
			</div>
		</div>	
	</div>
</section>
<!-- End of Blog & Sidebar Section -->
 
<div class="clearfix"></div>

<?php get_footer(); ?>