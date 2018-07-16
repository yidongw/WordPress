<?php
/**
* single post detail file
* @package WordPress
* @subpackage spasalon
*/
get_header("product"); 
?>


<?php while( have_posts() ): the_post(); ?>
						
	<?php  
		
		$product_name = get_the_title(); 
		//根据产品的名称 ，加载相应的 模板文件
		get_template_part('template-products/single', $product_name);
		
	?>
	
	
<?php endwhile; ?>


<?php get_footer("product"); ?>