function dropDown(s){
    //$("body").attr("background-color", "red"); 
    //s = '.' + s;
    //$(s).attr("color", "red");
    //$(s).attr("height", "20px");
    //document.getElementsByClassName(s).setAttribute("visibility", "visible")
}
$(function() {
    var t = ($(document).width()) - (($("#img").outerWidth()) + ($("#menu").outerWidth()));
    $("#menu").attr("left", t);

});
