<?php
/**
 * Created by PhpStorm.
 * User: PV
 * Date: 2018-7-16
 * Time: 9:49
 */


//自定义字段 文章额外字段 代码 start

//添加图片 点击url
function new_meta_image_url() {
    global $post, $new_meta_boxes;
    $meta_box = array(
        "name"   => "img_url",  //图片的链接
        "title"  => "这里填写图片地址点击的地址",
        "value"  => "",
    );

    $meta_box_value = get_post_meta($post->ID, $meta_box['name']."_value", true);
    //输出表单令牌
    echo '<input type="hidden" name="noncename" id="noncename" value="'.wp_create_nonce( plugin_basename(__FILE__) ).'" />';


    if($meta_box_value == ""){
        $meta_box_value = $meta_box['value'];
        echo "点击右边的弹出相应的字段";
        //数据库默认字段为空  默认不显示本字段,当用户选择了 首页图片(活动)分类的时候,js 自动调出本字段；
        echo '<input  style="width: 96%;margin: 1% 2%;height: 36px;" type="text" name="'.$meta_box['name'].'_value" value="'.$meta_box_value.'"/><br />';
    }else{
        // 自定义字段输入框
        echo '<input style="width: 96%;margin: 1% 2%;height: 36px;" type="text" name="'.$meta_box['name'].'_value" value="'.$meta_box_value.'" /><br />';
    };

}

//添加视频 第一帧图片
function new_meta_video_url() {
    global $post;
    $meta_box = array(
        "name"   => "video_cover", //视频的第一帧  只涉及本地视频的情况
        "title"  => "这里填写视频播放的第一帧图片",
        "value"  => "",
    );


    $meta_box_value = get_post_meta($post->ID, $meta_box['name']."_value", true);
    if($meta_box_value == ""){
        //数据库默认字段为空  默认不显示本字段,当用户选择了 首页视频分类的时候,js 自动调出本字段；
        $meta_box_value = $meta_box['value'];

        echo "点击右边的弹出相应的字段";
        echo '<input style="width: 96%;margin: 1% 2%;height: 36px;" type="text" name="'.$meta_box['name'].'_value" value="'.$meta_box_value.'"></input><br />';
    }else{
        // 自定义字段输入框
        echo '<input style="width: 96%;margin: 1% 2%;height: 36px;" type="text" name="'.$meta_box['name'].'_value" value="'.$meta_box_value.'"></input><br />';
    };
}
function create_meta_box() {
    global $theme_name, $post;
    if ( function_exists('add_meta_box') ) {

        //获得帖子id

        //判断当前文章是否属于首页视频分类
        $post_id      =  $_GET["post"]? $_GET["post"]:"";


        $video_arr    =  array('35'); //查询视频分类ID
        $image_arr    =  array('37'); //查询图片分类ID
        if($post_id && in_category($video_arr,$post_id) ){
            add_meta_box( 'new-meta-boxes-url', 'Video Cover', 'new_meta_video_url', 'post', 'normal', 'high' );
        }elseif($post_id && in_category($image_arr,$post_id) ){
            add_meta_box( 'new-meta-boxes-image', 'Picture On Click Url', 'new_meta_image_url', 'post', 'normal', 'high' );
        }elseif($post_id){
            //其他分类下面的 不显示
            if($_GET['edit'] == "edit"){



            }
        }else{
            add_meta_box( 'new-meta-boxes-url', 'Video Cover', 'new_meta_video_url', 'post', 'normal', 'high' );
            add_meta_box( 'new-meta-boxes-image', 'Picture On Click Url', 'new_meta_image_url', 'post', 'normal', 'high' );
        }

    }
}

//添加自定义的获取图片点击url 和 视频 封面的 url

function get_video_cover($post_id)
{
    if(get_post_meta($post_id, 'video_cover_value',true)){
        return get_post_meta($post_id, 'video_cover_value',true);
    }else{
        //返回一张
        return 'http://gcsbucket.oss-cn-hongkong.aliyuncs.com/c4b634d788ac4580be27ef9e9ac3d25e.jpg';
    }
}

function get_image_url($post_id)
{
    if(get_post_meta($post_id, 'video_cover_value',true)){
        return get_post_meta($post_id, 'img_url_value',true);
    }else{
        return home_url();
    }
}



