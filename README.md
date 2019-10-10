# Project Name

Brastlewark app

## Description

This is an app to test my front-end skill in react.js. We are gonna take information off an API, render the information in React and filter that information.
 
## User Stories

- **homepage** - As a user I want to be able to access the homepage so I can search for all the information of Brastlewark, rendered in pages of 12 cards. 
- **get habitants data filtered** - As a user I can filter the data of the habitants of Brastlewark filtered by name.
- **next** - As a user I can see the next 12 cards of Brastlewark habitants.
- **previous** - As a user I can see the previous 12 cards of Brastlewark habitants.

## Devstacks

React.js, Axios(to call the API)

## Components

Brastlewark.js

## Installation and instructions

After forking or cloning this repository

cd nameofthecreatedfolder

npm install

npm start

Once you are on the homepage, you can see 12 cards of habitants of Brastlewark. There are next and previous button, they lead to the next, or previous 12 cards. I've rendered only 12 cards from the 1667 cars of the API,to improve performance when loading the page.

There is a search on the navbar, which will search by name, it will go the state and filter all the habitants by it's name or surname.

The page is responsive, and there 3 different views, each of them different. There's the mobile view, the Ipad viw and the desktop view. The mobile view features one card, and you can scroll easily with your hands. The Ipad view, you can see 2-3 cards, depending on the screen you are viewing it in. On the desktop view, you can see 3 cards on each row.

That's why I choosed to render 12 cards, so that in Ipad and Desktop you have 4 colums of 3 cards each.

The link below is the deploy page where you can see the Demo.

## Links

[Deploy Link](https://brastlewark1.herokuapp.com/)

## Backlog

Testing with Mocha

I've I had 2-3 days more I could have implemented testing on each of the functions that I wrote on this project.

## Main learnings and struggles

I've consolidated my skills in css. The main struggle regarding the css, was to render the image properly, getting all the images with the same size, so that it didn't break the structure of the card and the general viewing has been a challenge.

My biggest struggle has been with handling expectations by myself, I started the project with React hooks, a service for the API call, a component for the navbar anhoter for the search. 
In the end I only used one component to render it all. My approach could made my code clearer, but then I would have to create a context, or use Redux to pass the states between components.
It would be a big time consumer, and the goal of this test was to test mainly my Css and the basic knowledge of React.js

Anhoter mistake made by myself has been the search, I should have call the API again and search on the API by name, and all the other categories. In order to do that, I would have needed a submit button, then I could render them in pages of 12 cards each. 
I didn't do that because, first; I don't know if the API accepts parameters in the get. and Second, and most important, I don't like the idea of submiting and go to anhoter page to render only the searches.
I think it's not user friendly.

In the end, the search bar, renders all the gnomes that are in the database, It lowered the performance of the whole web. 