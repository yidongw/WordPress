<?php
/**
 * The category template file
 * @package WordPress
 * @subpackage spasalon
 */
 
get_header(); 
if ( in_category('product') ) {

var_dump(3234234);die;
include(TEMPLATEPATH . '/single-brand.php');

}

?>

<!-- Blog & Sidebar Section -->
<section id="section">		
	<div class="container">
		<div class="row">
			
			<!--Blog Detail-->
			<div class="col-md-8 col-xs-12">
				<div class="site-content">
					
					<?php if( have_posts() ): ?>
						
						<header class="page-header">
							<?php
								the_archive_title( '<h1 class="page-title">', '</h1>' );
								the_archive_description( '<div class="taxonomy-description">', '</div>' );
							?>
						</header><!-- .page-header -->
			
						<?php while( have_posts() ): the_post(); ?>
						
							<?php get_template_part('content',''); ?>
					
						<?php endwhile; ?>
						
						<div class="paginations">
						<?php						
						// Previous/next page navigation.
						the_posts_pagination( array(
						'prev_text'          => __('Previous','spasalon'),
						'next_text'          => __('Next','spasalon')
						) ); ?>
						</div>
						
					<?php else: ?>
						
						<?php get_template_part('content','none'); ?>
						
					<?php endif; ?>
			
				</div>
			</div>
			<!--/End of Blog Detail-->

			<?php get_sidebar(); ?>
		
		</div>	
	</div>
</section>
<!-- End of Blog & Sidebar Section -->
 
<div class="clearfix"></div>

<?php get_footer(); ?>