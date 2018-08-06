
<?php

$front_images = array();
$args = array( 'tag' => 'front-image', 'nopaging'=>true, 'posts_per_page'=>4 );
$fi_query = new WP_Query( $args );
if ( $fi_query->have_posts() ) {
    while ( $fi_query->have_posts() ) {
        $fi_query->the_post();
        if(has_post_thumbnail()){
            $temp = array();
            $thumb_id = get_post_thumbnail_id();
            $thumb_url_array = wp_get_attachment_image_src($thumb_id, 'full', true);
            $thumb_url = $thumb_url_array[0];
            $temp['title'] = get_the_title();
            $temp['excerpt'] = get_the_excerpt();
            $temp['image'] = $thumb_url;
            $front_images[] = $temp;
        }
    }
}

?>

<div class="row no-gutters">
  <?php $i = 0; foreach($front_images as $front_image) {
    extract($front_image); ?>
  <div class="thumbnail col-md-6 p-1">
    <a href="#">
      <div class="caption text-center text-dark">
        <h1>
          <?php echo $title ?>
        </h1>
      </div>

      <img class="img-fluid" src="<?php echo $image ?>" alt="<?php echo $title ?>" data-holder-rendered="true">
    </a>
  </div>
  <?php } ?>
</div>
