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
