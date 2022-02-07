
<?php 
include_once("db_conn.php");
//include("export_data.php");
//include("header.php"); 
?>

<html>
    <title>exporting into an excel sheet</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <body>
        <h1>Welcome to my page!!!</h2>
        <form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="post">					
			<button type="submit" id="export_data" name='export_data' value="Export to excel" class="btn btn-info">Export to excel</button>
		</form></body>
</html>

