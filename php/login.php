<?php

$userName = 	$_POST['username'];
$userPassword = $_POST['password'];

$user_list = array(
	"user23" => "Varsha23!",
	"user1" => "Itshighnoonsomewhere12!",
	"user2" => "Passwordislong23!",
	"user3" => "Pwisshort23!"
);


foreach ($user_list as $key => $value) {
	$login = ($key === $userName && $value === $userPassword) ? true : false;
	if ($login) break;
}


if ($login) {	
	echo "true";
} else {
	echo "false";
}
?>