<?php
header('Access-Control-Allow-Origin: *');

$tempPath = $_FILES['file']['tmp_name'];
$actualName = $_FILES['file']['name'];

$actualPath = dirname(__FILE__).DIRECTORY_SEPARATOR."temp".DIRECTORY_SEPARATOR.$actualName;
move_uploaded_file($tempPath, $actualPath);