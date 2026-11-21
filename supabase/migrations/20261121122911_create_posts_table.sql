CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(30) NOT NULL UNIQUE,
    message VARCHAR(280) NOT NULL,

    CONSTRAINT username_min_length
        CHECK (LENGTH(username) >= 3),

    CONSTRAINT message_min_length
        CHECK (LENGTH(message) >= 5)
);