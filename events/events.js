// Write all your JavaScript and JQuery code in this file! :)
/* START PROVIDED CODE */
function randomX() {
  return Math.random() * $(window).width();
}
$("#moveButton").on("click", function(){
	var number =randomX();
	var number2=randomY();
	$("#message").css("left",number);
	$("#message").css("top",number2);

})
function randomY() {
  return Math.random() * $(window).height();
}
/* END PROVIDED CODE */

// Write your code below this line :)
