<?php get_header(); ?>

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleControls" data-slide-to="1"></li>
    <li data-target="#carouselExampleControls" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=First slide" alt="First slide [800x400]" data-holder-rendered="true">
      <div class="carousel-caption d-none d-md-block">
        <h5>PowerDolphin</h5>
        <p>Keep Changing</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Second slide" alt="Second slide [800x400]" data-holder-rendered="true">
      <div class="carousel-caption d-none d-md-block">
        <h5>PowerSeeker</h5>
        <p>...</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Thrid slide" alt="Thrid slide [800x400]" data-holder-rendered="true">
      <div class="carousel-caption d-none d-md-block">
        <h5>PowerRay</h5>
        <p>Explore the Underwater World</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


<div class="row no-gutters">
  <div class="col-sm-6 col-md-3 p-1 ">
    <a data-toggle="modal" data-target="#youtubeModal" data-whatever="kpk4hO1IEdo">
      <img class="img-fluid"  src="http://img.youtube.com/vi/kpk4hO1IEdo/maxresdefault.jpg">
    </a>
  </div>
  <div class="col-sm-6 col-md-3 p-1">
    <a data-toggle="modal" data-target="#youtubeModal" data-whatever="WfS4ktSwCB4">
      <img class="img-fluid"  src="http://img.youtube.com/vi/WfS4ktSwCB4/maxresdefault.jpg">
    </a>
  </div>
  <div class="col-sm-6 col-md-3 p-1">
    <a data-toggle="modal" data-target="#youtubeModal" data-whatever="y_oxLfqhsF4">
      <img class="img-fluid"  src="http://img.youtube.com/vi/y_oxLfqhsF4/maxresdefault.jpg">
    </a>
  </div>
  <div class="col-sm-6 col-md-3 p-1">
    <a data-toggle="modal" data-target="#youtubeModal" data-whatever="H3ZG8cnWsuc">
      <img class="img-fluid" src="http://img.youtube.com/vi/GVLSh9kKh8w/maxresdefault.jpg">
    </a>
  </div>
</div>

<div id="youtubeModal" class="modal fade" tabindex="-1">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
        <iframe id="youtube" src="http://www.youtube.com/embed/y_oxLfqhsF4" width="800" height="450" frameborder="0" allowfullscreen=""></iframe>
    </div>
  </div>
</div>

<div class="row no-gutters">
  <div class="col-md-6 p-1">
    <a href="#">
      <img class="img-fluid" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=PowerEgg" alt="PowerEgg [800x400]" data-holder-rendered="true">
    </a>
  </div>
  <div class="col-md-6 p-1">
    <a href="#">
      <img class="img-fluid" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=PowerEye" alt="PowerEye [800x400]" data-holder-rendered="true">
    </a>
  </div>
  <div class="col-md-6 p-1">
    <a href="#">
      <img class="img-fluid" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Store" alt="Store [800x400]" data-holder-rendered="true">
    </a>
  </div>
  <div class="col-md-6 p-1">
    <a href="#">
      <img class="img-fluid" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Support" alt="Support [800x400]" data-holder-rendered="true">
    </a>
  </div>
</div>

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
