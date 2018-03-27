<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1">
	<!--Title-->
	<title>Страница Haron</title>
	<!--No index-->
	<meta name=“robots” content="noindex,nofollow">
	<!--Description-->
	<meta name="description" content="Описание страницы"> 
	<!--Favicon-->
	<link rel="icon" type="image/png" href="img/logo2.png">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css" />	
</head>
<body class="loaded">
	<?php
		$fio = $_POST['fio'];
		$email = $_POST['email'];
		$text = $_POST['getmore'];

		$fio = htmlspecialchars($fio);
		$email = htmlspecialchars($email);
		$text = htmlspecialchars($text);

		$fio = urldecode($fio);
		$email = urldecode($email);
		$text = urldecode($text);

		$fio = trim($fio);
		$email = trim($email);
		$text = trim($text);

		mail("oleh123091973@gmail.com", "Информация", "Имя:".$fio.". E-mail: ".$email.". Дополнительно:".$text ,"From: example2@mail.ru \r\n")
		?>
		<div class="modal-cont-2 flex">
			<a href="index.html" class="banner__logo">
				<i></i>
			</a>
			<h2>Спасибо, Ваша <br>заявка принята!</h2>
			<h3>С Вами свяжется первый <br>
			освободившийся менеджер</h3>
			<a href="index.html"><button class="btn">ВЕРНУТЬСЯ НА САЙТ</button></a>
		</div>
		<div class="overlay"></div>
	<script type="text/javascript" src="js/jquery-3.0.0.min.js"></script>		
	<script type="text/javascript" src="js/jquery-migrate-1.4.1.min.js" ></script>
	<!--
	<script type="text/javascript" src="js/components/jquery.fancybox.js" ></script>
	<script type="text/javascript" src="js/components/jquery.formstyler.js" ></script>
	<script type="text/javascript" src="js/components/slick.js" ></script>
	<script type="text/javascript" src="js/components/jquery.mCustomScrollbar.js" ></script>
	-->
	<script type="text/javascript" src="js/components/slick.js"></script>
	<!-- <script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js"></script> -->
	<script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.js"></script>
	<script type="text/javascript" src="js/custom.js" ></script>
</body>

</html>