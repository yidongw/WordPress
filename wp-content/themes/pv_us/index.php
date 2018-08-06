<?php get_header(); ?>

<?php get_template_part('content','slider'); ?>

<div class="row no-gutters">
  <?php if(is_active_sidebar('video1')) : ?>
    <?php dynamic_sidebar('video1'); ?>
  <?php endif; ?>

  <?php if(is_active_sidebar('video2')) : ?>
    <?php dynamic_sidebar('video2'); ?>
  <?php endif; ?>

  <?php if(is_active_sidebar('video3')) : ?>
    <?php dynamic_sidebar('video3'); ?>
  <?php endif; ?>

  <?php if(is_active_sidebar('video4')) : ?>
    <?php dynamic_sidebar('video4'); ?>
  <?php endif; ?>
</div>


<div id="youtubeModal" class="modal fade" tabindex="-1">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
        <iframe id="youtube" src="http://www.youtube.com/embed/y_oxLfqhsF4" width="800" height="450" frameborder="0" allowfullscreen=""></iframe>
    </div>
  </div>
</div>

<?php get_template_part('content','front-images'); ?>


<form class="my-5">
  <h1 class="text-center">NEWSLETTER</h1>
  <p class="text-center">Would you like to learn more about the news from PowerVision?</p>

  <div class="input-group col-xs-offset-3 col-xs-6 col-md-4 offset-md-4">
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button">Submit</button>
    </div>
  </div>
  <div class="text-center mt-4">
    <i class="fa fa-twitter fa-2x mr-4" aria-hidden="true"></i>
    <i class="fa fa-facebook fa-2x mr-4" aria-hidden="true"></i>
    <i class="fa fa-youtube fa-2x mr-4" aria-hidden="true"></i>
    <i class="fa fa-weibo fa-2x mr-4" aria-hidden="true"></i>
    <i class="fa fa-weixin fa-2x mr-4" aria-hidden="true"></i>
  </div>
</form>


<?php get_footer(); ?>
