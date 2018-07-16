<article id="post-<?php the_ID(); ?>" <?php post_class('media'); ?>> 

	
	
	<div class="media-body"> 
	
		<div class="entry-header">
			<?php 	
			if ( is_single() ) :
			
			the_title('<h3 class="entry-title">', '</h3>' );
			
			else:
			
			the_title( sprintf( '<h3 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h3>' );
			
			endif; 
			?>
		</div>
		
		<div class="entry-content">
			<?php 
			
			the_content( __('Read More','') ); 
			
			wp_link_pages( array(
				'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Page', '' ) . '</span>',
				'after'       => '</div>',
				'link_before' => '<span>',
				'link_after'  => '</span>',
			) );
			
			?>
		</div>
		
	</div> 
</article>