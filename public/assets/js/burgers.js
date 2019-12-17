$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var createBurger = {
            burger_name: $("#createBurger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: createBurger
        }).then(function() {
            console.log("Added new burger to list");
            location.reload();
            console.log("page reloaded")
            // no need to reset input value if page is reloaded
        });
    });

    $(".eatdaburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredBurgerStatus = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurgerStatus
        }).then(function() {
            console.log("Burger is now devoured");
            location.reload();
            console.log("page reloaded")
        });
    });

    $(".deleteburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
        console.log("burger is now deleted and page reloaded")
    });

})