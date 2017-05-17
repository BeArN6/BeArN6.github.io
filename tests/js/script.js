$(document).ready(function(){
	$(".question_m,.question_w,.question_cont_m,.question_cont_w")
	.addClass("hideQuestion");
	$(".male").click(function(){
		$(".question_cont_m,.question_m_1").removeClass("hideQuestion").addClass("activeQuestion");
		$(".test_cont").addClass("hideQuestion");
	});
	$(".female").click(function(){
		$(".question_cont_w,.question_w_1").removeClass("hideQuestion").addClass("activeQuestion");
		$(".test_cont").addClass("hideQuestion");
	});
	var nubmerOfQuestions = $(".question_m");
	var answerA = [];
	var answerB = [];
	var answerC = [];
	var answerD = [];
		$(".question_m .answer").not(".question_m_10 .answer").click(function(){
			$(this).closest(".question_m").addClass("hideQuestion").removeClass("activeQuestion");
			$(this).closest(".question_m").next(".question_m").removeClass("hideQuestion").addClass("activeQuestion");
			var valueA = $(this).attr("data-value");
			if(valueA == "a"){
				answerA[answerA.length] = "a";
			}
			if(valueA == "b"){
				answerB[answerB.length] = "b";
			}
			if(valueA == "c"){
				answerC[answerC.length] = "c";
			}
			if(valueA == "d"){
				answerD[answerD.length] = "d";
			}
		});
		$(".question_m_10 .answer").click(function(){
			$(this).closest(".question_m").addClass("hideQuestion").removeClass("activeQuestion");
			$(this).closest(".question_m").next(".question_m").removeClass("hideQuestion").addClass("activeQuestion");
			var valueA = $(this).attr("data-value");
			if(valueA == "a"){
				answerA[answerA.length] = "a";
			}
			if(valueA == "b"){
				answerB[answerB.length] = "b";
			}
			if(valueA == "c"){
				answerC[answerC.length] = "c";
			}
			if(valueA == "d"){
				answerD[answerD.length] = "d";
			}
			var a = answerA.length;
			var b = answerB.length;
			var c = answerC.length;
			var d = answerD.length;
			if(a > b && a > c && a > d){
				$(".answer_cont").prepend("<h1>Результат 1</h1>");
			}
			if(b > a && b > c && b > d){
				a$(".answer_cont").prepend("<h1>Результат 2</h1>");
			}
			if(c > a && c > b && c > d){
				$(".answer_cont").prepend("<h1>Результат 3</h1>");
			}
			if(d > a && d > b && d > c){
				$(".answer_cont").prepend("<h1>Результат 4</h1>");
			}
		});
		$(".question_w .answer").not(".question_w_10 .answer").click(function(){
			$(this).closest(".question_w").addClass("hideQuestion").removeClass("activeQuestion");
			$(this).closest(".question_w").next(".question_w").removeClass("hideQuestion").addClass("activeQuestion");
			var valueA = $(this).attr("data-value");
			if(valueA == "a"){
				answerA[answerA.length] = "a";
			}
			if(valueA == "b"){
				answerB[answerB.length] = "b";
			}
			if(valueA == "c"){
				answerC[answerC.length] = "c";
			}
			if(valueA == "d"){
				answerD[answerD.length] = "d";
			}
		});
		$(".question_w_10 .answer").click(function(){
			$(this).closest(".question_w").addClass("hideQuestion").removeClass("activeQuestion");
			$(this).closest(".question_w").next(".question_w").removeClass("hideQuestion").addClass("activeQuestion");
			var valueA = $(this).attr("data-value");
			if(valueA == "a"){
				answerA[a] = "a";
			}
			if(valueA == "b"){
				answerB[answerB.length] = "b";
			}
			if(valueA == "c"){
				answerC[answerC.length] = "c";
			}
			if(valueA == "d"){
				answerD[answerD.length] = "d";
			}
			var a = answerA.length;
			var b = answerB.length;
			var c = answerC.length;
			var d = answerD.length;
			if(a > b && a > c && a > d){
				$(".answer_cont").prepend("<h1>Результат 1</h1>");
			}
			if(b > a && b > c && b > d){
				a$(".answer_cont").prepend("<h1>Результат 2</h1>");
			}
			if(c > a && c > b && c > d){
				$(".answer_cont").prepend("<h1>Результат 3</h1>");
			}
			if(d > a && d > b && d > c){
				$(".answer_cont").prepend("<h1>Результат 4</h1>");
			}
		});
});