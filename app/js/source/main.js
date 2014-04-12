
(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#title').click(title);
    $('.number').click(number);
    $('#clear-box').click(clear);
    $('.decimal').click(decimal);
    $('#plusmn').click(plusmn);
  }

  function title(){
    var display = $('.main').css('display');

    if(display === 'none'){
      $('.main').fadeIn();
    } else {
      $('.main').fadeOut();
    }
  }

  function number(){
    var num = $(this).text();
    var output = $('#display').text();

    if(output !== '0'){
    output += num;
    $('#display').text(output);
    } else {
    $('#display').text(num);
    }
  }

  function decimal(){
    var period = this.textContent;
    var output = $('#display').text();

    if(output.indexOf('.') === -1) {
      output += period;
      $('#display').text(output);
    }
  }

  function clear(){
    $('#display').text(0);
  }

  function plusmn(){
    var display = $('#display').text();
    $('#display').text(display * -1);
  }

})();
