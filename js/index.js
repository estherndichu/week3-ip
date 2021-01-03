$(document).ready(function(){
    $("#design-show").click(function(){
        $("#design-hide").toggle();
        $("#design-show").toggle();
    });
    $("#design-hide").click(function(){
        $("#design-show").toggle();
        $("#design-hide").toggle();
    });
    $("#dev-show").click(function(){
        $("#dev-hide").toggle();
        $("#dev-show").toggle();
    });
    $("#dev-hide").click(function(){
        $("#dev-show").toggle();
        $("#dev-hide").toggle();
    });
    $("#product-show").click(function(){
        $("#product-hide").toggle();
        $("#product-show").toggle();
    });
    $("#product-hide").click(function(){
        $("#product-show").toggle();
        $("#product-hide").toggle();
    });
    });
    $(document).ready(function() {
        $('.one').mouseover(function(){
          $('#dark').show();
        }).mouseout(function(){
          $('#dark').hide();
        });
        $('.two')
          .mouseover(function () {
            $('#mighty').show();
          })
          .mouseout(function () {
            $('#mighty').hide();
          });
        $('.three')
          .mouseover(function () {
            $('#yellow').show();
          })
          .mouseout(function () {
            $('#yellow').hide();
          });
        $('.four')
          .mouseover(function () {
            $('#jim').show();
          })
          .mouseout(function () {
            $('#jim').hide();
          });
        $('.five').mouseover(function () {
            $('#good').show();
          })
          .mouseout(function () {
            $('#good').hide();
          });
        $('.six')
          .mouseover(function () {
            $('#sheet').show();
          })
          .mouseout(function () {
            $('#sheet').hide();
          });
        $('.seven')
          .mouseover(function () {
            $('#burned').show();
          })
          .mouseout(function () {
            $('#burned').hide();
          });
        $('.eight')
          .mouseover(function () {
            $('#giraffe').show();
          })
          .mouseout(function () {
            $('#giraffe').hide();
          });
        });
        $(document).ready(function(){
          $("form#message").submit(function(event){
            var name = $("input#name").val();
            var email = $("input#address").val();
            var message = $("textarea#message").val();
            event.preventDefault();
            if ($("input#name").val() && $("input#address").val()){
             alert (name + ", we have received your message. Thank you for contacting us.");
           }
           else{
             alert("Please enter your name,email and your message.Thank you.");
           }
          });
         });