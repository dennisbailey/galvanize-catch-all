DROP DATABASE IF EXISTS sqlstore;
CREATE DATABASE sqlstore;

\connect sqlstore;

CREATE TABLE stores (
  id serial PRIMARY KEY,
  name VARCHAR(255),
  location VARCHAR(255),
  web_address VARCHAR(255),
  category VARCHAR(255)
);

CREATE TABLE products (
  id serial PRIMARY KEY,
  name VARCHAR(255) UNIQUE,
  description TEXT,
  price DECIMAL,
  store_id integer REFERENCES stores(id)
);
