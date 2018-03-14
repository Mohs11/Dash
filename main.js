/*comment*/
console.log("Made by Mohs");

/*Number Counter*/
$(function(){
  $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 2000,
      easing:'swing',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
    });  
  });
});

$(function(){
  $('.togone').click(function(){
    $('#keyrecommendations').slideUp(500),
    $('#keyobservations').slideToggle(500);})
  $('.togtwo').click(function(){
    $('#keyobservations').slideUp(500),
    $('#keyrecommendations').slideToggle(500);  
  })
});

$(document).ready(function(){
    $('a#button').click(function(){
        $(this).toggleClass("down");
    });
});

/*Toggle EVERYTHING INDI*/
$(function() {
  $('.atribclass').on('click', function(){
    var hidden = $(this).attr('data-hidden');
    $('#'+hidden).toggle(400);
  });
});


/*Clear Textarea*/
$(function() {
  $('.submit').on('click', function(){
    var comment = $(this).attr('data-comment');
    $('#'+comment).val('');
  });
});

$(document).ready(function() {
    $.getScript("https://use.fontawesome.com/cdcb512957.js");
});