add_action('admin_menu', 'create_meta_box');


//自定义字段 文章额外字段 代码 end


//自定义 文章SEO 代码开始以 start

function ludou_add_custom_box() {
    add_meta_box(
        'ludou_sectionid',
        'SEO', // 可自行修改标题文字
        'ludou_inner_custom_box',
        'post'
    );
}

function ludou_inner_custom_box( $post ) {
    global $wpdb;

    // Use nonce for verification
    wp_nonce_field( plugin_basename( __FILE__ ), 'ludou_noncename' );

    // 获取固定字段keywords和description的值，用于显示之前保存的值
    // 此处wp_posts新添加的字段为keywords和description，多个用半角逗号隔开
    $date = $wpdb->get_row( $wpdb->prepare( "SELECT keywords, description FROM $wpdb->posts WHERE ID = %d", $post->ID) );

    // Keywords 字段输入框的HTML代码
    echo '<label for="keywords_new_field">Keywords</label> ';
    echo '<input type="text" id="keywords_new_field" name="keywords_new_field" value="'.$date->keywords.'" size="18" />';

    // description 字段输入框的HTML代码，即复制以上两行代码，并将keywords该成description
    echo '<label for="description_new_field">Description</label> ';
    echo '<input type="text" id="description_new_field" name="description_new_field" value="'.$date->description.'" size="18" />';
    // 多个字段依此类推
}

/* 文章提交更新后，保存固定字段的值 */
function ludou_save_postdata( $post_id ) {
    // verify if this is an auto save routine.
    // If it is our form has not been submitted, so we dont want to do anything
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
        return;

    // verify this came from the our screen and with proper authorization,
    // 表单令牌验证
    if ( !wp_verify_nonce( $_POST['ludou_noncename'], plugin_basename( __FILE__ ) ) )
        return;

    // 权限验证
    if ( 'post' == $_POST['post_type'] ) {
        if ( !current_user_can( 'edit_post', $post_id ) )
            return;
    }

    // 获取编写文章时填写的固定字段的值，多个字段依此类推
    $keywords = $_POST['keywords_new_field'];
    $description = $_POST['description_new_field'];



    // 更新数据库，此处wp_posts新添加的字段为keywords和description，多个根据你的情况修改
    global $wpdb;
    $wpdb->update( "$wpdb->posts",
        // 以下一行代码，多个字段的话参照下面的写法，单引号中是字段名，右边是变量值。半角逗号隔开
        array( 'keywords' => $keywords, 'description' => $description ),
        array( 'ID' => $post_id ));


    //保存视频的url

    $data['video_cover_value'] = $_POST['video_cover_value'];  //图片点击地址
    $data['img_url_value']     = $_POST['img_url_value'];      //视频封面

    if($data['video_cover_value'] != '' || $data['video_cover_value'] != NULL )
    {
        if(get_post_meta($post_id, 'video_cover_value',true) == "")
        {
            //执行插入
            add_post_meta($post_id, 'video_cover_value', $data['video_cover_value'], true);
        }else{
            //执行更新
            update_post_meta($post_id, 'video_cover_value', $data['video_cover_value']);
        }
    }else{
        if(get_post_meta($post_id, 'video_cover_value') != ""){
            //执行删除操作
            delete_post_meta($post_id,'video_cover_value', get_post_meta($post_id, 'video_cover_value', true));
        }
    }



    //保存图片的url

    if($data['img_url_value'] != '' || $data['img_url_value'] != NULL )
    {

        if(get_post_meta($post_id, 'img_url_value',true) == "" ){
            //执行插入
            add_post_meta($post_id, 'img_url_value', $data['img_url_value'], true);
        }else{
            //执行更新
            update_post_meta($post_id, 'img_url_value', $data['img_url_value']);
        }
    }else
    {
        if(get_post_meta($post_id, 'img_url_value',true ) != ""){
            //执行删除操作
            delete_post_meta($post_id,'img_url_value', get_post_meta($post_id, 'img_url_value', true));
        }
    }

}

add_action( 'add_meta_boxes', 'ludou_add_custom_box');
add_action( 'save_post', 'ludou_save_postdata' );
//自定义 文章SEO 代码开始以 end
