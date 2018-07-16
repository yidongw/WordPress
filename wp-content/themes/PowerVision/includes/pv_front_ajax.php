<?php
/**
 * Created by PhpStorm.
 * User: PV
 * Date: 2018-7-16
 * Time: 9:58
 */


//存储Ajax  请求提交的数据  网站底部 提交 用户的Email邮箱

add_action('wp_ajax_handler', 'handler');
//ajax 处理函数
add_action( 'wp_ajax_nopriv_handler', 'handler' );  //未登录的用户进行ajax 的数据的提交
add_action( 'wp_ajax_handler', 'handler' );  //登陆的用户进行ajax 的数据的提交

function handler() {
    global $wpdb;
    // 处理请求然后使用 WP_Ajax_Response 生成响应

    $usermail = $_POST["usermail"];//邮箱地址

    if (filter_var($usermail, FILTER_VALIDATE_EMAIL)) {
        $ret      = $wpdb-> query("SELECT id FROM  `cn_subscribe` where `email` = '$usermail'");

        if(!$ret){
            $data_array = array(
                'email'        => $usermail ,
                'bind_user_id' => 0 ,
                'is_active'    => 0 ,
                'is_delete'    => 0 ,
                'create_time'  => date("Y-m-d H:i:s") ,
            );

            if($wpdb->insert('cn_subscribe',$data_array)){
                echo json_encode(["status"=>1,"info"=>"保存数据成功，请登录邮箱激活，即可收到最新的产品推送！"]);
            }else{
                echo json_encode(["status"=>0,"info"=>"插入数据失败！"]);
            };
        }else{
            echo json_encode(["status"=>2,"info"=>"您的邮箱已经注册了！，不能重复提交邮箱！"]);
        }

    } else {
        echo json_encode(["status"=>0,"info"=>"邮箱格式不正确！"]);
    }

    // 处理完成后，不要忘记结束程序
    wp_die();
}
