<?php
header('Access-Control-Allow-Origin: *');
$dir = __DIR__.'/temp';
$scan_dir = scandir($dir);
$files = array_diff($scan_dir, array('.', '..', 'Thumbs.db'));
echo json_encode(array('files' => $files));