$(document).ready(function () {
    // alert("Here is all about Peking Opera Makeup!");
    $("#text").draggable();
    $("#text").hover(function () {
        $("#makeup").show();
    });
    $("#makeup").click(function () {
        $("#makeup").hide();
    });
    $("#capital").hover(function () {
        $("#rest").css("font-size", "60px");
    });
    $("#capital").dblclick(function () {
        $("#capital").append(" to the rest of china");
    });
    $("#rest").click(function () {
        $("#spread").show();
    });
    $("#dan").hover(function () {
        $("#danIntro").show();
    });
})