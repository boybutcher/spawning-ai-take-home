# Spawning.ai Take Home Assignment
#### Done by Bryan Nguyen
Original prompt can be found [here](https://github.com/Spawning-Inc/take-home-frontend-challenge).
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run
1. clone this repository: `git clone https://github.com/boybutcher/spawning-ai-take-home.git`
2. install dependencies via NPM: `npm i`
3. start the repo: `npm start`
4. should redirect you to [http://localhost:3000/](http://localhost:3000/)

#### Potential troubleshooting
Consider switching to Node v14.21.1 as that was the version used during development.

## Developer notes
I developed this with the intention of meeting the minimum requirements and having it be presentable within 3 hours, working 1 hour a day for 3 days.

The following features have been implemented:
* render products from the supplemented `products.json` file
* querying for products - done with a basic `Array.filter` searching for a non-case sensitive substring
* products can be added to a shopping cart - does not consider whether item is in stock or not
* shopping cart displays the total number of items and price

Some known bugs / things I'd want to fix: 
* typical rounding errors for the total in the cart
* cropping of thumbnails isn't the most accurate. Would probably make a div and set the image as the background

Some features I want to add:
* pagination - page runs quite slow when 1000 items are listed
* fuzzy search - the querying isn't flexible as flexible as a typical fuzzy search. Querying is also confined to just the name, when theres other things to consider such as `category` & `description`
* filters - ex: items in stock, category, less than `x` price, etc.
* sorting - sort by price (ascending & descending), name (ascending & descending)
* display cart items - typical cart functionality (ex: adjust quantity of items, remove items)
* product page
