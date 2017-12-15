<?php
	
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "wandering_leaf_db";

	$international = $_REQUEST["international"];
	$national = $_REQUEST["national"];
	$oneday = $_REQUEST["oneday"];
	$birding = $_REQUEST["birding"];
	$corporate = $_REQUEST["corporate"];
	$customized = $_REQUEST["customized"];

	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error)
	{
		echo "Unable to connect to server, please try again later";
	}
	else
	{
		$sql = "";

		if ($international == "no" and 
			$national == "no" and
			$oneday == "no" and
			$birding == "no" and
			$corporate == "no" and
			$customized == "no")
		{
			$sql = "SELECT name, price, description, type from camps;";
		}
		else
		{
			$sql = "SELECT name, price, description, type from camps where (international = '$international' and international = 'yes') or
																			(national = '$national' and national = 'yes') or
																			(birding = '$birding' and birding = 'yes') or
																			(oneday = '$oneday' and oneday = 'yes') or
																			(customized = '$customized' and customized = 'yes') or
																			(corporate = '$corporate' and corporate = 'yes');";

		}

		$result = mysqli_query($conn, $sql);

		$num = mysqli_num_rows($result);

		

		for ($i = 0; $i < $num; $i++)
		{
			$row = mysqli_fetch_assoc($result);
			echo '
				<div class="camp">
					<img src="res\temp.jpg">
					<h3 class="camp-name">' . $row["name"] . '</h3>
					<h3 class="camp-type">'. $row["type"] .'</h3>
					<h3 class="camp-price">Price: '. $row["price"] . '</h3>
					<p align="justify">
						' . $row["description"] . '
						<a href="">more...</a>
					</p>
				</div>
			';
		}

		

	}

?>