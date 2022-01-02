var popup = $("#popup");

$(document).ready(function(){
    showPopup();
    hidePopup();
})


function showPopup(){
    popup.css("display","block");
    $("#popup-content").addClass("animate__animated")
    $("#popup-content").addClass("animate__zoomIn")
}
function hidePopup(){
    $('.cerrar').click(function(){
        $('#popup').css("display", "none");
    });
}

