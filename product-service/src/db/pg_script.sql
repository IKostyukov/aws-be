CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS products (
	id uuid DEFAULT uuid_generate_v4 (),
	title VARCHAR(255) NOT NULL,
	description TEXT,
	price INT,
  thumbnail VARCHAR(255),
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS stocks (
	product_id uuid NOT NULL PRIMARY KEY,
	count INT,
	CONSTRAINT fk_product
	   FOREIGN KEY(product_id) 
	   REFERENCES products(id)
);

INSERT INTO products (title, description, price, thumbnail)
values(
  	'Metal black car',
    'Metal black car descr',
	2,
   	'https://source.unsplash.com/0CZwuZhiC84'
  ),
  (
  	'Blue radio control machine',
    'Short Product Description3',
    10,
    'https://source.unsplash.com/WaEqwDSIeTY'
  ),
  (
  	'Lego car',
    'Short Product Description2',
    23,
    'https://source.unsplash.com/NYbTdrBh740'
  ),
  (	
  	'Red train',
    'Short Product Description7',
    15,
    'https://source.unsplash.com/OpFwGUuuXLk'
  ),
  (
  	'Red lego car',
    'Short Product Description2',
    23,
    'https://source.unsplash.com/drw6RtOKDiA'
  ),
  (
  	'Lego car',
    'Short Product Description4',
    15,
    'https://source.unsplash.com/dQWJ0LajzPc'
  ),
  (
  	'Lego Quadro bike',
    'Short Product Descriptio1',
    23,
    'https://source.unsplash.com/7JzyLiUj0pQ'
  ),
  (
  	'Lego Bike',
    'Short Product Description7',
    15,
    'https://source.unsplash.com/7d6nGlgYAhk'
  );

-- INSERT INTO stocks (product_id, count)
-- values(
--   	'cef4c626-b836-439d-9dcc-4e7d3568c25d',
--   	10
--   ),
--   (
--   	'226fa7b1-51f5-4e0e-91db-7f1f45e638e6',
--   	4
--   ),
--   (
--   	'bd005739-b13e-40d5-99a2-c939f20aef12',
--   	3
--   ),
--   (	
--   	'6b8fc4b1-65b7-4fca-be4c-e8ec2800ebda',
--   	12
--   ),
--   (
--   	'6b681c7f-2f11-4ac5-8d83-181a21c81ec1',
--   	3
--   ),
--   (
--   	'2dd3187a-6ab3-421e-bb30-0c998af25838',
--   	20
--   ),
--   (
--   	'42fd16dd-384c-474b-ba0c-1b016a792e35',
--   	10
--   ),
--   (
-- 	'ffc2c9dc-a128-4db6-8692-84cc81e74dc9',
-- 	3
--   );

-- ALTER TABLE products ADD COLUMN thumbnail VARCHAR(255);

CREATE TABLE IF NOT EXISTS stocks (
    product_id uuid NOT NULL PRIMARY KEY,
    count INT,
    CONSTRAINT fk_product FOREIGN KEY(product_id) REFERENCES products(id)
);

INSERT INTO stocks (product_id, count) SELECT id, floor(random()*(25-10+1))+10 from products;