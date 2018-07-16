<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * 作者 ： PowerVision
 */
get_header();
?> 
<?php //开始引入本页面单独的css样式 start?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri() ; ?>/css/index.css">
<?php //开始引入本页面单独的css样式 end?>

<?php //需要视频播放的页面需要加载下面的内容 start ?>
<div class="mask-layer"></div>
<div class="indexVideo-wrap">
	<a class="close-video" href="javascript:;"><img src="<?php echo get_template_directory_uri() ; ?>/images/icon/video_close.svg" alt=""></a>
	<iframe class="index-video" src="" frameborder="0"></iframe>
</div>
<?php //需要视频播放的页面需要加载下面的内容 end ?>
<section class="wrapper">
        <section class="container">
            <!--轮播图-->
            <?php  echo do_shortcode('[smartslider3 slider=2]');?>
            <!--轮播图 end-->
			
	
			
			<!--视频导航 start-->
            <div class="video-wrap">
                <ul class="video-ul cl">
				
				
					<!--调用视频文章 start-->
					<?php query_posts('cat=35&posts_per_page=4'); ?>
						<!--视频播放框 start-->
						
						
					<?php while(have_posts()): the_post(); ?>
							
							<li class="video-li">
								
								
								<a href="javascript:;">
								
									<?php //处理-视频第一帧图片start ?>
									<img src="<?php echo get_post_meta(get_the_ID(),'video_cover_value',true);?>" alt="">
									<?php //视频第一帧图片 end ?>
									
									<img class="play" _src='<?php  $a=get_the_content() ;echo $a;?>'  src="<?php echo get_template_directory_uri() ; ?>/images/icon/play.png" alt="">
								
								</a>
								
							</li>
						
						
					<?php endwhile; wp_reset_query(); ?>
				
               
					<!--调用视频文章 end-->
                </ul>
            </div>
			<!--视频导航 end-->
			

			<!--活动位-->
            <div class="activity-wrap">
                <ul class="activity-ul cl">
					<!--调用图片文章-->	
					<?php query_posts('cat=37&posts_per_page=4'); ?>
					
						<?php while(have_posts()): the_post(); ?>
						
						<li class="activity-li">
						
							<a href="<?php echo get_post_meta(get_the_ID(),'img_url_value',true);?>">
								<?php 
									//用户可能直接输入的是图片的地址，或者携带了<img /> 标签的地址，需要进行处理统一输出
									if($content = preg_replace('/<img.*? \/>/','',get_the_content())){
										echo '<img src="'.$content.'">';
									}else{
										echo get_the_content(); //没有匹配到直接输入
									};
								?>
							</a>
							
						</li>
						
					<?php endwhile; wp_reset_query(); ?>
					
                </ul>
            </div>
            <!--活动位 end-->
        </section>
    </section>
	

<?php 
get_footer(); 
?>