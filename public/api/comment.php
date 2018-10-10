<?php

require '../../app/common.php';

$Id = intval($_GET['Id'] ?? 0);

if ($Id < 1) {
  throw new Exception('Invalid ID');
}

// 1. Go to the database and get all work associated with the $taskId
$workArr = Work::getWorkById($Id);
// 2. Convert to JSON
$json = json_encode($workArr, JSON_PRETTY_PRINT);
// 3. Print
header('Content-Type: application/json');
echo $json;
