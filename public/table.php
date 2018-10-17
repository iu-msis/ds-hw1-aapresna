<!DOCTYPE html>
<html>
<head>
  <title>Table with database</title>
</head>
<body>
  <table>
    <tr>
      <th>id</th>
      <th>comment</th>
    </tr>
    <?php
     $conn = mysqli_connect("local host", "root", "", "hw1");
     if ($conn-> connect_error) {
       die("Connection failed:" . $conn-> connect_error);
     }

     $sql = "SELECT id, comment from Homework6";
     $result = $conn-> query($sql);

     if ($result-> num_rows > 0) {
       while ($row = $result-> fetch_assoc()) {
         echo "<tr><td>" . $row["id"] . "</td><td>" . $row["comment"] . "</td></tr>";

       }
       echo "</table>";
     }
     else {
       echo "0 result";
     }
    ?>
  </table>
</body>
</html>
