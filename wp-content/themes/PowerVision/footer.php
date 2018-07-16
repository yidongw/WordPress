<div class="footer cl">
    <div class="safety_area">
		<div class="mail-wrap cl">
			<h5>NEWSLETTER</h5>
			<p>Would you like to learn more about the news from PowerVision ?</p>
			<div class="mail-box">
				<input class="mail-input fl" id="mail-input" type="text" placeholder="Email">
				<a class="mail-btn fl" href="javascript:;"></a>
				<span class="wrong"></span>
			</div>
		</div>
		<div class="abroad_link cl">
			<a class="link_a link1" target="_blank" href="https://twitter.com/PowerVisionMe/"></a>
			<a class="link_a link2" target="_blank" href="https://www.facebook.com/powervisionme/"></a>
			<a class="link_a link3" target="_blank" href="https://www.youtube.com/channel/UC7ZqJYah2_TPIE5_2ZPbY6g"></a>
			<a class="link_a link4" target="_blank" href="https://www.instagram.com/powervision.usa/"></a>
			<a class="link_a link5" target="_blank" href="http://weibo.com/p/1006065690637415/home?from=page_100606&mod=TAB&is_all=1#place"></a>
			<a class="link_a link6" target="_blank" href="javascript:;"></a>
			<img class="wx_code none" src="<?php echo get_template_directory_uri() ; ?>/images/icon/wx_code.jpg" alt="">
		</div>
		<div class="footerTopwrap">
		
		
			<?php  
				//关于臻迪
				$about_pv = dit_get_all_children_pages(179); 
				
				$out 	  =  "<ul class='foot_ul'>";
				
				
				$out 	 .= 	"<li>".$about_pv[0]."</li>";
				foreach($about_pv[1] as $key => $val)
				{
					
					$out .=	    "<li><a href=".$val['url'].">".$val['title']."</a></li>";
					
				}
				$out 	 .=   "</ul>";	
				
				echo $out;
			?>
			
			
			
			<?php 
				//媒体中心
				$about_pv = dit_get_all_children_pages(182);  
				
				$out 	  =  "<ul class='foot_ul'>";
				
				
				$out 	 .= 	"<li>".$about_pv[0]."</li>";
				foreach($about_pv[1] as $key => $val)
				{
					
					$out .=	    "<li><a href=".$val['url'].">".$val['title']."</a></li>";
					
				}
				$out 	 .=   "</ul>";	
				
				echo $out;
			?>
			
			
			
			<?php 
				//服务与支持
				$about_pv = dit_get_all_children_pages(189);  
				
				$out 	  =  "<ul class='foot_ul'>";
				
				
				$out 	 .= 	"<li>".$about_pv[0]."</li>";
				foreach($about_pv[1] as $key => $val)
				{
					
					$out .=	    "<li><a href=".$val['url'].">".$val['title']."</a></li>";
					
				}
				$out 	 .=   "</ul>";	
				
				echo $out;
			?>
			
			
			
			<?php 
				//技术与支持
				$about_pv = dit_get_all_children_pages(218);  
				
				$out 	  =  "<ul class='foot_ul'>";
				
				
				$out 	 .= 	"<li>".$about_pv[0]."</li>";
				foreach($about_pv[1] as $key => $val)
				{
					
					$out .=	    "<li><a href=".$val['url'].">".$val['title']."</a></li>";
					
				}
				$out 	 .=   "</ul>";	
				
				echo $out;
			?>
			
			<?php
				//返回后台设置的网站的工作时间 和电话号码
				 echo get_post(393)->post_content;
			?>
			
		</div>
		<div class="footerBottomwrap cl">
			<ul class="language-wrap">
				<li class="language-li">
					<a class="language-a" href=""><img src="<?php echo get_template_directory_uri() ; ?>/images/icon/cn.svg" alt="">中文</a>
					<ul class="language-ul">
						<li><a href="javascript:;" onclick="changeLanguage('cn','中文')"><img src="<?php echo get_template_directory_uri() ; ?>/images/icon/cn.svg" alt="">中文</a></li>
						<li><a href="javascript:;" onclick="changeLanguage('en','English')"><img src="<?php echo get_template_directory_uri() ; ?>/images/icon/en.svg" alt="">English</a></li>
						<li><a href="javascript:;" onclick="changeLanguage('uk','English')"><img src="<?php echo get_template_directory_uri() ; ?>/images/icon/uk.svg" alt="">English</a></li>
						<li><a href="javascript:;" onclick="changeLanguage('jp','日本语')"><img src="<?php echo get_template_directory_uri() ; ?>/images/icon/jp.svg" alt="">日本语</a></li>
					</ul>
				</li>
			</ul>
			<?php 
				//隐私与条例
				$about_pv = dit_get_all_children_pages(246);  
				
				$out 	  =  "";
				
				foreach($about_pv[1] as $key => $val)
				{
					
					$out .=	  "<a class='fl' href='".$val['url']."'>".$val['title']."&nbsp;&nbsp;</a>";
					
				}
				
				echo $out;
			?>
			
			<?php
				//网站版权
			
				//<span class="fl">Copyright © PowerVision Inc.2018 保留所有权利粤icp备16037271号－1</span>
			
			    echo "<span class='fl'>".get_post(250)->post_content."</span>";
			?>
		</div>
    </div>
