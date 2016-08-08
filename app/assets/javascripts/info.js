$(document).ready(function () {
    var datasource
    $.ajax({
        url: "http://localhost:3000/api/v1/books",
        method: "GET",
        headers: {
            "access-token": getCookie("access-token"),
            "client": getCookie("client"),
            "uid": getCookie("uid")
        },
        async: false,
        success: function (data) {
            datasource = data
        }
    })

    if (datasource.length > 50) {
        $("#bodyContent.container").append(
            "  <div class=\"row\">" +
            "    <div class=\"col-lg-12 col-sm-12\">" +
            "      <div class=\"well\">" +
            "        <p style=\"text-align: center\">admin@gmail.com<\/p>" +
            "      <\/div>" +
            "    <\/div>" +
            "  <\/div>"
        )
    }else
    {
        $("#bodyContent.container").append(
            "  <div class=\"row\">" +
            "    <div class=\"col-lg-12 col-sm-12\">" +
            "      <div class=\"well\">" +
            "        <p style=\"text-align: center\">"+datasource[0].owner+"<\/p>" +
            "      <\/div>" +
            "    <\/div>" +
            "  <\/div>"
        )
    }


    var i = 0
    while (i < datasource.length) {
        var strVar = "";
        strVar += "<div class=\"row\">";
        strVar += "    <div class=\"col-lg-2 col-sm-2\">";
        strVar += "      <div class=\"well\">";
        strVar += "        <p><b>title<\/b><\/p>";
        strVar += "        <p>" + datasource[i].title + "<\/p>";
        strVar += "      <\/div>";
        strVar += "    <\/div>";
        strVar += "    <div class=\"col-lg-2 col-sm-2\">";
        strVar += "      <div class=\"well\">";
        strVar += "        <p><b>author<\/b><\/p>";
        strVar += "        <p>" + datasource[i].author + "<\/p><\/div>";
        strVar += "    <\/div>";
        strVar += "    <div class=\"col-lg-8 col-sm-8\">";
        strVar += "      <div class=\"well\">";
        strVar += "        <p><b>content<\/b><\/p>";
        strVar += "        <p>" + datasource[i].content + "<\/p><\/div>";
        strVar += "    <\/div>";
        strVar += "  <\/div>";

        $("#bodyContent.container").append(strVar)
        i++;
    }

    $("#btnlogout").click(function () {
        $.ajax({
            url: "/api/v1/sign_out",
            method: "DELETE",
            datatype: 'json',
            headers: {
                "access-token": getCookie("access-token"),
                "client": getCookie("client"),
                "uid": getCookie("uid")
            },
            async: false,
            success: function () {
                window.location.href = "/demo"
            }
        });
    });
    console.log(datasource)
})