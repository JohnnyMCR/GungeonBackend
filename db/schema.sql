DROP DATABASE IF EXISTS weapons_dev;

CREATE DATABASE weapons_dev;

\c weapons_dev;

CREATE TABLE weapons (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    notes TEXT NOT NULL,
    quote TEXT NOT NULL,
    quality VARCHAR,
    type TEXT NOT NULL,
    dps INT NOT NULL,
    class TEXT NOT NULL,
    img VARCHAR
);