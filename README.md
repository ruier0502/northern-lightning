```
 _______                 __  .__                          .____    .__       .__     __         .__                
 \      \   ____________/  |_|  |__   ___________  ____   |    |   |__| ____ |  |___/  |_  ____ |__| ____    ____  
 /   |   \ /  _ \_  __ \   __\  |  \_/ __ \_  __ \/    \  |    |   |  |/ ___\|  |  \   __\/    \|  |/    \  / ___\ 
/    |    (  <_> )  | \/|  | |   Y  \  ___/|  | \/   |  \ |    |___|  / /_/  >   Y  \  | |   |  \  |   |  \/ /_/  >
\____|__  /\____/|__|   |__| |___|  /\___  >__|  |___|  / |_______ \__\___  /|___|  /__| |___|  /__|___|  /\___  / 
        \/                        \/     \/           \/          \/ /_____/      \/          \/        \//_____/ 
```

#### Intro

** Rails like lightly API service. **

Use simple command to generate API services.

#### Useage

##### 1.Install

```bash
npm install northern-lightning
```  

##### 2.Default Project

Project will auto created after install. Dir functions depend on Rails.

```bash
|-- config
|---- router.js
|-- models
|---- action.model.js
|-- controllers
|---- action.controller.js
|-- public
|---- views
|-- assets
|---- resources
|-- data.db
```

##### 3.Scaffold Action

Run this command in terminal to generate user.controller.js and user.model.js

```bash
N generate user username sex age 
```

##### 4.Register Route

Add this lines to `config/router.js`

```javascript
const UserController = require('../controllers/user.controller.js')

// ...
L.router('user', UserController)
```

##### 5.API Service

Run this commnad to start a web server.
```bash
N server
```
You will got a basic backend API service by registered routes. 
Open this link in your browser.
```
localhost:3000/users
```

##### 6.Make your develop

You can construct front pages in public, and stay static resources in assets.


#### Other

#### command

generate controller and model.

```bash
$ N generate <action> [model-properties]
```
or
```bash
$ N g <action> [model-properties]
```

start server

```bash
$ N server
```
or
```bash
$ N s
```

#### rules

| url | method | controller | description
| ------| ------ | ------ | ------|
| /actions | GET | ActionController.all | return data list
| /action | POST | ActionController.create | insert data
| /action/:id | GET | ActionController.get | get data by specific id
| /action/:id | PUT | ActionController.update | update data by specific id
| /action/:id | DELETE | ActionController.remove | delete data by specific id

**More features will be applied soon**
