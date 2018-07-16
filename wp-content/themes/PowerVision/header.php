<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <meta charset="UTF-8">
    <title><?php powervision_seo();?></title>
    <!--SEO优化-->
    <meta name="keywords" content="">
    <meta name="description" content="<?php wp_title(); ?>">
    <!--浏览器响应式兼容-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--浏览器响应式兼容-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--兼容360兼容模式-->
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=8">
    <!--公用css样式-->
	<link rel="shortcut icon" href="<?php echo get_template_directory_uri() ; ?>/favicon.ico" mce_href="<?php echo get_template_directory_uri() ; ?>/favicon.ico" type="image/x-icon">
    <link rel="stylesheet"    href="<?php echo get_template_directory_uri() ; ?>/css/reset.css">
    <link rel="stylesheet"    href="<?php echo get_template_directory_uri() ; ?>/css/common.css">
	<script language="javascript" type="text/javascript" src="<?php echo get_template_directory_uri() ; ?>/js/plug/jquery-1.9.1.min.js"></script>
</head>		
<body>
    <div class="nav cl">
        <a class="fl" href="/">
            <img class="logo" src="<?php echo get_template_directory_uri() ; ?>/images/logo.svg" alt="">
        </a>
       
		<?php
			//获得对应产品缩略图和名称
			$banner_produt_data = head_banner() ;//var_dump($banner_data);die;
			$nav =   "<ul class='nav_ul'>";
			foreach($banner_produt_data as $value){
				$nav .=    "<li class='nav_li main_nav'>";
				$nav .=		    "<a href=''>";
				$nav .=			 $value['p_catagory_name'];
				$nav .=		     "</a>";
				$nav .=		"</li>";
			}
			
			$banner_post_data = show_article_category([33,34]);
			
			foreach($banner_post_data as  $value )
			{
				$nav .= 	"<li class='nav_li main_nav'>";
				$nav .=			"<a href=''>";
				$nav .=		 	$value[1];
				$nav .=			"</a>";
				$nav .=		"</li>";
			}
			$nav .=  "</ul>";
			echo $nav;
			
			
			
			
			foreach($banner_produt_data as $v)
			{
				
				$str  =	"<ul class='secNav_ul' >";
				foreach($v['info'] as $kk => $vv)
				{
					$str .=	" <li>";
					$str .=	"   <a href='".$vv['url']."'>";
					$str .=	"       <img src='".$vv['image'][0]."' alt='".$vv['title']."'>";
					$str .=	$vv['title'];
					$str .=	"   </a>";
					$str .=	" </li>";
					
				}
				$str .=	"</ul>";
				echo $str;
			}
			
		?>
        
        <ul class="person-wrap fr">
            <li>
                <a class="person-a" href="">
                    <img src="<?php echo get_template_directory_uri() ; ?>/images/icon/user.png" alt="">
                </a>
                <ul class="person-ul">
                    <li>
                        <a href="/cn/person/login">登录</a>
                    </li>
                    <li>
                        <a href="/cn/person/register">注册</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
