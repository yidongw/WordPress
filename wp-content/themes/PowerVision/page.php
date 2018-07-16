<?php
/**
 * Template Name: page
*/
get_header("page"); 
?>


<section id="section">		
	<div class="container">
		<div class="row">
			
			<!--Blog Detail-->
			<div class="col-md-12 col-xs-12">
				<div class="site-content">
					
					<?php while( have_posts() ): the_post(); ?>
						
						<?php the_title();the_content(); ?>
						
					
					<?php endwhile; ?>
			
				</div>
			</div>
			
		
		</div>	
	</div>
</section>

<?php get_footer("page"); ?>