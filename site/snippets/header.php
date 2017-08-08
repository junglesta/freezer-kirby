<!DOCTYPE html>
<html lang="it" itemscope itemtype="http://schema.org/Article">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	
		<!-- sharing Open Graph-->
	<meta property="og:url" content="<?php echo $page->url() ?>" >
	<meta property="og:type" content="article">
	<meta property="og:title" content="<?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?>" >
	<meta property="og:description" content="<?php echo excerpt($page->text(), 60) ?>">
	<meta property="og:image" content="<?php echo url('assets/social/freezer-'.$page->icon().'.jpg') ?>" >
	<meta property="og:image:type" content="image/jpeg" >
	<meta property="og:image:width" content="600" >
	<meta property="og:image:height" content="240" >
	<meta property="og:locale" content="it_IT"> 

	<meta property="og:site_name" content="Freezer" >
	<link rel='image_src' href='<?php echo url('assets/social/freezer-'.$page->icon().'.jpg') ?>' />


	<title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>

	<meta name="description" content="<?php echo excerpt($page->text(), 60) ?>">
	<meta name="keywords" content="<?php echo $site->keywords()->html() ?>">
	<meta name="robots" content="INDEX,FOLLOW" />
	<link rel="canonical" href="<?php echo $page->url() ?>">

	<!-- Add to homescreen for Chrome on Android -->
	<meta name="mobile-web-app-capable" content="yes">

	<!-- Add to homescreen for Safari on iOS -->
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-title" content="Freezer">

	<!-- icons -->
	<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
	<link rel="icon" type="image/png" href="/favicon-192x192.png" sizes="192x192">
	<link rel="icon" type="image/png" href="/favicon-160x160.png" sizes="160x160">
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
	<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
	<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
	<meta name="msapplication-TileColor" content="#dddddd">
	<meta name="msapplication-TileImage" content="/mstile-144x144.png">

	<!-- Twitter Cards -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="<?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?>" >
	<meta name="twitter:description" content="<?php echo excerpt($page->text(), 60) ?>">
	<meta name="twitter:image:src" content="<?php echo url('assets/social/freezer-'.$page->icon().'.jpg') ?>">
	<meta name="twitter:site" content="@rokmatwit"> 


	<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400' rel='stylesheet' type='text/css'>

	<?php echo css('assets/css/main.css') ?>

</head>
<body>
