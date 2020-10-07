---
template: post
title: Setup Adminer with docker for Database Management
slug: docker-mysql-adminer
draft: false
date: 2020-10-07T06:27:36.178Z
description: Adminer is a web based database management tool  whichcan be
  deployed to any server. It supports MySQL, PostgreSQL, MongoDB, MS SQl,
  Elasticsearch, MariaDB.
category: tutorial
tags:
  - tutorial
  - docker
---
> If docker and docker-compose is not installed on your machine, you can do it by checking these pages.
> [Docker engine](https://docs.docker.com/engine/install/)
> [Docker compose](https://docs.docker.com/compose/install/#install-compose).

#### What is Adminer?

> Adminer is a web based database management tool written in a single PHP file which can be deployed to any server. It supports MySQL, PostgreSQL, MongoDB, MS SQl, Elasticsearch, MariaDB, SQLite, Oracle, Firebird and Simple DB. It also comes with better security and performance, compared to phpMyAdmin.

For testing it locally, you probably have to use a local server like WAMP or XAMPP and configure it for adminer., by adding the *adminer.php* file.

This process can be simplified by using *docker* and *docker-compose* and a single *yaml* file.

> Using *docker-compose*, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

A sample *docker-compose* file for MySQL.

```yaml
version: '3.7'
services:
    mysql_db:
        image: mysql:latest
        ports: 
          -  3307:3307
        volumes:
            - mysql_db_data:/var/lib/mysql
volumes:
    mysql_db_data: 
```

To start the container run the command

```
docker-compose up -d
```

> \-d flag will run the container in detached mode.

1. version - Specifies docker engine version
2. services - Used for specifying the containers which will be started at run time.

   * *image* - The container image, here we'll use mysql.
   * *ports* - The port mapped from the Host machine to the container
   * *volume* - Mount the local volume to docker container.
3. volumes - This will persist the mounted volume, even if the container is stopped.

Here we're using pre-built images so we don't need to build these images, if we were to use our own custom DockerFile for this, we first need to build the image by running

```powershell
docker-compose build
```

and then,

```powershell
docker-compose up -d
```

> Now adding adminer to docker-compose file

```yaml
version: '3.7'
services:
    adminer_container:
        image: adminer:latest
        environment: 
            ADMINER_DEFAULT_SERVER: mysql_db
            ADMINER_DESIGN: galkaev
        ports: 
          - 8080:8080
```

1. image: Here we're using the official docker image provided by adminer followed by the latest tag, which shows, it is the latest version of the image.
2. Environment variable: As we're using an external mysql-db we have to specify it in the environment variable.

   * *ADMINER_DEFAULT_SERVER*  - external db.
   * *ADMINER_DESIGN*  - theme of adminer ui.

Final *docker-compose* yaml file

```yaml
version: '3.7'
services: 
    mysql_db_container:
        image: mysql:latest
        command: --default-authentication-plugin=mysql_native_password
        env_file:
          - ./config/mysql.env
        ports: 
          - 3307:3307
        volumes: 
            - mysql_db_data_container:/var/lib/mysql
            
    adminer_container:
        image: adminer:latest
        environment: 
            ADMINER_DEFAULT_SERVER: mysql_db_container
            ADMINER_DESIGN: galkaev
        ports: 
          - 8080:8080
        

volumes: 
    mysql_db_data_container: 
    
```

> A few additions to the mysql container.

1. *command* : Provides authentication for root and other users.
2. *env_file*: This file stores environment variables like password in a seperate *.env* file.

Run the command,


```powershell
docker-compose up -d
```


and visit localhost:8080 and you'll see the adminer ui.

[Github repo](https://github.com/Codewithml/docker-mysql-adminer)

### Happy coding :smiley: