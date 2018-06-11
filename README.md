# Pizza R Us - Web App POC Coding Exercise

## Purpose
* Demonstrate:
    - You have a solid knowledge of React and [Auth0](https://auth0.com/)
    - You can write clean code
    - You can write organized code
    - You are comfortable using Git and Github
    - You write informative commit statements
    - You can deploy to a production environment
    - You write useful code comments

## Use Case
* Now that Toys R Us is going bankrupt Tony Soprano, the CEO of **Pizza R Us**, a small New Jersey pizza chain thinks its the perfect time to take over the pizza world. Currently all orders are placed over the phone. This means he only has phone numbers of customers who called. He has no idea who is ordering, when they order, how often or why they order. The CEO thinks ordering online is the key to access all that information and more!
* If he can have gender and location of his customers he can target them with coupons and various other special deals.

## We Need Your Help
* Build a POC that achieves the following while leveraging the Auth0 identity platform
* Your solution needs to demonstrate the following:
    - Show how a new customer can sign up and an existing customer can sign in with email/password or Facebook
    - Ensure that if a customer signs in with either an email/password or Facebook, it will be treated as the same user if they use the same email address
    - Use [Create React App](https://github.com/facebook/create-react-app) as your starting boilerplate
    - Build a backend API for **Pizza R Us** and securely call it using OAuth
    - Require a customer has a verified email address before they can place a pizza order 
    - Use Auth0 features to unobtrusively gathering customer and gender location
        + The CEO doesn't want to bug his customers but he needs that demographic info.

## Rules
* Have fun
* Only spend 4 hours on this
    - It should take 6 hours to complete but see what you can accomplish in 4 hours
* Be creative
* It just has to work and don't worry about it looking fancy, basic CSS will suffice

## Deliverables
* Link to your git repo
* Create a live working app on Heroku
    - Create a README in your Github repo
        + Share your feedback on the exercise
        + Share your live site URL running on Heroku
* API keys should not be in your repo
    - Email `.env` file separately
* Use some form of persistent storage
    - Preferably MongoDB or Firebase
