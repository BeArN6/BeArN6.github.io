<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1">
	<title>Монтаж дверей в Санкт-Петербурге</title>
	<meta name="description" content="Установка межкомнатных дверей в СПб от 1490 руб! Установка в день заказа. Мастер на час! Гарантия на работу, быстро, без пыли и грязи! Русские мастера. Акции! Работа по оф.договору.">
	<meta name="keywords" content="установка двери, установка двери цена, фурнитура двери, мастер на час">
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
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
		$name8 = $_POST['name8'];
		$email8 = $_POST['email8'];
		$link8 = $_POST['link8'];
		$message8 = $_POST['message8'];
		$mat6 = $_POST['mat6'];
		$constr6 = $_POST['constr6'];

		$phone1 = trim($phone1);
		$phone2 = trim($phone2);
		$phone3 = trim($phone3);
		$phone4 = trim($phone4);
		$phone5 = trim($phone5);
		$phone6 = trim($phone6);
		$phone7 = trim($phone7);
		$name8 = trim($name8);
		$email8 = trim($email8);
		$link8 = trim($link8);
		$message8 = trim($message8);
		$mat6 = trim($mat6);
		$constr6 = trim($constr6);


		// $mailto = "projectmanager2@silverduck.net";
		$mailto = "montaz-dverei@yandex.ru";

        if( isset($_POST['sendForm1']))
        {
            mail($mailto, 'Заявка с блока "УСПЕЙТЕ ЗАКАЗАТЬ ЗА 1490 ₽', "Телефон: ".$phone1);
        }

        if( isset($_POST['sendForm2']))
        {
            mail($mailto, 'Заявка с блока "ОСЕННЯЯ АКЦИЯ', "Телефон: ".$phone2);
        }

        if( isset($_POST['sendForm3']))
        {
            mail($mailto, 'Заявка с блока "МАСТЕР НА ЧАС', "Телефон: ".$phone3);
        }

        if( isset($_POST['sendForm4']))
        {
            mail($mailto, 'Заявка с блока "ЗАКАЖИТЕ УСТАНОВКУ УЖЕ СЕГОДНЯ', "Телефон: ".$phone4);
        }

        if( isset($_POST['sendForm5']))
        {
            mail($mailto, 'Заявка с блока "Получить  консультацию', "Телефон: ".$phone5);
        }

        if( isset($_POST['sendForm6']))
        {
            mail($mailto, 'Заявка с блока "Узнать стоимость', "Телефон: ".$phone6.". \r\nМатериал: ".$mat6.". \r\nКонструкция: ".$constr6);
        }

        if( isset($_POST['sendForm7']))
        {
            mail($mailto, 'Заявка с блока "ДОПОЛНИТЕЛЬНО К УСТАНОВКЕ ДВЕРЕЙ', "Телефон: ".$phone7);
        }

        if( isset($_POST['sendForm8']))
        {
            mail($mailto, 'Заявка с блока "Оставить отзыв', "Имя: ".$name8.". \r\nEmail: ".$email8.". \r\nСсылка: ".$link8.". \r\nОтзыв: ".$message8);
        }

	?>

	<div class="thanks flex">
		<div class="header__logo flex">
			<a href="">Мастер <span>Монтаж</span></a>
		</div>
		<h2>Спасибо, ваша заявка принята</h2>
		<h3>Наш менеджер свяжется с вами в ближайшее время</h3>
		<a href="/">
			<button class="btn">На главную</button>
		</a>
	</div>

	<script type="text/javascript" src="js/jquery-3.0.0.min.js"></script>		
	<script type="text/javascript" src="js/jquery-migrate-1.4.1.min.js" ></script>
	<script type="text/javascript" src="js/custom.js" ></script>

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter50465626 = new Ya.Metrika2({
                    id:50465626,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/tag.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks2");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/50465626" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

</body>
</html>