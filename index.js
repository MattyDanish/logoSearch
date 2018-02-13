$(function(){

$('.dropdown-menu').change(function(){
  $('.color').toggleClass('hide');
  $('.grey').toggleClass('hide');
});
    $('section').click(function() {
        $(".imageModule").attr({src : "aci.png"});
    });

$('.grade-clicked').on('click', function(){
  value = $(this).html();
  $('#choose-grade').html(value);
  parametersChosen.grade = value;
  console.log(parametersChosen.grade);
});


$('.type-clicked').on('click', function(){
  value = $(this).html();
  $('#choose-scholarship').html(value);
  parametersChosen.type = value;
  console.log(parametersChosen.type);
});

$('.search-container').on('click', 'button', function(){
  hideAll();
  checkToHighlight();
  parametersChosen = {
    type : '',
    grade : ''
  };
})

function hideAll(){
$('.color').addClass('hide');
if ($('.grey').hasClass('hide')) {
  $('.grey').removeClass('hide');
}
}
$('.reset-container').on('click', 'button', function(){
  hideAll();
  parametersChosen = {
    type : '',
    grade : ''
  };
  $('#choose-scholarship').html('Type');
  $('#choose-grade').html('Grade');
});
});
