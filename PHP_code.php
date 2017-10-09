<!DOCTYPE html>
<html>
<head>
	
	<title>Retiros</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<link rel="stylesheet" type="text/css" href="style.css">

</head>
<body>

	<div id="cabeza">
		<h2>Su informacion a sido procesada</h2>
	</div>

<?php 

	/*
	*	Si el formulario fue enviado con POST entonces prosiga
	*/
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

		echo "<p>";
		foreach ($_POST as $key => $value ) {
			
			/*
			*	Si un input estaba vacio siga con siguiente valor
			*/
			if(empty($_POST[$key])){
				echo  $key." VACIO<br><br>";
				continue;
			}

			/*
			*	Encuentre y remplace los '_' encontrados en los nombres de los elementos del form
			*/
			for($i=0;$i<substr_count($key, "_");$i++){
				$key = str_replace('_',' ',$key);
			}
			
			/*
			*	Limpiando los valores recibidos
			*/
			$value=verificar($value);

			/*
			*	Imprima por pantalla el formulario
			*/
			echo $key . ": " . $value ."<br><br>";

			
		}
		echo "</p>";
		
	}

?>

<?php function verificar($data){

	/*
	*	Limpiando los valores recibidos
	*/
	$data = trim($data);
  	$data = stripslashes($data);
 	$data = htmlspecialchars($data);
  	
  	return $data;
}

?>

</body>
</html> 