let cart1=0;
let cart2=0;
let cart3=0;
let cart4=0;
let cartTotal=0;




function afficherPanier()
{
	document.getElementById('products').className='hidden';
	document.getElementById('panier').className='panier';
	isEmpty();
}
function afficherProduits()
{
	document.getElementById('panier').className='hidden';
	document.getElementById('products').className='products';
}

function ajouterPanier1()
{
	if (cart1===0)
	{document.getElementById('product1').className='panier__tableau__product';}

	cart1++;
	console.log("Votre panier pour le produit 1 : " + cart1);
	document.getElementById('quantity1').innerHTML = cart1;
	totalPanier();
	isEmpty();

}
function ajouterPanier2()
{
	if (cart2===0)
	{document.getElementById('product2').className='panier__tableau__product';}

	cart2++;
	console.log("Votre panier pour le produit 2 : " + cart2);
	document.getElementById('quantity2').innerHTML = cart2;
	totalPanier();
	isEmpty();
}
function ajouterPanier3()
{
	if (cart3===0)
	{document.getElementById('product3').className='panier__tableau__product';}

	cart3++;
	console.log("Votre panier pour le produit 3 : " + cart3);
	document.getElementById('quantity3').innerHTML = cart3;
	totalPanier();
	isEmpty();
}
function ajouterPanier4()
{
	if (cart4===0)
	{document.getElementById('product4').className='panier__tableau__product';}

	cart4++;
	console.log("Votre panier pour le produit 4 : " + cart4);
	document.getElementById('quantity4').innerHTML = cart4;
	totalPanier();
	isEmpty();
}

function totalPanier()
{
	cartTotal=cart1+cart2+cart3+cart4;
	console.log("votre panier contient au total : " + cartTotal + " éléments");
	document.getElementById("panierTotal").innerHTML = "("+cartTotal+")";
}

function removePanier1()
{
	cart1--;

	if (cart1===0) {
		document.getElementById('product1').className='hidden';
	}
	console.log("Votre panier pour le produit 1 : " + cart1);
	document.getElementById('quantity1').innerHTML = cart1;
	totalPanier();
	isEmpty();
}
function removePanier2()
{
	cart2--;

	if (cart2===0) {
		document.getElementById('product2').className='hidden';
	}
	console.log("Votre panier pour le produit 2 : " + cart2);
	document.getElementById('quantity2').innerHTML = cart2;
	totalPanier();
	isEmpty();
}
function removePanier3()
{
	cart3--;

	if (cart3===0) {
		document.getElementById('product3').className='hidden';
	}
	console.log("Votre panier pour le produit 3 : " + cart3);
	document.getElementById('quantity3').innerHTML = cart3;
	totalPanier();
	isEmpty();
}
function removePanier4()
{
	cart4--;

	if (cart4===0) {
		document.getElementById('product4').className='hidden';
	}
	console.log("Votre panier pour le produit 4 : " + cart4);
	document.getElementById('quantity4').innerHTML = cart4;
	totalPanier();
	isEmpty();
}

function isEmpty()
{
	if (cartTotal===0) {
		document.getElementById('emptyCart').className='panier__tableau__emptyCart';
	}
	else {
		document.getElementById('emptyCart').className='hidden';
	}
}