CREATE TABLE products (
    productId INT AUTO_INCREMENT PRIMARY KEY,
    productName VARCHAR(100) NOT NULL,
    productDescription TEXT,
    price DECIMAL(10, 2) NOT NULL,
    inStock INT NOT NULL,
    created At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)