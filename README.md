# Clean Architecture in Node.JS + Typescript + Prisma + Pino + Postgresql

<div align="center">
 <img
	width="500"
	alt="Node.js, Typescript and Express template"
	src="https://i.imgur.com/bpnghuI.png"
>
<br>
<br>

![GitHub package.json version](https://img.shields.io/github/package-json/v/borjapazr/express-typescript-skeleton?style=flat-square)
![GitHub CI Workflow Status](https://img.shields.io/github/actions/workflow/status/borjapazr/express-typescript-skeleton/ci.yml?branch=main&style=flat-square&logo=github&label=CI)
![GitHub CD Workflow Status](https://img.shields.io/github/actions/workflow/status/borjapazr/express-typescript-skeleton/cd.yml?branch=main&style=flat-square&logo=github&label=CD)
![GitHub LICENSE](https://img.shields.io/github/license/borjapazr/express-typescript-skeleton?style=flat-square)

<h4>
  🔰🦸 Production-ready template for backends created with Node.js, Typescript and Express
</h4>

<a href="#ℹ️-about">ℹ️ About</a> •
<a href="#-features">📋 Features</a> •
<a href="#-contributing"> 🤝 Contributing</a> •
<a href="#️-roadmap"> 🛣️ Roadmap</a> •
<a href="#-credits">🎯 Credits</a> •
<a href="#-license">🚩 License</a>

</div>

---

## ℹ️ About

The main goal of this project is to provide a base template for the generation of a production-ready REST API made with `Node.js`, `Express` and `Typescript`. The idea is to avoid having to configure all the tools involved in a project every time it is started and thus be able to focus on the definition and implementation of the business logic.

> 📣 This is an opinionated template. The architecture of the code base and the configuration of the different tools used has been based on best practices and personal preferences.

> This repository is a representation of Clean Architecture practical implementation in Node.JS. We have two videos that is explain the core concept of Clean Architecture and how it solves the problem that we facing in traditional approach while building a backend service.

## ℹ️ Features

- Backbone of Express app that will provide API level service using Clean Architecture
- SQL DataBase connection via [Knex](https://www.npmjs.com/package/knex)
- Cache management via [Redis](https://www.npmjs.com/package/redis)
- Queue management via [Redis](https://www.npmjs.com/package/node-redis-pubsub)
- CRUD Operation for a resource within MVC architecture
- Import CSV management via `S3` Presigned URLs + Lambda event listener
- Batch Insert into DataBase's Table
- Batch Delete from DataBase's Table

## What is the technical stack?

- Docker to build Postgresql Database and Redis instances
- ExpressJs with TypeScript
- Knex to handle Database migration
- Prisma to handle Database management
- Redis to handle cache and pub/sub management
- Jest to handle testing
- Nodemon to handle local development build and run

## How to run this app locally?

- Make sure you have `NodeJs, npm, Yarn, and Docker` installed on your machine
- Make sure `Docker is up and running`
- Create `.env.development` for local environment, `.ene.test` for test environment
- Run command `npm install` to download all required packages
- Run command `npm docker:build` to build docker images for DB + Redis
- Run command `npm docker:up` to run docker images for DB + Redis
- Run command `npm start:development` to start the app locally
  - This command will build then export the TS app to build folder then run it from there
  - Changes will be caught and the app will be rebuilt and reloaded via `nodemon`

## How to stop the app?

- Exit the app via (command + c for `mac` and control + c for `windows + linux`)
- Run command `npm docker:down` to shutdown docker images for DB + Redis

## How to add a new migration file?

- As we are using kenx with typescript and we are relying on build folder to manage our work, we identified the path to kenx in node modules to be the start point
  - example: `Create a new user table`
    - Run command `npm run knex migrate:make create-user-table`
- So in short add `npm` to any `knex` command to work as expected
- `npm run knex:migrate`
- `npm run knex:migrate:rollback`

## How to add a new seed file?

- `npm run knex seed:make 03_system-user`
- `npm run knex seed:run`

## How to use prisma

- `npm run prisma:dev:sync`
- `npm prisma generate`

## How to manage CSV upload?

[Reference](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example_s3_Scenario_PresignedUrl_section.html)

- Create Presigned URL so FrontEnd can use to upload data to CSV
- Use the Presigned URL to upload data to S3
- Once upload completed, PS: `CSV Validation from FrontEnd`
- Call operation (I.E: `Create entities based on CSV`)

## 🥷🏻 Author

-   JKDeveloper
-   Email: jktan0504@hotmail.com
-   GitHub: jktan0504
