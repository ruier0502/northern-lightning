```
 _______                 __  .__                          .____    .__       .__     __         .__                
 \      \   ____________/  |_|  |__   ___________  ____   |    |   |__| ____ |  |___/  |_  ____ |__| ____    ____  
 /   |   \ /  _ \_  __ \   __\  |  \_/ __ \_  __ \/    \  |    |   |  |/ ___\|  |  \   __\/    \|  |/    \  / ___\ 
/    |    (  <_> )  | \/|  | |   Y  \  ___/|  | \/   |  \ |    |___|  / /_/  >   Y  \  | |   |  \  |   |  \/ /_/  >
\____|__  /\____/|__|   |__| |___|  /\___  >__|  |___|  / |_______ \__\___  /|___|  /__| |___|  /__|___|  /\___  / 
        \/                        \/     \/           \/          \/ /_____/      \/          \/        \//_____/ 
```

#### instsall

```bash
npm install northern-lightning
```         

#### directory

```
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

#### useage

##### generate controller and model.

```shell
$ N generate <action> [modelColumns]
```
or
```shell
$ N g <action> [modelColumns]
```
example:
```
N g user username sex age 
```

##### start server

```shell
$ N server
```
or
```shell
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
