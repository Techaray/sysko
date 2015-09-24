$(document).ready(function(){

  /* SUBMIT */

  $('#temp-submit').click(function(){
    $('#submit-button-form').show();
    $('#submit-field-form').hide();
  });

  $('#temp-submit').click(function(){
    $('#submit-button-form').hide();
    $('#submit-field-form').show();
  });

  $('#back').click(function(){
    $('#submit-field-form').show();
    $('#submit-confirm-form').hide();
    $("input[type='submit']").val("Submit");
  });

  /* PRODUCT TYPE */

  $('#product_type').change(function(){
    var value = $(this).val();
    if( value == "MOBILE" || value == "TAB")
    {
      var check = 'show';
    }
    else
    {
      var check = 'hide';
    }
    

    if( check == "hide" )
    {
      $('#imei_number_upperdiv').slideUp();
      $('#device_type_upperdiv').slideUp();
      $('#imei_number').attr('disabled',true);
      $('#device_type').attr('disabled',true);
    }
    if( check == "show" )
    {
      $('#imei_number_upperdiv').slideDown();
      $('#device_type_upperdiv').slideDown();
      $('#imei_number').attr('disabled',false);
      $('#device_type').attr('disabled',false);
    }
  })

  $("#offer_ride_form").submit(function() {

    

    /* VALIDATION */

    var cap1 = $('.custom-captcha-compare').val();
    var cap2 = $('.custom-captcha-compare-with').val();

    if( cap1 != cap2 )
    {
      $('.captcha-cross').show();
      return false;
    }

    if ($("input[type='submit']").val() == "Submit") {
        alert("Please confirm if everything is correct");
        $('#submit-field-form').hide();
        $('#submit-confirm-form').show();
        $("input[type='submit']").val("Confirmed");
        return false;
    }

    /* */

    var data = {
      'packages': $('#packages').val(),
      'kit_code': $('#kit_code').val(),
      'invoice_value': $('#invoice_value').val(),
      'imei_number': $('#imei_number').val(),
      'invoice_number': $('#invoice_number').val(),
      'date_of_purchase': $('#date_of_purchase').val(),
      'device_type': $('#device_type').val(),
      'product_type': $('#product_type').val(),
      'customer_name': $('#customer_name').val(),
      'address': $('#address').val(),
      'pincode': $('#pincode').val(),
      'email': $('#email').val(),
      'mobile_number': $('#mobile_number').val(),
      'state': $('#state').val(),
      'city': $('#city').val(),
      'alternate_mobile': $('#alternate_mobile').val()
      };

    $.ajax({
          type: 'GET',
          url: 'http://insdata.testingwebsitedesign.com/save',
          crossDomain: true,
          data: data,
          cache: false,
          datatype: 'jsonp',

          success: function(data) {
          window.location.href = "Thankyou.html";
          }
        });

    return false;
  });


});

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess,Error);
}
function onSuccess(position) {
    var lat = pos.coords.latitude;
    var lng = pos.coords.longitude;
    alert("lat : "+lat+" lng : " +lng);

}

function onError(error) {
    alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}

function makeCaptcha()
{
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    //alert( text );
    $('.custom-captcha').val(text);
    $('.custom-captcha-compare').val(text);
}
