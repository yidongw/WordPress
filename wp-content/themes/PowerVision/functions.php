<?php
/**
 * 获取文章所有的类别分类
 */

//加载外部的基本的工具函数
require_once trailingslashit( get_stylesheet_directory() ) . 'includes/pv_start.php';



//加载数据调用函数库

require_once trailingslashit( get_stylesheet_directory() ) . 'includes/pv_data.php';



//加载针对主题的对应的后台相关函数
require_once trailingslashit( get_stylesheet_directory() ) . 'includes/pv_admin_data.php';



//加载针对前端 提交的表单，后台异步收集的ajax相关函数
require_once trailingslashit( get_stylesheet_directory() ) . 'includes/pv_front_ajax.php';

