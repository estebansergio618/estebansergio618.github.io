<?php 
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$asunto = "WEB PERSONAL SERGIO, ".$_POST['asunto'];
    $telefono = $_POST['telefono'];
	$mensaje = "Nombre: ".$nombre."<br> Email: $email<br> Mensaje:".$_POST['mensaje'];

	if(@mail('semunoz@dc.uba.ar', $asunto, $mensaje)){
		echo "<h1>Enviado</h1>";
	}
 ?>