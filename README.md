# news-api

This is a simple project that represents a back-end to many projects that want to save their posts.

The project is using [PostgreSQL](https://www.postgresql.org/) database.

## Database

Creating database:

```
create database message_api;
```

Creating tables:

```
create table project (
  uuid varchar(40) primary key,
  name varchar(50) not null
);

create table post (
  id serial primary key,
  project_uuid varchar(40) not null,
  post varchar(200) not null,
  constraint fk_project foreign key(project_uuid) references project(uuid)
);

```

---
## API

The back-end expose three end-points:


### Generate UUID

```
POST localhost:3000/api/v1/news/
```

The payload must be:

    {
        "projectName": <string>
    }


### Save New Post

```
POST localhost:3000/api/v1/news/:uuid
```

The payload must be:

    {
        "post": <string>
    }


### Retrieve Posts

```
GET localhost:3000/api/v1/news/:uuid
```

### Delete Post

```
DELETE localhost:3000/api/v1/news/:uuid/:post_id
```
