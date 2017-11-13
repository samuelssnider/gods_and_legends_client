var API = "http://localhost:3000";

$(document).ready(function(){
  $( "#tabs" ).tabs();
  
  $('form').on('submit', function(event){
    event.preventDefault();
  })
  
  var getAllDomains = function() {
    return $.ajax({
      url: API + '/api/v1/domains',
      method: 'GET',
    }).done(function(data) {
      for(i = 0; data.length; i++) {
        $('#latest-posts').append('<p class="post">' + data[i].name + '</p>');
      }
    }).fail(function() {
      handleError();
    })
  }
  
  $('button[name="button-fetch"]').on('click', getAllDomains);
});