DROP DATABASE IF EXISTS weapons_dev;

CREATE DATABASE weapons_dev;

\c weapons_dev;

CREATE TABLE weapons (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    notes TEXT,
    quote TEXT,
    quality VARCHAR,
    type TEXT NOT NULL,
    DPS INT NOT NULL,
    class TEXT NOT NULL,
    img VARCHAR
);