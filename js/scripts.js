$(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").toggle('1500')
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development-image").toggle('1500');
      $("#development").slideUp('1500');
      
    });
  });

  $(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").toggle('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").toggle('1500');
      $("#design-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").toggle('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").toggle('1500');
      $("#product-image").slideDown('1500');
    });
  }); 
  
  $(document).ready(function(){
    $("form.contact-me").submit(function(event){
      event.preventDefault();
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });