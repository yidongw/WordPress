$('.carousel').carousel({
  interval: 3500
})

$('#youtubeModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var videoCode = button.data('whatever'); // Extract info from data-* attributes
  console.log(videoCode);
  var modal = $(this);
  document.getElementById("youtube").src = 'http://www.youtube.com/embed/' + videoCode;
  // modal.find('.none').src('http://www.youtube.com/embed/' + videoCode);
})

$("#youtubeModal").on('hidden.bs.modal', function (e) {
    $("#youtubeModal iframe").attr("src", $("#youtubeModal iframe").attr("src"));
});
