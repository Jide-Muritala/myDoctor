# myDoctor: Fullstack Web Application

myDoctor is an online medical consultation​/telemedicine app designed to be a fast, easy, and convenient​ way for users to book appointments to see a doctor via video call​. It was designed by a team of two people as the final project for the 4Geeks Academy coding bootcamp.

[Click to view the 4Geeks demo-day presentation of the app on YouTube](https://www.youtube.com/embed/96A5468YY5Y?start=2152&end=3049)

​
![mydoctor](https://github.com/Jide-Muritala/europe-fs-pt11-group4/assets/115728688/a8d35222-dc98-4cdd-8b17-9ab80574a8cd)

The app uses React.js for the frontend and Flask-SQLAlchemy for the backend. It uses PostgreSQL for the database and JSON Web Tokens for user authentication. 
It has two API integrations, Stripe for payments and news api for latest news (newsapi.ai) 


### 1. Page Layout
- Homepage
  - About us
  - Contact
  - FAQs
- User authentication
  - Signup
  - Login
  - Forgot password
- User homepage
  - User dashboard
  - Consultation booking
  - Upcoming consultations
  - Health news channel
- Payment
  - Consultation payment checkout
  - Stripe checkout page 
  - Payment success/failure
- Terms of service

### 2. Functionalities
A user can do the following:
- View doctors and narrow doctor search by doctor specialty
- Select a doctor​
- Book​ a consultation
- Pay​ for a consultation
- Cancel​ a consultation
- View upcoming consultations​
- View health news from the news API

### 3. Database schema

![final model](https://github.com/Jide-Muritala/europe-fs-pt11-group4/assets/115728688/b469128c-2113-4222-94c6-9e735282969a)




### 4. Installation:

> If you use Github Codespaces (recommended) or Gitpod this template will already come with Python, Node and the Postgres database installed. If you are working locally make sure to install Python 3.10, Node 

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure you replace the valudes with your database information:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`

> Note: Codespaces users can connect to psql by typing: `psql -h localhost -U gitpod example`

### Backend Populate Table Users

To insert test users in the database execute the following command:

```sh
$ flask insert-test-users 5
```

And you will see the following message:

```
  Creating test users
  test_user1@test.com created.
  test_user2@test.com created.
  test_user3@test.com created.
  test_user4@test.com created.
  test_user5@test.com created.
  Users created successfully!
```

To update with all yours tables you can edit the file app.py and go to the line 80 to insert the code to populate others tables

### Frontend Manual Installation:

-   Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start the webpack dev server `$ npm run start`
