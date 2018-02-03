<?PHP
$to = "barroselasnow@hotmail.com";
$name = $_POST["name"];
$email = $_POST["mail"]
$subject = $_POST["subject"];
$text = $_POST["text"];

mail($to,$subject,$name,$text,$email);
?>