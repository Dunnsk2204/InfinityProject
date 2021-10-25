# Infinity Tech Test

Small script that runs a few basic tests against Auto Trader's website. The script is located at:

* https://github.com/Dunnsk2204/InfinityProject/blob/master/cypress/integration/InfinityTests/AutoTraderTest.js

It runs two tests:

1) Tests that a car can be selected with basic filters and then checked to ensure the vehicle is correct
2) Tests finding a car with more filters to ensure that it is between a certain price range

## Requirements

Must have cypress, npm & node installed

```bash
Clone the project either manually or directly through
    'https://github.com/Dunnsk2204/InfinityProject.git'

You will need to have HTTPS/PAT/SSH setup locally to clone to your environment
```

## Running the Script

```javascript
cd /<downloaded-project-from-prev-step>

./node_modules/.bin/cypress open
```

This should then start the Cypress Test Runner.

Click the AutoTraderTest.js

## Extending the Script

Firstly, one thing that came apparent was the inconsistency of the naming conventions of the DOM elements. I would highly encourage developers to be using appropriate conventions that allow apps to be tested much easier via Cypress. It saves using ugly css selectors that can be fragile.

See - https://docs.cypress.io/guides/references/best-practices

There could obviously be much more test coverage of the app, but for the purpose of this exercise it is not necessary.

Would be nice to register and login with various users to ensure that everything runs successfully. In real life scenarios you may read data from an API to then login with that user retrived from some sort of API call. The possibilities with automating this website are endless.

We could also incorporate more intelligent data driven testing via an API call of some sort to mock customer data and do complete end to end tests from car search up until purchase.

We could also really dial down into the filters to reduce searches and ensure the results are pinpoint accurate.

## Challenges Encountered

No real challenges to be completely honest. The only thing that did take me longer than expected was finding the iFrame which was a popup when the first page loads. Took me a while to figure out what was going on! 

