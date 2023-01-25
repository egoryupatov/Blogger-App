Hi! This is one of the apps I developed as a pet project to acquire new skills and strengthen the ones I already have.

## App requirements

Develop a full-fledged blog app (front end + back end). 

## App features

The app features:

1) Authorization (JWT token)
2) Routes protection (Guards) (under development)
3) Blog post CRUD operations
4) UserContainer rating system (rating of posts and comments published by a user affects their overall rating in the profile)
5) Comments and nested comments
6) SearchContainer
7) Hidden posts (if you’re logged in, you can hide posts and unhide them in the dashboard)
8) UserContainer dashboard
9) Infinity scroll of posts and comments (under development)

## Used technologies

* Language - JavaScript/TypeScript
* Front end framework/library - React
* Back end framework/library - Nest.js
* State management - Redux + Thunk
* Routing - React Router
* CSS - Styled Components
* Database - MySQL

## How to run the app on your local machine

First, you'll need to create a MySQL database:

1) Install and launch MySQL on your local machine using your favorite way
2) Create a database with the following configuration:
   1) host: `localhost`, 
   2) username: `admin`, 
   3) port: `3306`, 
   4) password: `qwerty`, 
   5) database: `blog`,
3) Connect to your new database using your favorite database tool (e.g. DBeaver)
4) Create at least one record in the following tables: 
   1) Category - available blog post categories
   2) UserContainer - existing users and blog post authors
   3) Blog_post - existing blog posts (don't forget to select relations with a user and category)
   4) CommentContainer - existing comments (don't forget to select relations with a user and blog post / you can also add relations between existing comments to create nested ones)
   5) Subscribers - existing subscribers (create at least 2 users and add one of them as a relation to the other)

The second step is to start the server:

1) Clone the server repository to your local machine https://github.com/egoryupatov/Blogger-Nest-Server
2) Navigate into the project directory
3) Install the dependencies using one of the following commands: `npm install` or `yarn install`
4) Start the server using one of the following commands: `npm start` or `yarn start`

The final step is to start the app itself:

1) Clone the app repository to your local machine https://github.com/egoryupatov/Blogger-App
2) Navigate into the project directory
3) Install the dependencies using one of the following commands: `npm install` or `yarn install`
4) Start the app using one of the following commands: `npm start` or `yarn start`

## Where to see the deployed version of the app

You can see the deployed version of the app here - https://blogger-app-19qn.onrender.com/

**Pay attention!** This is a bit outdated build and I update it quite rare, plus there is some delay in uploading blog posts.

So, it's better to clone the app and launch it on your local machine.

## Authorization details

You can authorize into the application using the credentials of one of the users you added to your database in the very first step
