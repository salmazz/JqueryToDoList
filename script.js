console.clear();
$(document).ready(function () {

    $(".tasks").html(localStorage.getItem("listItems"));
    $('.done').html(localStorage.getItem('listDone'));
    $('.add-task').on('submit', function (e) {
        e.preventDefault();


        var newTask = $('input[type = "text"]').val();
        if (newTask) {
            $('<li>' + newTask + '<button class="delete btn btn-info col-md-2"> <i  class="fa fa-trash"></i></button>' + '<input  type="checkbox" class="check col-md-2" id="check">' + "</li>").appendTo('.tasks');
            $('input[type = "text"]').val('');
        }


    });

    $('#button').click(function (e) {
        e.preventDefault();
        newTask = $('input[type = "text"]').val();
        if (newTask === "") {
            alert("You Must Enter SomeThing");


        } else {
            $('<li>' + newTask + '<button class="delete btn btn-info col-md-2 col-sm-2"><i class="fa fa-trash"></i> </button>' + '<input  type="checkbox" class="check col-md-2 col-sm-2 " id="check">' + "</li>").appendTo('.tasks');
            $('input[type = "text"]').val('');
            localStorage.setItem("listItems", $(".tasks").html());

        }

    });
    // Click Delete
    $(".tasks").on("click", '.delete', function (event) {
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
            localStorage.setItem("listItems", $(".tasks").html());


        });
        event.stopPropagation();
    });


    $('.tasks').on('change', '.check', (function () {

        $(this).parent('li').appendTo('.done');
        localStorage.setItem('listDone',$(".done").html());
        localStorage.removeItem("listItems",$('.tasks').html());
        localStorage.setItem('listDone',$(".done").html());
    }));

    $(".done").on("click", '.delete', function (event) {
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
            localStorage.setItem('listDone',$('done').html());
            localStorage.removeItem("listDone",$('.done').html());
            
        
        });
        event.stopPropagation();
    });

});