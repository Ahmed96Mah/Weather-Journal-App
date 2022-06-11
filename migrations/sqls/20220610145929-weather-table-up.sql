CREATE TABLE weather (id SERIAL PRIMARY KEY, loc VARCHAR(50), temp INTEGER, humid INTEGER, wind INTEGER, feel VARCHAR(100));

INSERT INTO weather (loc, temp, humid, wind, feel) VALUES ('Cairo', 41, 60, 12, 'hot');
INSERT INTO weather (loc, temp, humid, wind, feel) VALUES ('seuez', 37, 75, 17, 'warm');
INSERT INTO weather (loc, temp, humid, wind, feel) VALUES ('banha', 39, 60, 5, 'hot');