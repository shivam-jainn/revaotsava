$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
    $(this).siblings(".card-header").find(".btn i").html("remove");
    $(this).prev(".card-header").addClass("highlight");
    });
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
    $(this).parent().find(".card-header .btn i").html("remove");
    }).on('hide.bs.collapse', function(){
    $(this).parent().find(".card-header .btn i").html("add");
    });
    });