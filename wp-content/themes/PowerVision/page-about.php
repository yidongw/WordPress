<?php
/**
 * Template Name: page about
*/
get_header("page"); 
?>

<!--加载about css 页面-->
<link rel="stylesheet" href="<?php echo get_template_directory_uri() ; ?>/css/about.css">
<!--加载about css 页面-->

<section class="wrapper">
	<!--主体内容 start-->
	<section class="container">
		<div class="safety_area">
			<?php while( have_posts()): the_post(); ?>
				<h1 class="h1-uk"><?php the_title(); ?></h1>
				<div class="contentWrap-uk">
					<?php the_content(); ?>
				</div>
			<?php endwhile; ?>
		</div>
	</section>
	<!-- 主体内容 end-->
</section>
<?php get_footer('page'); ?>