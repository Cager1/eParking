<?php

    session_start();
    header('location:login.php');

    $con = mysqli_connect('localhost','root');
    mysqli_select_db($con,'users');

    $email = $_POST['email'];
    $pass = $_POST['password'];

    $s = "select * from usertable where email = '$email'";

    $result = mysqli_query($con,$s);

    $num = mysqli_num_rows($result);

    if($num == 1){
        echo "There is an existing account using this mail";
    }else{
        $reg = "insert into usertable(email,password) values ('$email','$pass')";
        mysqli_query($con,$reg);
        echo 'Registration successful';
    }

?>