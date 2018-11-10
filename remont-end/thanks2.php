<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1">
	<title>РЕМОНТ КВАРТИР И ПОМЕЩЕНИЙ</title>
	<meta name="description" content="Качественный ремонт квартир и помещений в Санкт-Петербурге. Бесплатный дизайн-проект.">
	<meta name="keywords" content="ремонт квартир под ключ, расчет ремонта, дизайн квартиры, ремонт помещения">
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css" />	
</head>
<body class="loaded">

	<?php

	$mail14 = $_POST['mail14'];
	$phone14 = $_POST['phone14'];
	$mail15 = $_POST['mail15'];
	$phone15 = $_POST['phone15'];
	$mail16 = $_POST['mail16'];
	$phone16 = $_POST['phone16'];
	$mail17 = $_POST['mail17'];
	$phone17 = $_POST['phone17'];


	$mail14 = trim($_POST['mail14']);
	$phone14 = trim($_POST['phone14']);
	$mail15 = trim($_POST['mail15']);
	$phone15 = trim($_POST['phone15']);
	$mail16 = trim($_POST['mail16']);
	$phone16 = trim($_POST['phone16']);
	$mail17 = trim($_POST['mail17']);
	$phone17 = trim($_POST['phone17']);

		// $mailto = "oleh123091973@gmail.com";
		$mailto = "master1spb1@yandex.ru";


	if( isset($_POST['sendForm14']))
	{
		mail($mailto, 'Был запрошен файл прайс листа', "E-mail: ".$mail14.". \r\nТелефон: ".$phone14);

		$subject = "Прайс полного списка работ при ремонте 1 комнатной квартиры компании \"МАСТЕР ремонт квартир и помещений\"";

		$message ="Вы получили прайс лист от компании \"МАСТЕР ремонт квартир и помещений\". Прайс во вложении.";

		$filename = "smeta.pdf";
		$filepath = "docs/smeta.pdf";

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

		mail($mail14,$subject,$multipart,$headers);
	}

	if( isset($_POST['sendForm15']))
	{
		mail($mailto, 'Был запрошен файл книги', "E-mail: ".$mail15.". \r\nТелефон: ".$phone15);

		$subject = "Книга с советами и рекомендациями от компании \"МАСТЕР ремонт квартир и помещений\"";

		$message ="Вы получили книгу от компании \"МАСТЕР ремонт квартир и помещений\". Книга во вложении.";

		$filename = "book.pdf";
		$filepath = "docs/book.pdf";

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

		mail($mail15,$subject,$multipart,$headers);
	}

	if( isset($_POST['sendForm16']))
	{
		mail($mailto, 'Был запрошен файл технического дизайн-проекта', "E-mail: ".$mail16.". \r\nТелефон: ".$phone16);

		$subject = "Пример технического дизайн-проекта  от компании \"МАСТЕР ремонт квартир и помещений\"";

		$message ="Вы получили технический дизайн-проект от компании \"МАСТЕР ремонт квартир и помещений\". Дизайн-проект во вложении.";

		$filename = "tech.pdf";
		$filepath = "docs/tech.pdf";

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

		mail($mail16,$subject,$multipart,$headers);
	}

	if( isset($_POST['sendForm17']))
	{
		mail($mailto, 'Был запрошен файл каталога', "E-mail: ".$mail17.". \r\nТелефон: ".$phone17);

		$subject = "Каталог  от компании \"МАСТЕР ремонт квартир и помещений\"";

		$message ="Вы получили каталог от компании \"МАСТЕР ремонт квартир и помещений\". Каталог во вложении.";

		$filename = "catalog.pdf";
		$filepath = "docs/catalog.pdf";

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

		mail($mail17,$subject,$multipart,$headers);
	}

	?>

	<div class="thanks flex">
		<a href="" class="header__logo">
			<img src="img/logo2.png" alt="">
		</a>
		<h2>Спасибо, ваша заявка принята</h2>
		<h3>Файл выслан на указанную почту</h3>
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
                w.yaCounter50404324 = new Ya.Metrika2({
                    id:50404324,
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
<noscript><div><img src="https://mc.yandex.ru/watch/50404324" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

</body>
</html>