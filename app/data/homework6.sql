
DROP TABLE IF EXISTS Homework6;
CREATE TABLE Homework6 (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comment TEXT NOT NULL
);

-- Insert some rows in the table.
INSERT INTO Homework6 (comment)
VALUES ('I have something important to say'
);

INSERT INTO Homework6 (comment)
VALUES ('D&S is awesome'
);

INSERT INTO Homework6 (comment)
VALUES (':)'
);
