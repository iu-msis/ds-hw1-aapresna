<?php

require '../../app/common.php';

$id = intval($_GET['id'] ?? 0);

if ($id < 1) {
  throw new Exception('Invalid ID');
}

// 1. Go to the database and get all work associated with the $taskId
$workArr = Work::getWorkById($id);
// 2. Convert to JSON
$json = json_encode($workArr, JSON_PRETTY_PRINT);
// 3. Print
header('Content-Type: application/json');
echo $json;
