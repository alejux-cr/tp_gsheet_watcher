# GoogleSheet Watcher with RoR & React

 This application watches a GoogleSheet for new records, compares them with the ones already in the DB and syncronize them 
 by sending the new data to the API of TalkPush for a creation of a new candidate which sends an email and SMS to the new candidate

Requirements:
ruby '2.6.5'

## Important 
You need to create in the root dir the .env file and add the following variables:
TP_API_KEY='API key provided'
TP_URL='https://my.talkpush.com/api/talkpush_services/campaigns/{campaingid}/campaign_invitations'
## Installation
Install the required gems:
```bash
bundle install
```
Install dependencies:
```bash
yarn install
```
Run webpacker:
```bash
rails webpacker:install
```
Run the migrations (Optional: you can start with an empty database):
```bash
rails db:migrate db:seed
```
Run the app in localhost:3000:
```bash
rails server or rails s
```
If you get an error due to TCP config run the same command with the --port 80 flag and open localhost:
```bash
rails s --port 80
```
For development and code reloading, open another terminal and run: 
```bash
ruby .\bin\webpack-dev-server
```
## Testing
To run tests:
```bash
rails db:migrate RAILS_ENV=test

rails db:test:prepare
```

Unit Model testing:
```bash
rails test test/models/candidate_test.rb
```

Functional Controller Testing:
```bash
rails test test/controllers/candidates_controller_test.rb
rails test test/controllers/watcher_controller_test.rb
```

