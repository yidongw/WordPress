<?php
/**
 * Created by PhpStorm.
 * User: PV
 * Date: 2018-7-16
 * Time: 9:41
 */

function show_article_category($product_catagory_id=[1],$post_category_num=2)
{
    global $wpdb;


    $request  = " SELECT $wpdb->terms.term_id, name ,slug FROM $wpdb->terms ";
    $request .= " LEFT JOIN $wpdb->term_taxonomy ON $wpdb->term_taxonomy.term_id = $wpdb->terms.term_id ";
    $request .= " WHERE $wpdb->term_taxonomy.taxonomy = 'category' and  $wpdb->term_taxonomy.parent = 1";
    $request .= " ORDER BY term_id asc";
    $article_categorys = $wpdb->get_results($request);

    $output   = [];
    foreach ($article_categorys as $key => $category) {

        if(in_array($category->term_id,$product_catagory_id)){  //过滤不要的栏目
            $output[$key] = [$category->term_id,$category->name, urldecode($category->slug)];
        }
    }
    return $output;
}

/**
 *@param1 $product_catagory_num 调用商品分类栏目的数量
 *@param2 $post_category_num    调用文章分类栏目的的数量
 *@return 返回整个已经处理好的数组
 */


function head_banner($product_catagory_num=2,$post_category_num=3)
{
    global $wpdb;
    $request  = "SELECT $wpdb->terms.term_id, name ,slug FROM $wpdb->terms ";
    $request .= "LEFT JOIN $wpdb->term_taxonomy ON $wpdb->term_taxonomy.term_id = $wpdb->terms.term_id ";
    $request .= "WHERE $wpdb->term_taxonomy.taxonomy = 'product_cat' ";
    $request .= " ORDER BY term_id asc";

    $product_cats = $wpdb->get_results($request);

    $output   = [];
    foreach ($product_cats as $key => $product_cat)
    {
        if($key == 0) continue;  //去掉多余的产品分类
        if($key == 4) break;
        $output[$key]["p_catagory_id"]   		= $product_cat->term_id;
        $output[$key]["p_catagory_name"] 		= $product_cat->name;
        $output[$key]["p_catagory_slug"] 		= urldecode($product_cat->slug);


        $products = wc_get_products( array(
            'status'      => array('publish'),
            'limit'       => 0,
            'category'    =>   array($output[$key]["p_catagory_name"])
        ));

        if (count($products)) :
            $product_info = [];
            foreach ($products as $k => $product)
            {

                $product_info[$k]["title"] = get_the_title( $product->id );


                if($remote_url =  get_post_meta($product->id,'fifu_image_url',false)){
                    //存在远程图片地址
                    $product_info[$k]["image"] = $remote_url ;
                }else{
                    //存在服务器本地图片

                    if($local_url = wp_get_attachment_image_src( $product->image_id ,'full')){
                        $product_info[$k]["image"] = $local_url;
                    }else{
                        //如果没有上传图片就默认给一张图片
                        $product_info[$k]["image"] = wp_get_attachment_image_src(257,'full');

                    };

                } ;


                $product_info[$k]["url"]   = get_permalink($product->id );
            }
        endif;

        $output[$key]["info"] 		= $product_info;

        //获得term_id下面产品的缩略图
    }

    return $output;
}


/**
 * 获取底部导航文章所有的类别分类
 */
function show_footer_article_category()
{
    global $wpdb;
    $request  =  " SELECT $wpdb->terms.term_id, name ,slug FROM $wpdb->terms ";
    $request .= " LEFT JOIN $wpdb->term_taxonomy ON $wpdb->term_taxonomy.term_id = $wpdb->terms.term_id ";
    $request .= " WHERE $wpdb->term_taxonomy.taxonomy = 'category' and  $wpdb->term_taxonomy.parent = 38";
    $request .= " ORDER BY term_id asc";
    $article_categorys = $wpdb->get_results($request);

    $output   = [];
    foreach ($article_categorys as $key => $category) {
        $output[$key] = [$category->term_id,$category->name, urldecode($category->slug)];
    }
    return $output;
}



/**
 * 获取所有产品的类别分类
 */
function show_product_category()
{
    global $wpdb;
    $request  =  " SELECT $wpdb->terms.term_id, name ,slug FROM $wpdb->terms ";
    $request .= " LEFT JOIN $wpdb->term_taxonomy ON $wpdb->term_taxonomy.term_id = $wpdb->terms.term_id ";
    $request .= " WHERE $wpdb->term_taxonomy.taxonomy = 'product_cat'";
    $request .= " ORDER BY term_id asc";
    $product_categorys = $wpdb->get_results($request);

    $output = [];
    foreach ($product_categorys as $key => $category) { //调用菜单
        $output[$key] = [$category->term_id,$category->name,urldecode($category->slug)];
    }
    return $output;
}

/**
 * 获取所有产品的类别分类 及其 分类下面的帖子；
 */
function dit_get_all_children_pages($post_id){

    $self = get_page($post_id) -> post_title;

    $args = array(
        'post_status' => 'publish',
        'post_type'   => 'page',
        'post_parent' => $post_id ,
        'orderby'     => 'menu_order',
        'order'       => 'ASC',
        'nopaging'    => true,
    );

    $child_pages  = get_posts($args);

    $output = [];
    foreach ($child_pages as $key => $post) {
        $output[$key]['title'] =  $post->post_title;
        $output[$key]['url']   =  get_permalink($post->ID);

    }
    wp_reset_postdata();
    return [$self,$output];
}


