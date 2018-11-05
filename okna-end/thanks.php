<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1">
	<title>Пластиковые окна и остекление балконов недорого</title>
	<meta name="description" content="Установка и монтаж окон, остекление балконов в Санкт-Петерурге . Скидки до 60%.">
	<meta name="keywords" content="установка  окон, пластиковые окна спб, окна недорого, рассчитать стоимость окна, акция на окна, остекление балкона недорого">
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<!-- <meta name="yandex-verification" content="d79568041cabdebf" /> -->	
</head>
<body class="loaded">

	<?php 
		$phone1 = $_POST['phone1'];
		$phone3 = $_POST['phone3'];
		$phone4 = $_POST['phone4'];
		$phone5 = $_POST['phone5'];
		$phone6 = $_POST['phone6'];
		$phone7 = $_POST['phone7'];
		$phone8 = $_POST['phone8'];
		$phone17 = $_POST['phone17'];
		$phone18 = $_POST['phone18'];
		$phone9 = $_POST['phone9'];
		$phone10 = $_POST['phone10'];
		$phone12 = $_POST['phone12'];
		$name13 = $_POST['name13'];
		$phone13 = $_POST['phone13'];
		$name14 = $_POST['name14'];
		$phone14 = $_POST['phone14'];
		$link14 = $_POST['link14'];
		$message14 = $_POST['message14'];

		$price1 = $_POST['price1'];
		$name1 = $_POST['name1'];
		$phone2 = $_POST['phone2'];
		$width1 = $_POST['width1'];
		$height1 = $_POST['height1'];
		$typeW1 = $_POST['typeW1'];
		$price2 = $_POST['price2'];
		$name11 = $_POST['name11'];
		$phone11 = $_POST['phone11'];
		$width2 = $_POST['width2'];
		$height2 = $_POST['height2'];
		$typeW2 = $_POST['typeW2'];
		$phone15 = $_POST['phone15'];
		$message15 = $_POST['message15'];
		$phone16 = $_POST['phone16'];
		$message16 = $_POST['message16'];
		$balcon1 = $_POST['balcon1'];
		$balcon2 = $_POST['balcon2'];
		$balcon3 = $_POST['balcon3'];
		$balcon4 = $_POST['balcon4'];
		$balcon5 = $_POST['balcon5'];
		$balcon6 = $_POST['balcon6'];

		$phone1 = trim($phone1);
		$phone3 = trim($phone3);
		$phone4 = trim($phone4);
		$phone5 = trim($phone5);
		$phone6 = trim($phone6);
		$phone7 = trim($phone7);
		$phone8 = trim($phone8);
		$phone17 = trim($phone17);
		$phone18 = trim($phone18);
		$phone9 = trim($phone9);
		$phone10 = trim($phone10);
		$phone12 = trim($phone12);
		$name13 = trim($name13);
		$phone13 = trim($phone13);
		$name14 = trim($name14);
		$phone14 = trim($phone14);
		$link14 = trim($link14);
		$message14 = trim($message14);

		$price1 = trim($price1);
		$name1 = trim($name1);
		$phone2 = trim($phone2);
		$width1 = trim($width1);
		$height1 = trim($height1);
		$typeW1 = trim($typeW1);
		$price2 = trim($price2);
		$name11 = trim($name11);
		$phone11 = trim($phone11);
		$width2 = trim($width2);
		$height2 = trim($height2);
		$typeW2 = trim($typeW2);
		$phone15 = trim($phone15);
		$message15 = trim($message15);
		$phone16 = trim($phone16);
		$message16 = trim($message16);
		$balcon1 = trim($balcon1);
		$balcon2 = trim($balcon2);
		$balcon3 = trim($balcon3);
		$balcon4 = trim($balcon4);
		$balcon5 = trim($balcon5);
		$balcon6 = trim($balcon6);

		// $mailto = "projectmanager2@silverduck.net";
		$mailto = "Info@okno-service78.ru, site.okno@yandex.ru";

		if( isset($_POST['sendForm1']))
        {
            mail($mailto, 'Заявка с блока "Окна со скидкой до 60%', "Телефон: ".$phone1);
        }

        if( isset($_POST['sendForm12']))
        {
            mail($mailto, 'Заявка с блока "Балконы со скидкой до 60%', "Телефон: ".$phone12);
        }

        if( isset($_POST['sendForm2']))
        {
            mail($mailto, 'Заявка с блока "Выберите тип окна', "Телефон: ".$phone2.". \r\nИмя: ".$name1.". \r\nЦена: ".$price1.". \r\nШирина: ".$width1.". \r\nВысота: ".$height1 .". \r\nТип: ".$typeW1);
        }

        if( isset($_POST['sendForm11']))
        {
            mail($mailto, 'Заявка с блока "Выберите тип окна', "Телефон: ".$phone11.". \r\nИмя: ".$name11.". \r\nЦена: ".$price2.". \r\nШирина: ".$width2.". \r\nВысота: ".$height2 .". \r\nТип: ".$typeW2);
        }

        if( isset($_POST['sendForm3']))
        {
            mail($mailto, 'Заявка с блока "Хотите замер на сегодня?', "Телефон: ".$phone3);
        }

        if( isset($_POST['sendForm4']))
        {
            mail($mailto, 'Заявка с блока "Заказать бесплатный замер', "Телефон: ".$phone4);
        }

        if( isset($_POST['sendForm5']))
        {
            mail($mailto, 'Заявка с блока "Остекление ЖК Премьер Палас', "Телефон: ".$phone5);
        }

        if( isset($_POST['sendForm6']))
        {
            mail($mailto, 'Заявка с блока "Остекление ЖК Звездный', "Телефон: ".$phone6);
        }

        if( isset($_POST['sendForm7']))
        {
            mail($mailto, 'Заявка с блока "Остекление ЖК Маршал', "Телефон: ".$phone7);
        }

        if( isset($_POST['sendForm8']))
        {
            mail($mailto, 'Заявка с блока "Остекление ЖК Граф Орлов', "Телефон: ".$phone8);
        }

        if( isset($_POST['sendForm9']))
        {
            mail($mailto, 'Заявка с блока "Остекление бани с бассейном', "Телефон: ".$phone9);
        }

        if( isset($_POST['sendForm17']))
        {
            mail($mailto, 'Заявка с блока "Остекление балкона в жилом доме', "Телефон: ".$phone17);
        }

        if( isset($_POST['sendForm18']))
        {
            mail($mailto, 'Заявка с блока "Холодное остекление лоджии', "Телефон: ".$phone18);
        }

        if( isset($_POST['sendForm10']))
        {
            mail($mailto, 'Заявка с блока "Рассрочка', "Телефон: ".$phone10);
        }

        if( isset($_POST['sendForm13']))
        {
            mail($mailto, 'Заявка с блока "Мы перезвоним через 5 минут', "Телефон: ".$phone13.". \r\nИмя: ".$name13);
        }

        if( isset($_POST['sendForm14']))
        {
            mail($mailto, 'Заявка с блока "Оставьте отзыв', "Телефон: ".$phone14.". \r\nИмя: ".$name14.". \r\nСсылка: ".$link14.". \r\nОтзыв: ".$message14);
        }

        if( isset($_POST['sendForm15']))
        {
            mail($mailto, 'Заявка с блока "Рассчитайте стоимость  теплого остекления', "Телефон: ".$phone15.". \r\nСообщение: ".$message15.". \r\nТип остекления: ".$balcon1.". \r\nЦвет: ".$balcon2.". \r\nОбшивка: ".$balcon3);
        }

        if( isset($_POST['sendForm16']))
        {
            mail($mailto, 'Заявка с блока "Рассчитайте стоимость  холодного остекления', "Телефон: ".$phone16.". \r\nСообщение: ".$message16.". \r\nТип остекления: ".$balcon4.". \r\nЦвет: ".$balcon5.". \r\nОбшивка: ".$balcon6);
        }

	?>

	<div class="thanks flex">
		<a href="" class="header__logo">
			<img src="img/logo.png" alt="">
		</a>
		<h2>Ваша заявка принята!</h2>
		<h3>В ближайшее время с Вами <br>
		свяжется первый освободившийся<br>
		менеджер</h3>
		<a href="/">
			<button class="btn btn_2">ВЕРНУТЬСЯ НА САЙТ</button>
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
	<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript">
    </script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.js"></script>
	<script type="text/javascript" src="js/components/slick.js"></script>
	<script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
	<script type="text/javascript" src="js/custom.js" ></script>
</body>
</html>