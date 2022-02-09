<?php
include_once("connection.php");
$sql_query = "SELECT datetime, mois, temp, hum, lux from data_values where datetime > now() - interval 10 minute";
$moist_query = "SELECT datetime, mois from data_values where datetime > now() - interval 10 minute";
$resultset = mysqli_query($db, $sql_query) or die("database error:". mysqli_error($db));
$moist_resultset = mysqli_query($db, $moist_query) or die("database error:". mysqli_error($db));
$developer_records = array();
$mois_record = array();

while( $rows = mysqli_fetch_assoc($resultset) ) {
	$developer_records[] = $rows;
}

while( $mois = mysqli_fetch_assoc($moist_resultset) ) {
	$mois_records[] = $mois;
}

if(isset($_POST["export_data"])) {	
	$filename = "dataset".date('Ymd'). ".xls";			
	header("Content-Type: application/vnd.ms-excel");
	header("Content-Disposition: attachment; filename=\"$filename\"");	
	//header("Content-Type: application/csv;");
	$show_coloumn = false;
	if(!empty($mois_records)) {
	  foreach($mois_records as $record) {
		if(!$show_coloumn) {
		  // display field/column names in first row
		  echo implode("\t", array_keys($record)) . "\n";
		  $show_coloumn = true;
		}
		echo implode("\t", array_values($record)) . "\n";
	  }
	}
	exit;  
}
?>