<?php     
$to_email = 'limespacochin@gmail.com';
$subject = 'Enquiry';

$name = $_POST['name'];
$lastname = $_POST['lastname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$message = 'Name:'.$name.' Lastname:'.$lastname.' Phone:'.$phone.'  Email:'.$email.'    Message'.$message;
$headers = 'From:'.$email;

         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";

$mail = mail($to_email,$subject,$message,$headers);
if($mail)
{
    header("Location: index.php");
}
else
{
 echo "sorry Please try later !!!";
}

?>