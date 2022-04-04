# -aws-e2e-smoke-tests
Smoke Tests for  aws-e2e demo project



## dev
To Run Cypress locally you can `node_modules/cypress/bin/cypress open`

## Run the entire suite locally
./node_modules/.bin/cypress run
### TODO
* Pass the API key as environment variable, and set it up in CI (i.e export CYPRESS_MAILOSAUR_API_KEY=${cypress-api-key} <command> )
* Maybe add a UI to the DB.