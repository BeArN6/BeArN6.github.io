<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1">
	<title>Boat</title>
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="robots" content="noindex,nofollow">
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css" />	
</head>
<body class="loaded">

	<?php 
		$phone1 = $_POST['phone1'];
		$type1 = $_POST['type1'];
		$radio1 = $_POST['radio1'];
		$radio2 = $_POST['radio2'];
		$radio3 = $_POST['radio3'];
		$phone2 = $_POST['phone2'];
		$phone3 = $_POST['phone3'];

		$phone1 = trim($phone1);
		$type1 = trim($type1);
		$radio1 = trim($radio1);
		$radio2 = trim($radio2);
		$radio3 = trim($radio3);
		$phone2 = trim($phone2);
		$phone3 = trim($phone3);

		// $mailto = "projectmanager2@silverduck.net";
		$mailto = "oleh123091973@gmail.com";

		if( isset($_POST['sendForm1']))
        {
            mail($mailto, 'Заявка с блока "REQUEST', "Телефон: ".$phone1);
        }

		if( isset($_POST['sendForm2']))
        {
            mail($mailto, 'Заявка с блока "Заказывая проектирование вы получаете:', "Телефон: ".$phone2.". \r\nType of boat: ".$type1.". \r\n1 col: ".$radio1.". \r\n2 col: ".$radio2.". \r\n3 col: ".$radio3);
        }

        if( isset($_POST['sendForm3']))
        {
            mail($mailto, 'Заявка с блока "-20% FOR CERAMIC PRO', "Телефон: ".$phone3);
        }

	?>

	<div class="thanks flex">
		<div class="header__logo flex j-start">
			<a href="/">LoGO</a>
			<span></span>
			<p>Boat <br> detailing</p>
		</div>
		<h2>Ваша заявка принята!</h2>
		<h3>В ближайшее время с Вами <br>
		свяжется первый освободившийся<br>
		менеджер</h3>
		<a href="/">
			<button class="submit">Вернуться на сайт</button>
		</a>
	</div>

	<script type="text/javascript" src="js/jquery-3.0.0.min.js"></script>		
	<script type="text/javascript" src="js/jquery-migrate-1.4.1.min.js" ></script>
	<!--
	<script type="text/javascript" src="js/components/jquery.fancybox.js" ></script>
	<script type="text/javascript" src="js/components/jquery.formstyler.js" ></script>
	
	<script type="text/javascript" src="js/components/jquery.mCustomScrollbar.js" ></script>
	-->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.js"></script>
	<script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
	<script type="text/javascript" src="js/components/slick.js" ></script>
	<script type="text/javascript" src="js/custom.js" ></script>
</body>
</html>