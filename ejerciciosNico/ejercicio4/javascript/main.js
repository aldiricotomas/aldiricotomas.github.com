var popup = $('#popup');

$(document).ready(function(){
    showPopup();
    hidePopup();
})

function showPopup(){
    popup.css("display","flex");
}
function hidePopup(){
    $('.cerrar').click(function(){
        $('#popup').css("display", "none");
        setTimeout(() => {
            location.href = "/";
        }, 500);
    });
}