 $(document).ready(function(){

  function initialize() {
    var input = document.getElementById('arrival');
    var input1 = document.getElementById('departure');
    var options = {componentRestrictions: {country: 'in'}};         
    new google.maps.places.Autocomplete(input, options);
    new google.maps.places.Autocomplete(input1, options);
}

google.maps.event.addDomListener(window, 'load',initialize);
});

 $(document).ready(function(){

  $("#offer_ride_form").submit(function() {

    var data = {
      'person_name': $('#person_name').val(),
      'departure': $('#departure').val(),
      'arrival': $('#arrival').val(),
      'chandigarh': $('#chandigarh').val(),
      'departure_date': $('#departure_date').val(),
      'return_date': $('#return_date').val(),
      'stopovers': $('#stopovers').val(),
      'price': $('#price').val(),
      'ride_detail': $('#ride_detail').val(),
      'no_of_seats': $('#no_of_seats').val(),
      'max_luggage_size': $('#max_luggage_size').val(),
      'leave_at': $('#leave_at').val(),
      'detaur': $('#detaur').val()
      };

    $.ajax({
          type: 'GET',
          url: 'http://goyaar.testingwebsitedesign.com/saveApiRide',
          crossDomain: true,
          data: data,
          cache: false,
          datatype: 'jsonp',

          success: function(data) {
          alert('Data Added');
          }
        });

    return false;
  });



$("#find_ride_form").submit(function() {

    $('.custom-div').empty();

    var data = {
      'departure': $('#departure').val(),
      'arrival': $('#arrival').val(),
      };

    $.ajax({
          type: 'GET',
          url: 'http://goyaar.testingwebsitedesign.com/fetchApiRideData',
          crossDomain: true,
          data: data,
          cache: false,
          datatype: 'jsonp',

          success: function(data) {
          parsedData = $.parseJSON(data);
          str = '';
          $.each(parsedData, function(index, value) {
              //$("#servers").text($("#servers").text() + " " + value.servername);
              //alert(value.person_name);
               str += '<div class="col-sm-6 custom-list"><span id="date">'+value.departure_date+'<p></p></span><br><span id="label">Price : </span><span id="price">'+value.price+'</span><br><span id="label">Person Name : </span><span id="person-name">'+value.person_name+'</span><br><span id="label">Departure : </span><span id="departure">'+value.departure+'</span><br><span id="label">Arrival : </span><span id="arrival">'+value.arrival+'</span><br><span id="label">Stoppovers : </span><span id="stoppovers">'+value.stopovers+'</span><br><span id="label">Max Luggage Size : </span><span id="max-luggage-size">'+value.max_luggage_size+'</span><br><span id="label">Seats : </span><span id="seats">'+value.no_of_seats+'</span><br></div>';
              $('.custom-div').append( str );
          });
          
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