$(function(){

   var form = $('#cvForm');
   var formMessages = $('#form-messages');
  // Set up an event listener for the contact form.
   $('#cvForm').submit(function(event) {
    // Stop the browser from submitting the form.
       event.preventDefault();
       // Submit the form using AJAX.

       // Serialize the form data.
        var formData = $(form).serialize();

        $.ajax({
            type: 'POST',
            url: 'mailer.php',
            data: formData
        })
        .done(function(response) {
              // Make sure that the formMessages div has the 'success' class.
              $(formMessages).removeClass('error');
              $(formMessages).addClass('success');

              // Set the message text.
              $(formMessages).text(response);

              // Clear the form.
              $('#name').val('');
              $('#email').val('');
              $('#message').val('');
          })
          .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });

    // TODO
    });
});
