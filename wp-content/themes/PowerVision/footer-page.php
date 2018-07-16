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

