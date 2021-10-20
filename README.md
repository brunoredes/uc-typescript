# Ultimate Courses - Basic Typescript

<h1 align="center">
<img width="40" valign="bottom" src="https://ultimatecourses.com/static/icons/typescript.svg">
TypeScript: Basics Course Seed
</h1>
<h4 align="center">Project seed for our comprehensive introduction to TypeScript course.</h4>

---

<a href="https://ultimatecourses.com" target="_blank"><img src="https://ultimatecourses.com/static/banners/ultimate-typescript-leader.svg"></a>

---


> This repo serves as the seed project for Ultimate Angular's TypeScript Basics course as well as the final solution in stepped branches, come and [learn TypeScript](https://ultimatecourses.com/courses/typescript) with us!
[Setup and install](#setup-and-install) | [Tasks](#tasks) |
[Resources](#resources)

## Setup and install

Fork this repo from inside GitHub so you can commit directly to your account, or
simply download the `.zip` bundle with the contents inside.

#### Dependency installation

During the time building this project, you'll need development dependencies of
which run on Node.js, follow the steps below for setting everything up (if you
have some of these already, skip to the next step where appropriate):

1. Download and install [Node.js here](https://nodejs.org/en/download/) for
   Windows or for Mac.

That's about it for tooling you'll need to run the project, let's move onto the
project install.

#### Project installation and server

Now you've pulled down the repo and have everything setup, using the terminal
you'll need to `cd` into the directory that you cloned the repo into and run
some quick tasks:

```
cd <ngrx-store-effects-app>
yarn install
# OR
npm install
```
> I have upgraded all of dependencies on this project, and added vite as alternative to webpack

This will then setup all the development and production dependencies we need.

Now simply run this to boot up the server:

```
yarn start-wp
# OR
npm start-wp
```
Visit `localhost:3000` to start building.

You may use Vite instead webpack, using the following command:
```bash
$ yarn serve
# or
$ npm serve
```
This command will run "preserve" script before "serve" script.
Visit `localhost:5000` to start the application.

## Tasks

A quick reminder of all tasks available:

#### Development server

```
yarn start
# OR
npm start
```

## Resources

There are several resources used inside this course, of which you can read
further about to dive deeper or understand in more detail what they are:

* [TypeScript Docs](https://www.typescriptlang.org)
* [TypeScript Playground](https://www.typescriptlang.org/play)
* [AST Explorer](https://astexplorer.net)