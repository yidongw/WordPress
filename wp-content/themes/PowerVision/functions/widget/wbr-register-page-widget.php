<?php
/**
 * Feature Page Widget
 *
 */
add_action('widgets_init','wbr_feature_page_widget');

function wbr_feature_page_widget(){
	
	return register_widget('wbr_feature_page_widget');
}


class wbr_feature_page_widget extends WP_Widget{
	
	function __construct() {
		
		parent::__construct(
		
			'wbr_feature_page_widget', // Base ID
			
			__('WBR: Page widget', 'spasalon'), // Name
			
			array( 'description' => __( 'Feature page item widget', 'spasalon'), ) // Args
			
		);
	}
	
	public function widget( $args , $instance ) {
		
		$instance['selected_page'] = (isset($instance['selected_page'])?$instance['selected_page']:'');
		
		$instance['hide_image'] = (isset($instance['hide_image'])?$instance['hide_image']:'');
		
		$instance['below_title'] = (isset($instance['below_title'])?$instance['below_title']:'');
		
		// fetch page object
		
		if( $instance['selected_page'] != '' ){
				
			$page  = get_post( $instance['selected_page'] ); 
			
			$title = $page->post_title;
		
		echo $args['before_widget'];
			
			echo '<div class="post text-center">';
			
			
				if( $title != '' && $instance['below_title'] == true ):
				
					echo '<div class="entry-header">';
					
						echo '<h4 class="entry-title">';
							
							echo $title;

						echo '</h4>';
						
					echo '</div>';
					
				endif;
			
				if( $instance['hide_image'] != true ):
						
						echo '<figure class="post-thumbnail">';
						
							$attr= array('class' => 'img-responsive');
							echo get_the_post_thumbnail($page->ID, 'large', $attr);
							
							
						
						echo '</figure>';
						
						endif;
					
				if( $title != '' && $instance['below_title']!=true ):
				
					echo '<div class="entry-header">';
					
						echo '<h4 class="entry-title">';
							
						
								echo $title;
								
							
						echo '</h4>';
						
					echo '</div>';
					
				endif;
							


					if( $page->post_content ) :		
				echo '<div class="entry-content">';
				
						 echo $page->post_content;

			
				echo '</div>';
					endif; 
				
				
			echo '</div>';
				
		echo $args['after_widget']; 	
		
		}
	}
	
	
	
	
	public function form( $instance ) {
		
		$instance['selected_page'] = isset($instance['selected_page']) ? $instance['selected_page'] : '';
		
		$instance['hide_image'] = isset($instance['hide_image']) ? $instance['hide_image'] : '';
		
		$instance['below_title'] = isset($instance['below_title']) ? $instance['below_title'] : '';
		?>
		
		<p>
			<label for="<?php echo $this->get_field_id( 'selected_page' ); ?>"><?php _e( 'Select pages','spasalon' ); ?></label> 
			
			<select class="widefat" id="<?php echo $this->get_field_id( 'selected_page' ); ?>" name="<?php echo $this->get_field_name( 'selected_page' ); ?>">
				
				<option value>--Select--</option>
				
				<?php
				
					$selected_page = $instance['selected_page'];
					
					$pages = get_pages($selected_page); 
					
					foreach ( $pages as $page ) {
						
						$option = '<option value="' . $page->ID . '" ';
						
						$option .= ( $page->ID == $selected_page ) ? 'selected="selected"' : '';
						
						$option .= '>';
						
						$option .= $page->post_title;
						
						$option .= '</option>';
						
						echo $option;
						
					}
					
				?>
						
			</select>
			
		</p>
		
		
		
		<p>
		
		<input class="checkbox" type="checkbox" <?php if($instance['hide_image']==true){ echo 'checked'; } ?> id="<?php echo $this->get_field_id( 'hide_image' ); ?>" name="<?php echo $this->get_field_name( 'hide_image' ); ?>" /> 
		
		<label for="<?php echo $this->get_field_id( 'hide_image' ); ?>"><?php _e( 'Hide featured image','spasalon' ); ?></label>
		
		</p>
		
		
		
		<p>
		
		<input class="checkbox" type="checkbox" <?php if($instance['below_title']==true){ echo 'checked'; } ?> id="<?php echo $this->get_field_id( 'below_title' ); ?>" name="<?php echo $this->get_field_name( 'below_title' ); ?>" /> 
		
		<label for="<?php echo $this->get_field_id( 'below_title' ); ?>"><?php _e( 'Display image below title','spasalon' ); ?></label>
		
		</p>
		
		<?php 
	}
	
	
	
	public function update( $new_instance, $old_instance ) {
		
		$instance = array();
		
		$instance['selected_page'] = ( ! empty( $new_instance['selected_page'] ) ) ? $new_instance['selected_page'] : '';
		
		$instance['hide_image'] = ( ! empty( $new_instance['hide_image'] ) ) ? $new_instance['hide_image'] : '';
		
		$instance['below_title'] = ( ! empty( $new_instance['below_title'] ) ) ? $new_instance['below_title'] : '';
		
		return $instance;
	}
	
}
?>