</div>
<script language="javascript" type="text/javascript" src="<?php echo get_template_directory_uri() ; ?>/js/common.js"></script>
<script language="javascript" type="text/javascript" src="<?php echo get_template_directory_uri() ; ?>/js/index.js"></script>
</body>
</html>

底部测试数据 可以不用管

<br/>


<?php echo "<script> var ajax_url ='".admin_url('admin-ajax.php')."';</script>"; //可以定义相对的路由地址?>

<?php
	
	
	echo date(get_option('date_format'), time());
	
	
	//获得分类
	the_widget('WP_Widget_Calendar'); 
	the_widget('WP_Widget_Categories', 'dropdown=1&count=1');
	echo "<hr/>";
	echo "<pre/>";
	/* $args = array(
		'type' => 'post',
		'child_of' =>1,
		'parent' => 1,
		'orderby' => 'name',
		'order' => 'ASC',
		'hide_empty' => false,
		'hierarchical' => 1,
		'exclude' => '',
		'include' => '',
		'number' => '',
		'taxonomy' => 'category',
		'pad_counts' => false
	); */
	$args=array(
		'type' => 'post',
		'orderby' => 'name',
		'parent' => 22, //分类的父类id
		'child_of' =>1,
		'hide_empty' => false,
		'order' => 'ASC'
	);
	$categories = get_categories( $args ); 
	foreach($categories as $key => $category){
	    echo '<p>Category: <a href="' . get_category_link( $category->term_id ) . '" title="' . sprintf( __( "View all posts in %s" ), $category->name ) . '" ' . '>' . $category->name.'</a> </p> ';
		echo '<p> Description:'. $category->description . '</p>';
		echo '<p> Post Count: '. $category->count . '</p>';  
		
	};die;

	echo "<hr/>";
	
	
	global $wp_query, $post, $woocommerce,$query_string;
	$product_visibility_term_ids = wc_get_product_visibility_term_ids();//获取精选产品
	
	
	echo "<pre/>";  //获得商品的查询方法
	
	var_dump(get_product(245));  echo "<hr/>";
	//产品的所有属性信息
	var_dump(get_post_meta( 245, '_product_attributes'));
	
	
	
	
	echo "<hr/>";
	var_dump(get_product(77)  -> image_id);  
	var_dump(wp_get_attachment_image_src(get_product(77)  -> image_id)); 
	  
	var_dump(get_product(77)  -> get_gallery_image_ids());
	
	// array(3) {
	  // [0]=>
	  // int(235)
	  // [1]=>
	  // int(234)
	  // [2]=>
	  // int(215)
	// }
	//图片的路径
	
	 
	
	var_dump($woocommerce);
	
	//var_dump($product_visibility_term_ids);die;
	
	$args = array(
		'tax_query' => array(
		'relation' => 'OR',
		array(
			'taxonomy' => 'product_visibility',//按照产品显示查询
			'field'    => 'term_taxonomy_id',
			//'terms'    => $product_visibility_term_ids['featured'],//筛选出精选产品
		),
	),
	'posts_per_page' => 5,//一共需要调用的文章数量
	'post_status'    => 'publish',//调用的文章为已经发布
	'post_type'      => 'product',//调用的类型为产品（product）
	'no_found_rows'  => 1,
	'order'          => "ASC",//文章排序为时间正排序
	'meta_query'     => array()//还可以使用post meta进行查询，这个和wordpress循环中使用一样
	);
	//以上为循环的参数
	$query= new WP_Query( apply_filters( 'woocommerce_products_widget_query_args', $args ) );//建立循环查询
	echo "<pre/>";
	var_dump($args);
	var_dump(apply_filters( 'woocommerce_products_widget_query_args', $args ) );
	
	//开始循环
	if($query->have_posts()) :
	while ( $query->have_posts() ) :$query->the_post();
		the_title();
		the_content();
		
	//loop 输出循环中的内容
	endwhile;  //结束循环
	wp_reset_query();//清除循环
	endif;
	
	

	
?>
