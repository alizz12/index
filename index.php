<?php
// Specify the target URL
$redirect_url = 'https://google.com';

// Perform the redirect
header("Location: $redirect_url");
exit; // Ensure that subsequent code is not executed
?>
