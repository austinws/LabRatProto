<?php
header('Content-Type: text/html; charset=utf-8');
?>

<!DOCTYPE html>
<html>
<head>
<title>Profile Creation Response</title>
</head>
<body>

<?php
// Access form data
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
// ... (access other fields)

// Process and store data (e.g., in a database or file)
// ...

// Optionally, send a response back to the client
echo "Profile created successfully!"; // Or a more structured response
?>

</body>
</html>
