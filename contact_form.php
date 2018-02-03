<?php
	$file = 'tentativas_contactos.txt';
	// Open the file to get existing content
	$current = file_get_contents($file);
	// Append a new person to the file
	$current .= "/n";
	$current .= "NOME:" + $_POST['name'] + "/n";
	$current .= "EMAIL:" + $_POST['email'] + "/n";
	$current .= "ASSUNTO:" + $_POST['subject'] + "/n";
	$current .= "MENSAGEM:" + $_POST['message'] + "/n";
	// Write the contents back to the file
	file_put_contents($file, $current);
?>
