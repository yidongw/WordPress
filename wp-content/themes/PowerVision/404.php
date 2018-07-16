<?php
/**
 * 404 template file
 * @package WordPress
 * @subpackage spasalon
 */
get_header();
?>


    <!--浏览器兼容js-->
    <!--[if IE]>
    <script src="/js/plug/html5.js" type="text/javascript" charset="utf-8"></script>
    <![endif]-->
    <!--[if lte IE 8]>
    <script src="/js/plug/respond.min.js" type="text/javascript" charset="utf-8"></script>
    <![endif]-->
	<style>
		.safety_area {
			width: 1200px;
			margin: 0 auto;
			overflow: hidden;
		}

		.container {
			width: 100%;
			height: auto;
			overflow: hidden;
		}

		.error_sorry {
			margin-bottom: 200px;
		}

		.error_sorry img {
			vertical-align: middle;
			display: block;
			width: 56%;
			margin: 120px 22% 60px 22%;
		}

		.error_sorry p {
			color: #323232;
			font-size: 28px;
			text-align: center;
			margin: 70px 0 50px 0;
		}
				
		.error_sorry a {
			width: 306px;
			height: 40px;
			margin: 0 auto;
			border-radius: 5px;
			background: #de2c2c;
			color: #fff;
			text-align: center;
			line-height: 40px;
			font-size: 20px;
			display: block;
		}

		@media screen and (max-width:768px) {
			.safety_area {
				width: 80%;
				margin: 25% 10% 6% 10%;
			}
			.error_sorry img {
				width: 100%;
				margin: 0 auto;
			}
			.error_sorry a {
				width: 15rem;
			}
		}
	</style>
	<!--主体内容-->
    <div id="container" class="container">
        <!--主体-->
        <div class="error_sorry safety_area">
            <img src="<?php echo get_template_directory_uri() ; ?>/images/error.png" alt="">
            <p>404, your page is missing -.-</p>
            <a href="/">HomePage</a>
        </div>
        <!--主体 end-->
    </div>
	<!--主体内容 end-->
 

<?php get_footer(); ?>