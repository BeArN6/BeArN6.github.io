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

		$email9 = $_POST['email9'];
		$phone9 = $_POST['phone9'];

		$email9 = trim($email9);
		$phone9 = trim($phone9);

		// $mailto = "oleh123091973@gmail.com";
		$mailto = "montaz-dverei@yandex.ru";


		if( isset($_POST['sendForm9']))
		{
			mail($mailto, 'Был запрошен файл прайс листа', "E-mail: ".$email9.". \r\nТелефон: ".$phone9);

			$subject = "Прайс полного списка работ от компании \"МАСТЕР МОНТАЖ\"";

			$message ="Вы получили прайс лист от компании \"МАСТЕР МОНТАЖ\". Прайс во вложении.";

			$filename = "price.pdf";
			$filepath = "docs/price.pdf";

			$fp = fopen($filepath,"rb");
			if (!$fp)
			{ print "Cannot open file";
				exit();
			}
			$file = fread($fp, filesize($filepath));
			fclose($fp);

			$name = $filename; // в этой переменной надо сформировать имя файла (без всякого пути)
			$EOL = "\n"; // ограничитель строк, некоторые почтовые сервера требуют \n - подобрать опытным путём
			$boundary     = "--".md5(uniqid(time()));  // любая строка, которой не будет ниже в потоке данных.
			$headers    = "MIME-Version: 1.0;$EOL";
			$headers   .= "Content-Type: multipart/mixed; boundary=\"$boundary\"$EOL";
			$headers   .= "From: $mailto";

			$multipart  = "--$boundary$EOL";
			$multipart .= "Content-Type: text/html; charset=utf-8$EOL";
			$multipart .= "Content-Transfer-Encoding: base64$EOL";
			$multipart .= $EOL; // раздел между заголовками и телом html-части
			$multipart .= chunk_split(base64_encode($message));

			$multipart .=  "$EOL--$boundary$EOL";
			$multipart .= "Content-Type: application/octet-stream; name=\"$name\"$EOL";
			$multipart .= "Content-Transfer-Encoding: base64$EOL";
			$multipart .= "Content-Disposition: attachment; filename=\"$name\"$EOL";
			$multipart .= $EOL; // раздел между заголовками и телом прикрепленного файла
			$multipart .= chunk_split(base64_encode($file));

			$multipart .= "$EOL--$boundary--$EOL";

			mail($email9,$subject,$multipart,$headers);
		}

	?>

	<div class="thanks flex">
		<div class="header__logo flex">
			<a href="">Мастер <span>Монтаж</span></a>
		</div>
		<h2>Спасибо, ваша заявка принята</h2>
		<h3>Прайс-лист выслан на указанную почту <br>
			<span style="display: inline-block; margin-top: 10px; padding: 6px 20px; border: 1px solid red;">пожалуйста, проверьте СПАМ</span>
		</h3>
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