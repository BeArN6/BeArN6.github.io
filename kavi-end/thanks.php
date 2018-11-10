<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1">
	<title>Кавионти</title>
	<meta name="robots" content="noindex,nofollow">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css" />	
</head>
<body class="loaded">

	<?php 
		$phone1 = $_POST['phone1'];
		$phone2 = $_POST['phone2'];
		$phone3 = $_POST['phone3'];
		$phone4 = $_POST['phone4'];
		$phone5 = $_POST['phone5'];
		$phone6 = $_POST['phone6'];
		$phone7 = $_POST['phone7'];
		$phone8 = $_POST['phone8'];
		$phone9 = $_POST['phone9'];
		$phone10 = $_POST['phone10'];
		$phone11 = $_POST['phone11'];
		$phone12 = $_POST['phone12'];
		$phone13 = $_POST['phone13'];
		$phone14 = $_POST['phone14'];
		$phone15 = $_POST['phone15'];
		$phone16 = $_POST['phone16'];
		$phone17 = $_POST['phone17'];
		$phone18 = $_POST['phone18'];
		$phone19 = $_POST['phone19'];

		$email1 = $_POST['email1'];
		$email2 = $_POST['email2'];
		$email3 = $_POST['email3'];
		$email4 = $_POST['email4'];

		$message3 = $_POST['message3'];
		$message4 = $_POST['message4'];

		$phone1 = trim($phone1);
		$phone2 = trim($phone2);
		$phone3 = trim($phone3);
		$phone4 = trim($phone4);
		$phone5 = trim($phone5);
		$phone6 = trim($phone6);
		$phone7 = trim($phone7);
		$phone8 = trim($phone8);
		$phone9 = trim($phone9);
		$phone10 = trim($phone10);
		$phone11 = trim($phone11);
		$phone12 = trim($phone12);
		$phone13 = trim($phone13);
		$phone14 = trim($phone14);
		$phone15 = trim($phone15);
		$phone16 = trim($phone16);
		$phone17 = trim($phone17);
		$phone18 = trim($phone18);
		$phone19 = trim($phone19);

		$email1 = trim($email1);
		$email2 = trim($email2);
		$email3 = trim($email3);
		$email4 = trim($email4);

		$message3 = trim($message3);
		$message4 = trim($message4);

		$mailto = "projectmanager2@silverduck.net";
		// $mailto = "oleh123091973@gmail.com";

		if( isset($_POST['sendForm1']))
        {
            mail($mailto, 'Заявка с блока "Заказывая проектирование вы получаете:', "Телефон: ".$phone1.". \r\nEmail: ".$email1);
        }

		if( isset($_POST['sendForm2']))
        {
            mail($mailto, 'Заявка с блока "Заказать консультацию', "Телефон: ".$phone2.". \r\nEmail: ".$email2);
        }

        if( isset($_POST['sendForm3']))
        {
            mail($mailto, 'Заявка с блока "Заказать услугу', "Телефон: ".$phone3.". \r\nEmail: ".$email3.". \r\nСообщение: ".$message3);
        }

        if( isset($_POST['sendForm4']))
        {
            mail($mailto, 'Заявка с блока "Задать вопрос', "Телефон: ".$phone4.". \r\nEmail: ".$email4.". \r\nСообщение: ".$message4);
        }

        if( isset($_POST['sendForm5']))
        {
            mail($mailto, 'Заявка с блока "Наружные сети 1', "Телефон: ".$phone5);
        }

        if( isset($_POST['sendForm6']))
        {
            mail($mailto, 'Заявка с блока "Наружные сети 2', "Телефон: ".$phone6);
        }

        if( isset($_POST['sendForm7']))
        {
            mail($mailto, 'Заявка с блока "Наружные сети 3', "Телефон: ".$phone7);
        }

        if( isset($_POST['sendForm8']))
        {
            mail($mailto, 'Заявка с блока "Наружные сети 4', "Телефон: ".$phone8);
        }

        if( isset($_POST['sendForm9']))
        {
            mail($mailto, 'Заявка с блока "Наружные сети 5', "Телефон: ".$phone9);
        }

        if( isset($_POST['sendForm10']))
        {
            mail($mailto, 'Заявка с блока "Наружные сети 6', "Телефон: ".$phone10);
        }

        if( isset($_POST['sendForm11']))
        {
            mail($mailto, 'Заявка с блока "Объект 1', "Телефон: ".$phone11);
        }
        if( isset($_POST['sendForm12']))
        {
            mail($mailto, 'Заявка с блока "Объект 2', "Телефон: ".$phone12);
        }
        if( isset($_POST['sendForm13']))
        {
            mail($mailto, 'Заявка с блока "Объект 3', "Телефон: ".$phone13);
        }
        if( isset($_POST['sendForm14']))
        {
            mail($mailto, 'Заявка с блока "Объект 4', "Телефон: ".$phone14);
        }
        if( isset($_POST['sendForm15']))
        {
            mail($mailto, 'Заявка с блока "Объект 5', "Телефон: ".$phone15);
        }
        if( isset($_POST['sendForm16']))
        {
            mail($mailto, 'Заявка с блока "Объект 6', "Телефон: ".$phone16);
        }
        if( isset($_POST['sendForm17']))
        {
            mail($mailto, 'Заявка с блока "Объект 7', "Телефон: ".$phone17);
        }
        if( isset($_POST['sendForm18']))
        {
            mail($mailto, 'Заявка с блока "Объект 8', "Телефон: ".$phone18);
        }
        if( isset($_POST['sendForm19']))
        {
            mail($mailto, 'Заявка с блока "Объект 9', "Телефон: ".$phone19);
        }
	?>

	<div class="thanks flex">
		<a href="/" class="thanks__logo">
			<img src="img/logo2.png" alt="">
		</a>
		<h2>Ваша заявка принята!</h2>
		<h3>В ближайшее время с Вами <br>
		свяжется первый освободившийся<br>
		менеджер</h3>
		<a href="/">
			<button class="btn btn-r">ВЕРНУТЬСЯ НА САЙТ</button>
		</a>
	</div>

	<script type="text/javascript" src="js/jquery-3.0.0.min.js"></script>		
	<script type="text/javascript" src="js/jquery-migrate-1.4.1.min.js" ></script>
	<!--
	<script type="text/javascript" src="js/components/jquery.fancybox.js" ></script>
	<script type="text/javascript" src="js/components/jquery.formstyler.js" ></script>
	<script type="text/javascript" src="js/components/slick.js" ></script>
	<script type="text/javascript" src="js/components/jquery.mCustomScrollbar.js" ></script>
	-->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.js"></script>
	<script type="text/javascript" src="js/components/slick.js"></script>
	<script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
	<script type="text/javascript" src="js/custom.js" ></script>
</body>
</html>