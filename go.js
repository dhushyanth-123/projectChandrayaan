var menu_bar_toogle = document.getElementById("menu_bar_toogle");
var sidebar = document.getElementById("side_bar");

var main_home = document.getElementById("main_home");
var main_aboutus = document.getElementById("main_aboutus");
var main_img = document.getElementById("image_gallery");
var main_set = document.getElementById("settings_main");
var main_com = document.getElementById("comment");

main_home.style.display = "block";

var home_nav_bar = document.getElementById("home_nav_bar");
var about_us_nav_bar = document.getElementById("about_us_nav_bar");
var img_nav_bar =document.getElementById("img_nav_bar");
var set_nav_bar = document.getElementById("set_nav_bar");
var comment_us_nav_bar = document.getElementById("comment_us_nav_bar");

var home_up = document.getElementById("home_up");
var about_up = document.getElementById("about_up");
var set_up = document.getElementById("settings_up");

home_up.addEventListener("click",function () {
   main_aboutus.style.display = "none";
   main_img.style.display="none";
   main_set.style.display="none";
   main_com.style.display="none";
   main_home.style.display = "block";
});

about_up.addEventListener("click",function(){
   main_home.style.display = "none";
   main_img.style.display="none";
   main_set.style.display="none";
   main_com.style.display="none";
   main_aboutus.style.display = "block";
});

set_up.addEventListener("click",function(){
   main_home.style.display = "none";
   main_img.style.display="none";
   main_set.style.display="block";
   main_com.style.display="none";
   main_aboutus.style.display = "none";
});

img_nav_bar.addEventListener("click",function(){
   main_home.style.display = "none";
   main_img.style.display="block";
   main_set.style.display="none";
   main_com.style.display="none";
   main_aboutus.style.display = "none";
});
set_nav_bar.addEventListener("click",function(){
   main_home.style.display = "none";
   main_img.style.display="none";
   main_set.style.display="block";
   main_com.style.display="none";
   main_aboutus.style.display = "none";
});
comment_us_nav_bar.addEventListener("click",function(){
   main_home.style.display = "none";
   main_img.style.display="none";
   main_set.style.display="none";
   main_com.style.display="block";
   main_aboutus.style.display = "none";
});

about_us_nav_bar.addEventListener("click",function(){
   main_home.style.display = "none";
   main_img.style.display="none";
   main_set.style.display="none";
   main_com.style.display="none";
   main_aboutus.style.display = "block";
});

home_nav_bar.addEventListener("click",function(){
   main_aboutus.style.display = "none";
   main_img.style.display="none";
   main_set.style.display="none";
   main_com.style.display="none";
   main_home.style.display = "block";
});



menu_bar_toogle.addEventListener("click",function(){
 if (sidebar.style.visibility=="hidden"){
    sidebar.style.visibility = "visible"
 }
 else{
    sidebar.style.visibility= "hidden"
 }
});

