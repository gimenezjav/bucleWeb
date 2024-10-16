<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "data@bucleia.com";
    $to = "gimenez.javier.a@gmail.com";
    $subject = "Nuevo contacto a traves de Formulario";
    
    $email = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $message = $_REQUEST['message'];
    $body = "NOMBRE: $name\nE-MAIL: $email\nMENSAJE: $message";
    
    $headers = "From:" . $from;
    mail($to,$subject,$body, $headers);
    echo "The email message was sent.";
?>
