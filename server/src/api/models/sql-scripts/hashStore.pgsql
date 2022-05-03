create table if not exists image_hash
(
    hash varchar(46) not null,
    uid  integer     not null,
    constraint fk_image_user foreign key (uid) references blockfileuser (uid) on delete cascade
);