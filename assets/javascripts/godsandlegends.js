var API = "http://localhost:3000";

$(document).ready(function(){
  $( "#tabs" ).tabs();
  
  $('form').on('submit', function(event){
    event.preventDefault();
  });
  
  var handleError = function(){
    $('#latest-posts').append('<p class="post">Something went wrong. Try again later</p>');
  }
  
  var getAllDomains = function() {
    return $.ajax({
      url: API + '/api/v1/domains',
      method: 'GET',
    }).done(function(data) {
      debugger
      console.log(data);
      for(i = 0; data.length; i++) {
        $('#latest-domains').append('<p class="domain">' + data[i].name + '</p>');
      }
    }).fail(function() {
      handleError();
    })
  }
  
  $('button[name="button-fetch"]').on('click', getAllDomains);
});