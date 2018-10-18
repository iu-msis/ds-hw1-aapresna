<?php

$work = new TestWork($_POST);

$work->create();

echo json_encode($work);
