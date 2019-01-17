<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

//variables
$resquest = json_decode(utf8_encode(file_get_contents("php://input")), true);

$nombre = $resquest["nombre"];
$correo = $resquest["correo"];
$telefono = $resquest["telefono"];
$mensaje = $resquest["mensaje"];


if (isset($nombre) && !empty($nombre) && isset($correo) && !empty($correo) && isset($telefono) && !empty($telefono)){
  $nombre = htmlspecialchars($nombre,ENT_QUOTES);
  $correo = htmlspecialchars($correo,ENT_QUOTES);
  $telefono = htmlspecialchars($telefono,ENT_QUOTES);
  $mensaje = htmlspecialchars($mensaje,ENT_QUOTES);

  if (empty($mensaje)) $mensaje = "Mensaje generado automáticamente";

  $body = "
      <div style='
      width: 400px;
      background-color: #4A86E8;
      color: #2D2D2D;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 3px 3px 5px #000000;
      '>
      <h1 style='text-align: center;'>Portafolio WEB 3.0</h1>
      <p>Nombre: $nombre </p>
      <p>Correo: $correo </p>
      <p>Telefono: $telefono </p>
      <p>Mensaje: $mensaje</p>
      </div>
  ";

  echo $body;
  $mail = new PHPMailer(true);
  try {
      //Server settings
      $mail->SMTPDebug = 0;
      $mail->isSMTP();
      $mail->Host = 'smtp.live.com';
      $mail->SMTPAuth = true;
      $mail->Username = 'disconluis@hotmail.com';
      $mail->Password = 'vivaelamor';
      $mail->SMTPSecure = 'tls';
      $mail->Port = 587;

      //Recipients
      $mail->setFrom('disconluis@hotmail.com', $nombre);
      $mail->addAddress('disconluis@gmail.com', 'Portafolio WEB 3.0');

      //Content
      $mail->isHTML(true);
      $mail->Subject = 'Mensaje de contacto del Portafolio WEB 3.0';
      $mail->Body    =  $body;
      $mail->CharSet = 'UTF-8';

      $mail->send();

  } catch (Exception $e) {
      echo 'Hubo un error al enviar el mensaje: ', $mail->ErrorInfo;
  }
}
