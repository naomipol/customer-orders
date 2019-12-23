# Customer Orders

This project was built for testing candidates, and shouldn't be used for different purposes.

**Please delete your local repo when completed!**

1.	General

Read the test before you start, ask any questions as needed.

The test should take approximately 2 hours.

Good luck!

2.	Set up the test project

 - clone this git repo
 - run	 `npm start` in your console

You should see lists of customers and orders displayed in the browser.

3.	Understand the data model

There are 2 data models in the project: Customers (see data/customers.json) and Orders (see data/orders.json) . Each order is related to a customer by a property called “customer_id”.

4.	Your missions:

**Mission #1:**

Change the UI so that the orders belonging to each customer will be displayed underneath the customer’s card.

Next, activate the “Show/Hide orders” button on each customer’s card. When clicking the button the orders belonging to that customer will show and hide alternately. By default, the orders list shoud be hidden.

**Mission #2:**

Activate the “Edit” button on each customer’s card. Clicking that button should display the customer’s details in the Edit Customer panel inputs. When submitting that panel, the inputs should be cleared and the customer details should be updated in the list.

How it should be done:

-	Notice that the application is built using React. Use it’s concept in order to fulfill these missions.
-	You may access any online resource you need.
-	Make sure your code is amply commented and be prepared to explain any decisions taken.
- When your're done, submit a PR with your code.

Thanks
