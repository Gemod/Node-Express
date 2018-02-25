(function () {

  function init(){
    $('#send').click(submitButtonHandler);
  }

  function submitButtonHandler (evt) {
     var testForm = document.getElementById('date');

      //prevent form submission
      evt.preventDefault();
      evt.stopPropagation();

      //$('#post-results-container').fadeOut();
      //$('.ajaxLoader').css('display', 'inline-block');


      //make the AJAX call
      $.ajax({
        url: '/register',
        type: 'POST',
        data: {
          firstName: testForm.firstName.value,
          lastName: testForm.lastName.value
        },
        success: postSuccessHandler
      });
  }

  function postSuccessHandler (jsonData) {
    var $data = $('#post-results-container .data');

    //reset the UI
    $data.html('');
    //$('.ajaxLoader').hide();

    //update the UI with the data returned from the AJAX call 
    $.each(jsonData, function (key, val) {
      $data.append('<li><b>' +  key + '</b>'   + val + '</li>');
    });

    $('#post-results-container').fadeIn();
  };

//init on document ready
$(document).ready(function()
{
	init();
	$('#gepod').click(function()
	{	
		document.location.href='home';
		return false;
	});

});
})();
