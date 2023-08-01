CREATE TABLE
    "user" (
        "id" uuid PRIMARY KEY,
        "name" varchar NOT NULL,
        "last_name" varchar NOT NULL,
        "password" varchar NOT NULL,
        "email" varchar NOT NULL,
        "phone_number" varchar NOT NULL,
        "birth_day" DATE NOT NULL,
        "country" varchar NOT NULL,
        "active" boolean DEFAULT true,
        "job_title" varchar,
        "about_me" text,
        "role" varchar DEFAULT 'admin'
    );

CREATE TABLE
    "skills" (
        "id" uuid PRIMARY KEY,
        "title" varchar NOT NULL,
        "icon" varchar,
        "user_id" uuid
    );

CREATE TABLE
    "projects" (
        "id" uuid PRIMARY KEY,
        "title" varchar NOT NULL,
        "images" varchar,
        "description" text,
        "links" varchar,
        "user_id" uuid
    );

CREATE TABLE
    "projects_skills" (
        "id" uuid PRIMARY KEY,
        "projects_id" uuid,
        "skills_id" uuid
    );

CREATE TABLE
    "social_media" (
        "id" uuid PRIMARY KEY,
        "title" varchar,
        "link" varchar,
        "icon" varchar,
        "user_id" uuid
    );

CREATE TABLE
    "category"{"id" uuid PRIMARY KEY,
    "title" varchar NOT NULL,
};

CREATE TABLE
    "post" (
        "id" uuid PRIMARY KEY,
        "title" varchar NOT NULL,
        "brief" varchar NOT NULL,
        "content" text NOT NULL,
        "user_id" uuid,
        "category_id" uuid
    );

ALTER TABLE "skills"
ADD
    FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "projects"
ADD
    FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "projects_skills"
ADD
    FOREIGN KEY ("projects_id") REFERENCES "projects" ("id");

ALTER TABLE "projects_skills"
ADD
    FOREIGN KEY ("skills_id") REFERENCES "skills" ("id");

ALTER TABLE "social_media"
ADD
    FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "post"
ADD
    FOREIGN KEY ("author_id") REFERENCES "user" ("id");

ALTER TABLE "post"
ADD
    FOREIGN KEY ("category_id") REFERENCES "category" ("id");

``` 