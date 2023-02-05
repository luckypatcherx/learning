<?php     
$to_email = 'limespacochin@gmail.com';
$subject = 'Enquiry';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$branch = $_POST['place'];
$message = $_POST['treatment'];

$message = 'Name:'.$name.'  Phone:'.$phone.'  Email:'.$email.'  Place:'.$branch.'  Treatment'.$message;
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