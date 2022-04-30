-- @BLOCK
create table student(id int UNIQUE not null AUTO_INCREMENT, username varchar(30) unique not null, email varchar(40) not null, password VARCHAR(30) not null)

-- @BLOCK
create table teacher(id int UNIQUE not null AUTO_INCREMENT, username varchar(30) unique not null, email varchar(40) not null, password VARCHAR(30) not null)

-- @BLOCK
create table rooms(id int unique not null AUTO_INCREMENT, user_id int not null, room_code VARCHAR(30) not null, h_index int not null, FOREIGN KEY (user_id) REFERENCES student(id))

-- @BLOCK
create table room_teacher(id int unique not null AUTO_INCREMENT,teacher_id int not null, room_name VARCHAR(30) not NULL, room_code VARCHAR(30) UNIQUE,FOREIGN KEY (teacher_id) REFERENCES teacher(id))

-- @BLOCK
create table room_student(id int UNIQUE not null AUTO_INCREMENT,student_id int not null, room_code VARCHAR(30) UNICODE, h_index int not null, FOREIGN KEY (student_id) REFERENCES student(id))

-- @BLOCK
drop table room_student;

-- @BLOCK
SELECT * from room_student;