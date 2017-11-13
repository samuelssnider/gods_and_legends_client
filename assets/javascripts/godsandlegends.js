var API = "http://localhost:3000";

$(document).ready(function(){
  $( "#tabs" ).tabs();
  
  $('form').on('submit', function(event){
    event.preventDefault();
  });
  
  var handleError = function(){
    console.log(API);
    $('#latest-domains').append('<p class="domain">Something went wrong. Try again later</p>');
  }
  
  var getAllDomains = function() {
    return $.ajax({
      url: API + '/api/v1/domains',
      method: 'GET',
    }).done(function(data) {
      for(i = 0; data.length; i++) {
        $('#latest-domains').append('<p class="domain">' + data[i].name + '</p>');
      }
    }).fail(function() {
      handleError();
    })
  }
  
  var getSingleDomain = function() {
    var domainId = $(".show-form input[name='show-id']").val();
    return $.ajax({
      url: API + '/api/v1/domains/' + domainId,
      method: 'GET',
    }).done(function(data) {
      $('#latest-domains').append('<p class="domain">' + data.name + '<p>');
    }).fail(function() {
      handleError();
    })
  }
  
  var createNewDomain = function() {
    var newDomainName = $(".post-form input[name='domain-description']").val();
    
    return $.ajax({
      url: API + '/api/v1/domains',
      method: 'POST',
      data: { name: newDomainName }
    }).done(function(data) {
      $('#latest-domains').append('<p class="domain"> New Domain has been created </p>');
    }).fail(function() {
      handleError();
    })
  }
  
  
  $('button[name="button-fetch"]').on('click', getAllDomains);
  $(".show-form input[type='submit']").on('click', getSingleDomain);
  $(".post-form input[type='submit']").on('click', createNewDomain);

  
});