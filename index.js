$("h1").addClass("big-title margin-50");

$('h1').text('Bye');

$('a').attr('href','https://www.bing.com/');


$('button').click(function(){
  $('h1').css('color','green')
})


$(document).keydown(function(event){
   $('h1').text(event.key);
})

$('h1').on("mouseover", function(){
  $('h1').css('color', 'purple');
})


$('button').on('click', function(){
  $('h1').fadeToggle();
  // $('h1').slideToggle();
})

$('button').on('click', function(){
  $('h1').animate({opacity:0.5});
  // $('h1').slideToggle();
})
