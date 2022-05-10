CREATE database instagram;
use instagram;
CREATE TABLE user(
	user_ID varchar (20) NOT NULL PRIMARY KEY,
    password varchar(20) NOT NULL,
    user_image varchar(500)
);
INSERT INTO user VALUES('soyoon', 'soyoon!',"../image/user1-removebg-preview.png");
insert into user values('openyearround', 'openyearround!',"../image/user2-removebg-preview.png");
CREATE TABLE post(
	post_ID varchar(40) NOT NULL PRIMARY KEY,
    time datetime NOT NULL,
    content varchar(1000),
    post_image varchar(500) NOT NULL,
    user_ID varchar(20) NOT NULL,
    likeNum int NOT NULL,
    like_image varchar (500) NOT NULL,
    bm_image varchar (500) NOT NULL,
    FOREIGN KEY (user_ID) references user(user_ID)
);

INSERT INTO post VALUES('soyoon1', '2022-04-06 16:59:00', '어쩌구저쩌구1', "../image/post.PNG",'soyoon', 100, "../image/full-heart.png", "../image/empty-bookmark.png");
INSERT INTO post VALUES('soyoon2', '2022-04-06 17:00:00', '어쩌구저쩌구2', "../image/post2.PNG",'soyoon', 200, "../image/empty-heart.png", "../image/full-bookmark.png");
insert into post values('openyearround1', '2022-04-07 17:00:00', '어쩌구저쩌구3', "../image/post3.jpg",'openyearround',300, "../image/full-heart.png", "../image/empty-bookmark.png");
insert into post values('openyearround2', '2022-04-07 17:01:00', '어쩌구저쩌구4', "../image/post4.jpg",'openyearround',400, "../image/empty-heart.png", "../image/full-bookmark.png");

CREATE TABLE comment(
	comment_ID varchar(40) NOT NULL PRIMARY KEY,
    time datetime NOT NULL,
    content varchar(1000),
    user_ID varchar(20) NOT NULL,
    post_ID varchar(20) NOT NULL,
    FOREIGN KEY (user_ID) references user(user_ID),
    FOREIGN KEY (post_ID) references post(post_ID)
);

CREATE TABLE postlike(
	user_ID varchar(20) NOT NULL,
    post_ID varchar(20) NOT NULL,
    FOREIGN KEY (user_ID) references user(user_ID),
    FOREIGN KEY (post_ID) references post(post_ID)
);
insert into postlike values('soyoon', 'openyearround1');
insert into postlike values('openyearround', 'soyoon1');
CREATE TABLE postbookmark(
	user_ID varchar(20) NOT NULL,
    post_ID varchar(20) NOT NULL,
    FOREIGN KEY (user_ID) references user(user_ID),
    FOREIGN KEY (post_ID) references post(post_ID)
);
insert into postbookmark values('soyoon', 'openyearround2');