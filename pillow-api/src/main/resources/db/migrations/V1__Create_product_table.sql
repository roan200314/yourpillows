CREATE TABLE products (
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          name VARCHAR(255) NOT NULL,
                          description VARCHAR(500),
                          price DECIMAL(10, 2) NOT NULL,
                          category VARCHAR(255) NOT NULL,
                          stockQuantity INT NOT NULL,
                          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
                          imageUrl VARCHAR(255) NOT NULL
);
