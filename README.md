# README

# GoogleSheet Watcher with RoR & React
 This application watches a GoogleSheet for new records, compares them with the ones already in the DB and syncronize them 
 by sending the new data to the API of TalkPush for a creation of a new candidate which sends an email and SMS to the new candidate

Requirements:
ruby '2.6.5'

Install gems:
bundle install

Install dependencies:
yarn install

Run webpacker:
rails webpacker:install

Run the migrations:

rails db:migrate db:seed

Run this app with the command below and open localhost:3000:
rails s

If you get an error due to TCP config run the same command with the --port 80 flag and open localhost:
rails s --port 80

*** IMPORTANT >> You need to create on the root dir the .env file and create the TP_API_KEY=PROVIDED_KEY ***

* ...
