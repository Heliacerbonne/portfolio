<html>
<head>
<title>Envoi du message</title>
 
<meta http-equiv="refresh" content="1; URL=http://helia-cerbonne.xyz">
</head>
 
<body>
<?php
//déclaration des variables
$nom="";
$prenom="";
$fichier="";
// Si tous les champs sont remplis

//Créations du contenu des fichiers
$nom=$_POST['nom'];
$mail=$_POST['mail'];
$objet=$_POST['objet'];
$message=$_POST['message'];
$message = wordwrap($message, 70, "\r\n");
$ladate = date("d_m_Y");
$heure = date("H_i");
//Création des fichiers
$fichier=$nom."_".$ladate."_".$heure.'.txt';
$fp=fopen("Messages/".$fichier,'at+');
fwrite($fp,"Nom : ".$nom."\r\n"."Mail : ".$mail."\r\n"."Objet : ".$objet."\r\n"."Message : ".$message."\r\n\r\n"."					le ".$ladate." à ".$heure);
// Nettoyage des variables
unset($_POST['nom']);
unset($_POST['mail']);
unset($_POST['objet']);
unset($_POST['message']);
// Confirmation de la réception du message et création du fichier
$texte="Nous avons bien reçu votre message et nous vous répondrons dès que possible.";


?>
</body>
</html>