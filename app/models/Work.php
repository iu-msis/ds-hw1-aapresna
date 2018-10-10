<?php
class Work
{
  public $id;
  public $comment;

  public function __construct($row) {
    $this->id = isset($row['id']) ? intval($row['id']) : null;

    $this->comment = ($row['comment']);
  }

  public function create() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    $sql = 'INSERT Homework6 (comment)
            VALUES (?)';

    $statement = $db->prepare($sql);
    $success = $statement->execute([
      $this->comment
    ]);

    $this->id = $db->lastInsertID();
  }

  public static function getWorkById(int $Id) {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    // 2. Prepare the query
    $sql = 'SELECT * FROM Homework6';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute(
        [$Id]
    );
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      // 4.a. For each row, make a new work object
      $workItem =  new Work($row);
      array_push($arr, $workItem);
    }
    return $arr;
  }

}
