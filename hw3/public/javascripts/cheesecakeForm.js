//Author: Santiago Franco
$(document).ready(function()
{
  var quantity = 1;

  $("#submitBtn").on("click", function(){
    var text = $("#specialInstructions").val();
    // If Vegan is written
    if(text.toLowerCase().includes("vegan"))
    {
      alert("Warning: Cheesecakes Contain Dairy");
    }
    // else = Hide Form, Read Data, and Write Message
    else
    {
      $("#outer").hide();
      var topping = $('input[name="Flavors"]:checked').val();
      var notes = $("#specialInstructions").val();
      $("#nameChange").text("Thank you! Your order of " +  quantity + " " + topping + " Cheesecake(s) has been placed. Notes:" + notes);
    }
});


$("#numOfCake").change(function(){
        quantity = $(this).val();
  });


});

