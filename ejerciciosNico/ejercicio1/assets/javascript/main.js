var popup = $('#popup');

$(document).ready(function(){
    showPopup();
    hidePopup();
    /* $("body").click(function(){
        if (popup.css("display") == "none")
            showPopup();
        else
            hidePopup();
    }); */
})


function showPopup(){
    popup.css("display","block");
}
function hidePopup(){
    $('.cerrar').click(function(){
        $('#popup').css("display", "none");
        setTimeout(() => {
            location.href = "/";
        }, 500);
    });
}
