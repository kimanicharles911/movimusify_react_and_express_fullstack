
<h1 align="center"><a href="https://movimusifyreactexpressmern.herokuapp.com" target="_blank">🌐 movimusify react and express fullstack</a></h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/kimanicharles911/emmethub_nodejs_modules/blob/master/LICENSE.txt" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> This is the repository of a fullstack web application. It enables users to search for various types of media content from the iTunes and Apple Books Store. They can also select their favourite content by liking. This is achieved using a Reactjs frontend and a Nodejs/Expressjs backend where the external 3rd party api from itunes is consumed. It has been created using Reactjs, Expressjs, bootstrap and the axios http client. It's security is enhanced by helmetjs. The comments the file app.js allow easy understanding of how it functions.

## Deployed at
* https://movimusifyreactexpressmern.herokuapp.com

***
## Frontend

* It is located in the folder called frontend in this repository.

#### Setup/Installation Requirements
##### Install Dependencies

```
npm install
```

##### Run React Development Server

```
npm run start
```

##### To Build for Production

```
Nothing is done inside the frontend folder all building configuration is done in the backend.
```

## How It Was Built
##### Create React App
```sh
npx create-react-app
npm i --save bootstrap
npm i --save react-bootstrap
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/react-fontawesome
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @popperjs/core
npm i --save axios
npm i --save react-router-dom
npm i --save react-test-renderer
npm i -D --exact jest-watch-typeahead@0.6.5
```
##### Dependencies
* Bootstrap
* React Bootstrap
* fortawesome
* font-awesome
* axios
* React Router Dom
* React Test Renderer
* jest-watch-typeahead

##### src folder structure
```
src/
  Components/
    MainComponent.jsx
    NavbarComponent.css
    NavbarComponent.jsx
    FavouritesComponent.jsx
    ResultsComponent.jsx
    FiltersComponent.css
    SearchComponent.css
    FiltersComponent.jsx
    SearchComponent.jsx
    ResultsComponent.css
    index.js
  __tests__/
    __snapshots__/
      FavouritesComponent.test.js.snap
    FavouritesComponent.test.js
    UnitTests.test.js
  modules/
    index.js
  images/
    nav-icon.svg
    spurgeon.png
    index.js
  App.css
  App.jsx
  index.css
  index.js
  reportWebVitals.js
  setupTests.js
```

***
## Backend

* It is located in the root of this repository.
#### Deployed at
* https://movimusifyreactexpressmern.herokuapp.com/search

#### API Usage
| HTTP method      |   EndPoint   |   Public Access   |   Example   |
| ---- |:---- |:---- |:---- |
| GET     | /search/    |  TRUE    |  https://movimusifyreactexpressmern.herokuapp.com/search/    |

#### Security
* Helmetjs is used to secure this web application. I changed the script-src and img-src content security policy directives to allow usage of my custom javascript modules and to rendering of images received by the external 3rd party API.


#### Setup/Installation Requirements

##### Install Dependencies

```sh
sudo apt install nodejs #(for linux platform)
npm i
```

* Add the below line in your package.json file as one of the scripts value:
```sh
"dev": "nodemon app.js"
```

##### Development Usage

```sh
npm run dev
```

##### Test Helmet protection
* The result of running the below command should be different. Refer to [this video](https://youtu.be/tGMPWVl_l9Y) for more details.
* Replace the port with the one you use.
```sh
curl http://localhost:8080 --include
```

## How It Was Built
##### Node
```sh
npm init
npm i --save nodemon
npm i --save express
npm i --save helmet
npm i --save axios
npm i --save-dev chai
npm i --save-dev mocha
```

##### Dependencies
* Node
* Express
* Nodemon
* Helmet
* axios
* chai
* mocha

##### Deploy to Heroku
* Add this in package.json
```sh
"scripts": {
  "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend"
}
```
```sh
"engines": {
  "node": "14.15.1",
  "npm": "8.1.1"
}
```
* Add the below LOC to the app.js file
```sh
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}
```

* Then run the following terminal commands:
```sh
install heroku
heroku login
touch Procfile
```

* Add this line in the Procfile which will depend with the name of your server file which in my case is app.js:
```sh
web: node app.js
```

* Then run the following terminal commands:
```sh
heroku create emmethubgithubprojectsmern
heroku login
touch Procfile
git add . 
git commit -m"first deploy to heroku"
## optional for pushing to github: git push -u origin master
git push heroku master
```

### folder structure
```
config/
  index.js
test/
  Async.test.js
app.js
LICENSE.txt
package-lock.json
package.json
Procfile
README.md
```

## License and Copyright Information.

This project is MIT licensed see [my MIT LICENSE](https://github.com/kimanicharles911/movimusify_react_and_express_fullstack/blob/master/LICENSE.txt) for details.<br />
Copyright © 2022 [Charles Kimani & Emmethub](https://github.com/kimanicharles911).

### Author

###### 👤 **Charles Kimani**

* Website: [author.emmethub.com](https://author.emmethub.com)
* Github: [@kimanicharles911](https://github.com/kimanicharles911)
* LinkedIn: [@kimanicharles](https://linkedin.com/in/kimanicharles)

#### Show your support

Give a ⭐️ if this project helped you!

***