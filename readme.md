# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db. 

* `docker-compose up`   will start the necessary containers.
* `docker-compose down` will stop the containers.

If everything is working properly, you’ll be able to create a new user on http://localhost:3001/register.

It will take a while until the containers are fully loaded so please wait until you see them completely running.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.
