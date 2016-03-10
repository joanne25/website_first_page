$('.menu').on('click', function(e) {
  e.preventDefault();
  $(this).next().toggleClass('active');
});



// Courtesy: http://stackoverflow.com/questions/1403615/use-jquery-to-hide-a-div-when-the-user-clicks-outside-of-it
$(document).click(function (e) {
    var containers = $('.menu, .nav');
    if (!containers.is(e.target) && containers.has(e.target).length === 0){
        containers.removeClass('active');
    }
});