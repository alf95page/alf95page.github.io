<?php if(isset($_POST['submit'])){ 
$name=$_POST['name']; 
$email=$_POST['email'];
    
//send mail 
$to='barroselasnow@hotmail.com'; 
$subject='New Subscriber'; 
$body='<html> 
<body> 
<h3>Feedback</h3> 
<hr>
    
<p> Name : '.$name.'</p> 
<br> 
    
<p> Email : '.$email.'</p> 

</body> 
    
</html>';
    
$headers ="From:".$name."<".$email.">\r\n";
$headers .="reply-To:".$email."\r\n"; 
$headers .="NINE-Version: 1.0\r\n"; 
$headers .="Content-type: text/html; charset=utf-8";
?>