# Server template

This is a simple server template to for my students to start projects quickly.

## Table of contents:

- **[Setup](#setup-how-to-use-this-template)**
- **[Endpoints](#endpoints)**
- **[Sample requests with httpie](#sample-requests-with-httpie)**

## SETUP How to use this template

1. **Create a new project based on this template using the `Use this template` button**

![HOW_TO_USE](https://user-images.githubusercontent.com/20372832/77003323-70966180-695d-11ea-8abe-b362d57135f3.gif)

2. **Clone the app**

```
git clone git@github.com:YOUR_GITHUB_NAME/YOUR_PROJECT_NAME.git
```

3. **cd into your project**

```
cd YOUR_PROJECT_NAME
```

4. **install dependencies**

```
npm install
```

5. **Configure your database in `config/config.json`**

Default config is setup for usage with an ElephantSQL database instance, you need to provide the DB Url on the "url" key of the config.json file, key development.

```json
// config/config.json
{
  "development": {
    "url": "YOUR_ELEPHANTSQL_URL_HERE",
    "dialect": "postgres"
  },
}
```

6. **Create database, run migrations & seed data**

`package.json` contains a script for this

```bash
npm run initdev
```

Or run the commands seperately

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

7. **start server with `nodemon` (recommended for development)**

```
npm run dev
```

8. **or start normally**

```
npm start
```

## Endpoints

| Method | Path                       | Purpose                             | required parameters   | auth |
| ------ | -------------------------- | ----------------------------------- | --------------------- | ---- |
| POST   | '/signup'                  | Create a new user and get a token   | email, name, password | no   |
| POST   | '/login'                   | Get a token with email & password   | email, password       | no   |
| GET    | '/me'                      | Get information of this user        | none                  | yes  |


## Sample requests with httpie

To demo making request to this server, bash commands are included that make requests using `httpie`

| Method | Path                       | Command                           
| ------ | -------------------------- | -----------------------------------
| POST   | '/signup'                  | http :4000/sign   
| POST   | '/login'                   | http :4000/login  
| GET    | '/me'                      | http :4000/me      
