<?php
/**
 * Template Name: page private
*/
get_header("page"); 
?>

<!--加载private css 页面-->
<link rel="stylesheet" href="<?php echo get_template_directory_uri() ; ?>/css/privacy.css">
<!--加载private css 页面-->
<section class="wrapper">
	<!--主体内容-->
	<section class="container">
		<div class="safety_area">
			<?php while( have_posts()): the_post(); ?>
			<div class="cl">
				<h1 class="fl"><?php the_title(); ?></h1>
			</div>
			<div class="contentWrap"> <?php the_content(); ?> </div>
			<?php endwhile; ?>
		</div>
	</section>
	<!--end 主体内容-->
</section>

<?php get_footer("page"); ?>