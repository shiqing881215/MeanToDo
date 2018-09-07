# MeanToDo
ToDo app built on MEAN stack

Closely follow these two tutorials to build this demo todo app on MEAN (Mongodb + ExpressJs + AngularJs + NodeJs) <br/>
https://medium.com/netscape/mean-app-tutorial-with-angular-4-part-1-18691663ea96
https://medium.com/@nomanbinhussein/mean-app-tutorial-with-angular-4-part-2-4250522c845
<br/>

<b>Project Architecture</b> <br/>
The project is divided into 2 small projects : <br/>
meanapp project sets up the backend stuff : using mongodb store the data, using express set up the restful api <br/>
mean-angular project sets up the frontend stuff : using angular build the ui calling rest api to show the data <br/>

<b>Set up step</b> <br/>
I would highly recommend follow the above two links to go through the tutorial, but you can also clone my project and follow the steps below, but you may need to config something by yourself in some places

1. Clone the project <br/>
2. You need to run "npm install" in each subfolders to install the proper dependencies (Tips : based on the different version of dependencies, you may need manually install some like jquery / popper.js. And you may also need to change the way some import works due to the different version of library. If you meet such issue, google usually can give you good answer) <br/>
3. Having your mongodb setup and run your mongodb (I have those commands setup in my .bash_profile, so just run "mongodbstart"), create a database called "meanapp". By default, your db should run at localhost:27017 <br/>
4. Run "npm start" in meanapp root folder, this will start the node server. Since we use nodemon to automatically detect change and restart server, so you don't need to worry about this after you run the coomand. By default node server runs at localhost:3000 <br/>
5. Now your api layer should be up and you can use postman test it <br/>
6. Run "ng serve --open" in mean-angular root folder, this will start angular server at localhost:4200. And this is the main places you can play with the app in your browser <br/>

