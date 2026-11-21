ALTER TABLE posts
DROP CONSTRAINT message_min_length;

ALTER TABLE posts
ADD CONSTRAINT message_min_length
    CHECK (LENGTH(message) = 0 OR LENGTH(message) >= 5);
