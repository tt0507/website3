// When the web browser has fully loaded the page.
$(document).ready(function() {
    // When the user tries to submit the form
    $("#form").on("submit",function(){
      var formValid = true;

      // Feedback control for Name
      if( $("#age").prop("validity").valid ) {
        $("#age_feedback").addClass("hidden");
      } else {
        $("#age_feedback").removeClass("hidden");
        formValid = false;
        return formValid
      }

      // Feedback control for Age
      if( $("#grade").prop("validity").valid ) {
        $("#grade_feedback").addClass("hidden");
      } else {
        $("#grade_feedback").removeClass("hidden");
        formValid = false;
        return formValid
      }

      // Feedback control for Email
      if( $("#email").prop("validity").valid ) {
        $("#email_feedback").addClass("hidden");
      } else {
        $("#email_feedback").removeClass("hidden");
        formValid = false;
        return formValid
      }

      // Feedback for selecting favorite food
      // No feedback for select element as a default element is already selected

      if((form.event[0].checked == false) && (form.event[1].checked == false) && (form.event[2].checked == false) && (form.event[3].checked == false) && (form.event[4].checked == false) && (form.event[5].checked == false)){
        $("#event_feedback").removeClass("hidden");
        formValid = false;
      } else {
        $("#email_feedback").addClass("hidden")
      }

      // Format of code taken from Radio Button Validation in Javascript
      // https://venugopalphp.wordpress.com/radio-button-validation-in-javascript/


      if( $("#improvement").prop("validity").valid ) {
        $("#improvement_feedback").addClass("hidden");
      } else {
        $("#improvement_feedback").removeClass("hidden");
        formValid = false;
        return formValid
      }

      console.log(formValid)
      return formValid
    });
});
