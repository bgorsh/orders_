<?php
// Получение данных из POST-запроса
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// Формирование письма
$to = 'gorshunov65@inbox.ru';
$subject = 'Новый заказ с сайта';
$body = "Имя: $name\nEmail: $email\nТелефон: $phone";

// Отправка письма функцией mail
if (mail($to, $subject, $body)) {
  $response = array('success' => true);
} else {
  $response = array('success' => false);
}

// Возвращаем результат обратно в JavaScript-ко
$message = 'Спасибо за заказ, я Вам перезвоню!';
echo '<h1 style="width: 100%;
font-family: sans-serif; 
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 68px; 
text-align: center;">' . $message . '</h1>';
?>
