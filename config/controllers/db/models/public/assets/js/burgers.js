$(function () {
  $(".create-form").on("click", function (event) {
    event.preventDefault();
    var newBurger = {
      name: $("#add-burger").val().trim(),
    };
    // Send POST request
    $.ajax("/burgers/", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      location.reload();
    });
  });

  $(".devour").on("click", function (event) {
    var id = $(this).data("id");
    var newState = {
      devoured: true,
    };

    $.ajax(`/burgers/${id}`, {
      type: "PUT",
      data: newState,
    }).then(function () {
      console.log("changed burger to ", true);
      location.reload();
    });
  });

  $(".delete").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax(`/burgers/${id}`, {
      type: "DELETE",
    }).then(function () {
      console.log("burger removed");
      location.reload();
    });
  });
});
