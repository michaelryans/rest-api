# rest-api


## My App Name

REST API built with Express and Sequelize

### List of basic routes:

| Routes        | HTTP           | Header(s) | Body| Description |
| ------------- |:-------------:| :-----:| ---- | --- |
| /api/hello?name={name} | GET | none | none | Print hello, {name}! | 

<br>

### List of user routes: 
| Routes        | HTTP           | Header(s) | Body| Description |
| ------------- |:-------------:| :---:| ---- | --- | 
| /api/users | GET | none | none | Get all the users | 
| /api/users/:id | GET| none | none | Get a single user | 
| /api/users | POST | none | name:String **(Required)** <br>email:String **(Required)** <br>password:String **(Required)** <br> | Create a user| 
| /api/users/:id | DELETE | none | none | Delete a user | 
| /api/users/:id | PUT | none | name:String **(Required)** <br>email:String **(Required)** <br>password:String **(Required)** <br> | Update a user with new info | 
| | | | | | 

<br>

### List of filter routes:
| Routes        | HTTP           | Description |
| ------------- |:-------------:| :-----:| 
| /api/users?name=<KEYWORD> | GET | Get users by name | 

<br>


## Usage
Make sure Node.js is installed in your computer then run these commands:

> `$ npm install` <br>
> `$ npm start` <br>
> `$ npm run dev` <br>