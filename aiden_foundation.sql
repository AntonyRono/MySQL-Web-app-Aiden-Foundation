CREATE DATABASE IF NOT EXISTS aiden_foundation;
USE aiden_foundation;

CREATE TABLE IF NOT EXISTS members(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    job_title VARCHAR(255) NOT NULL,
    joined_at TIMESTAMP DEFAULT NOW()
   # PRIMARY KEY (first_name, last_name, job_title)
);

SELECT COUNT(*) FROM members;

SELECT * FROM members ORDER BY joined_at DESC LIMIT 2;
