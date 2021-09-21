<?php
    $date = $_POST['datepicker'];
    $sum = $_POST['sum'];
    $period = $_POST['period'];
    $refill = $_POST['refill'];
    $refillSum = $_POST['refill-sum'];

    if ($date == false){
        echo " Введи, пожалуйста, дату!";
    }elseif($refill == "refill-yes"){
        echo $sum + $refillSum + (($sum + $refillSum) * (0.1 * ($period / 365)))  ,"руб.";
    }else{
        echo $sum + ($sum * (0.1 * ($period / 365)))," руб.";
    }
?>