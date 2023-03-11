<?php
  $nombre = $_POST['name'];
  $correo = $_POST['email'];
  $asunto = $_POST['subject'];
  $mensaje = $_POST['message'];
  
  $destinatario = "yehison363@gmail.com";
  $encabezados = "From: $nombre <$correo>\r\n";
  $encabezados .= "Reply-To: $correo\r\n";
  $encabezados .= "Content-Type: text/html; charset=UTF-8\r\n";
  
  mail($destinatario, $asunto, $mensaje, $encabezados);
  
  header("Location: index.html");
?>