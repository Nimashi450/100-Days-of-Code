<?php 

define('DB_SERVER','localhost');
define('DB_USER','root');
define('DB_PASSWORD','');
define('DB_NAME','projecttest');

$conn = mysqli_connect(DB_SERVER,DB_USER,DB_PASSWORD,DB_NAME);


if(!$conn){
    die('Could not connected to database!!: '.mysql_error());
}
// else
//     echo "Database is successfully connected!!!";
?>