$(function (){ //$ is same as DOMContentLoaded

    $("#aa").blur(function (event) {//similar to jquery slecter

        $("#navbarSupportedContent").collapse('hide');

    });
    $("navbar-toggler").click(function (event) {
        $(event.target).focus();
    });
});