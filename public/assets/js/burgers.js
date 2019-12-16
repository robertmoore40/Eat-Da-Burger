
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");

        var newState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function() {
            // console.log("changed devour to", true);
            // Reload the page to get the updated list
            location.reload();
        });
    });  
})
;


// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//   // $(".change-sleep").on("click", function(event) {
//   $(".change-devour").on("click", function(event) {
//     var id = $(this).data("id");
//     var newDevour = $(this).data("newDevour");
//     // var newSleep = $(this).data("newsleep");

//     var newDevourState = {
//       devour: newDevour
//       // var newSleepState = {
//       //   sleepy: newSleep
//     };

//     // Send the PUT request.
//     $.ajax("/api/burgers/" + id, {
//     // $.ajax("/api/cats/" + id, {
//       type: "PUT",
//       data: newDevourState
//       // data: newSleepState
//     }).then(
//       function() {
//         // console.log("changed sleep to", newSleep);
//         console.log("changed sleep to", newDevour);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   // $(".create-form").on("submit", function(event) {
//   //   // Make sure to preventDefault on a submit event.
//   //   event.preventDefault();

//   //   var newBurger = {
//   //     // var newCat = {
//   //     name: $("#ca").val().trim(),
//   //     devour: $("[name=devour]:checked").val().trim()
//   //     // sleepy: $("[name=sleepy]:checked").val().trim()
//   //   };

//   //   // Send the POST request.
//   //   $.ajax("/api/burgers", {
//   //     // $.ajax("/api/cats", {
//   //     type: "POST",
//   //     data: newBurger
//   //     // data: newCat
//   //   }).then(
//   //     function() {
//   //       console.log("created new burger");
//   //       // Reload the page to get the updated list
//   //       location.reload();
//   //     }
//   //   );
//   // });

//  // Add a new burger.
//  $(".create-form").on("submit", function(event) {
//   event.preventDefault();

//   var newBurger = {
//       burger_name: $("#newburger").val().trim(),
//       devoured: 0
//   };

//   // Send the POST request.
//   $.ajax("/api/burgers", {
//       type: "POST",
//       data: newBurger
//   }).then(function() {
//       console.log("Added new burger");
//       // Reload the page to get the updated burger list.
//       location.reload();
//   });
// });

//   // $(".delete-cat").on("click", function(event) {
//   $(".delete-burger").on("click", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     // $.ajax("/api/cats/" + id, {
//     $.ajax("/api/burgers/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         // console.log("deleted cat", id);
//         console.log("deleted burger", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// });