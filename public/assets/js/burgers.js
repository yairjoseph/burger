// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eat-burger").on("click", function(event) {
      var id = $(this).data("id");
      // var newDevour = $(this).data("newDevour");
  
      // var newDevourState = {
      //   devour: newDevour
      // };
      
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        // data: newDevourState
      }).then(
        function(result) {
          console.log(result)
          // console.log("changed devour state to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burg").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });


    $(".throw-up").on("click", function(event) {
      event.preventDefault();
      // Send the DELETE request.
      $.ajax("/api/burgers/", {
        type: "DELETE"
      }).then(
        function() {
          console.log("You just threw up go eat some more!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
