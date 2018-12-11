<!DOCTYPE html>
<html>
<head>
	<title>My Shop</title>	
	<link rel="stylesheet" href="style.css">
	<meta charset="utf-8">
	<script language="javascript" type="text/javascript" src="script.js"></script>
</head>
</head>
<header class="header">
	<div class="header__title">
		<h3> My Shop </h3>
	</div>
	<nav class="header__nav">
		<ul>
			<li><button onclick="afficherProduits()" >Product</button></li>
			<li><button onclick="afficherPanier()" >Cart</button></li>
			<li><p class="panierTotal" id="panierTotal">(0)</p></li>
		</ul>
	</nav>
</header>