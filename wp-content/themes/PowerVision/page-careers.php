<?php
/**
 * Template Name: page careers
*/
get_header("page"); 
?>

<!--加载about css 页面-->
<link rel="stylesheet" href="<?php echo get_template_directory_uri() ; ?>/css/careers.css">
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
			
				<h2><%= t.jobSociety.title %></h2>
				<div class="boxWrap">
					<div class="subnav">
						<ul class="title">
							<li class='<%=(jobcountry==="cn"?"active":"")%>'><a href="jobSociety?jobcountry=cn">CHINA</a></li>
							<li class='<%=(jobcountry==="uk"?"active":"")%>'><a href="jobSociety?jobcountry=uk">EUROPE</a></li>
							<li class='<%=(jobcountry==="en"?"active":"")%>'><a href="jobSociety?jobcountry=en">US</a></li>
							<li class='<%=(jobcountry==="jp"?"active":"")%>'><a href="jobSociety?jobcountry=jp">JAPAN</a></li>
						</ul>
					</div>
					<div class="tabWrap">
						<ul class="newsBox">
							<!--中国-->
							<div class="mainWrap">
								<div id="join_cn" class="cl">
									<% items.forEach(function(i){%>
										<li>
											<div>
												<p><%-i.jobName %></p>
												<a href="/<%=country %>/about/jobDetails?id=<%=i.id %>" target="_blank">JOB DESCRIPTION</a>
											</div>
										</li>
									<% }) %>
								</div>
							</div>
							<!--end中国-->
						</ul>
					</div>
				</div>
			
		</div>
	</section>
	<!-- 主体内容 end-->
</section>
<?php get_footer('page'); ?>