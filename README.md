# Infinity Tech Test

Small script that runs a few basic tests against Auto Trader's website.

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

Once we have more tests and coverage, we could start to design a framework which would allow DOM elements to be re-used via functions.

We could also incorporate more intelligent data driven testing via an API call of some sort to mock customer data and do complete end to end tests from car search up until purchase.

We could also really dial down into the filters to reduce searches and ensure the results are pinpoint accurate.
