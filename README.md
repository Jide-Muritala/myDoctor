# myDoctor: Fullstack Web Application

myDoctor is an online medical consultation​/telemedicine app designed to be a fast, easy, and convenient​ way for users to book appointments to see a doctor via video call​. It was built as the final project for the 4Geeks Academy coding bootcamp. The system provides a platform where:

- Patients can register, browse available doctors, and book video consultations
- Payments are handled securely through Stripe integration
- Users can access health news via an external news API
- Appointments can be managed (booking, viewing, and cancellation)

[Click to view the presentation of the app on YouTube](https://www.youtube.com/embed/96A5468YY5Y?start=2152&end=3049)

​
![mydoctor](https://github.com/Jide-Muritala/europe-fs-pt11-group4/assets/115728688/a8d35222-dc98-4cdd-8b17-9ab80574a8cd)

## Key Features

| Feature               | Description                                                  |
|------------------------|--------------------------------------------------------------|
| User Authentication    | Secure signup, login, and password recovery system           |
| Doctor Selection       | Browse doctors with filtering by specialty                   |
| Appointment Booking    | Schedule consultations with selected doctors                 |
| Payment Processing     | Secure payment handling via Stripe integration               |
| Appointment Management | View upcoming consultations and cancel if needed             |
| Health News            | Access to curated health news via external API               |
| Medical Reports        | Documentation of consultation outcomes                       |

## System Architecture

![archi](https://github.com/user-attachments/assets/ce498166-1170-42fa-a0f9-6c55af12aaab)

The application follows a client-server architecture with a clear separation between:

1. Frontend: Built with React.js for a responsive, component-based UI
2. Backend: Powered by Flask and SQLAlchemy for handling business logic and data access and JSON Web Tokens for user authentication
3. Database: PostgreSQL for storing user, doctor, and appointment data
4. External Services: Stripe for payment processing and News API for health content

| Component           | Description                | Implementation                                        |
|---------------------|----------------------------|-------------------------------------------------------|
| React Frontend      | User interface components   | React.js with component-based architecture            |
| Frontend Routing    | Navigation between pages    | React Router with defined routes                      |
| State Management    | Global state and actions    | Context API with Flux-like pattern                    |
| Backend API         | RESTful API endpoints       | Flask Blueprint with defined routes                   |
| Authentication      | User identity verification  | JWT (JSON Web Tokens)                                 |
| Database            | Data persistence            | PostgreSQL with SQLAlchemy ORM                        |
| External Services   | Third-party integrations    | Stripe for payments, News API for health content      |

## Data Model Schema

![final model](https://github.com/Jide-Muritala/europe-fs-pt11-group4/assets/115728688/b469128c-2113-4222-94c6-9e735282969a)

This data model allows the system to track:

1. User accounts and authentication
2. Doctor profiles with specialties and pricing
3. Scheduled appointments with date/time information
4. Medical reports containing consultation outcomes and health metrics

## User Flow
The typical user journey through the myDoctor application follows this process:

![userflow](https://github.com/user-attachments/assets/eb555e95-e847-49f1-8e0c-5b1161137a59)

## API Endpoints

![api](https://github.com/user-attachments/assets/607222c7-3e2b-42fc-955e-b21c2c581bc0)

| Endpoint                         | Method        | Description                      | Authentication |
|----------------------------------|---------------|----------------------------------|----------------|
| `/api/hello`                     | GET, POST     | Test endpoint                    | No             |
| `/api/signup`                    | POST          | Create new user account          | No             |
| `/api/token`                     | POST          | Authenticate and get JWT token   | No             |
| `/api/protected`                | GET           | Test JWT authentication          | Yes            |
| `/api/report`                    | GET           | Get all medical reports          | No             |
| `/api/report/<id>`              | GET           | Get specific medical report      | No             |
| `/api/doctors`                   | GET           | List all doctors                 | No             |
| `/api/booking`                   | POST          | Create new appointment           | No             |
| `/api/appointments`             | GET           | List all appointments            | No             |
| `/api/appointments/<id>`        | DELETE        | Delete specific appointment      | No             |
| `/api/create-checkout-session`  | POST          | Create Stripe checkout session   | No             |

## Tech Stack
<p align="left">
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html5" width="40" height="40"/> </a>
&nbsp;
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css3" width="40" height="40"/> </a>
&nbsp;
<a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://icongr.am/devicon/bootstrap-plain.svg?size=50&color=6d06b1" alt="bootstrap" width="40" height="40"/> </a> 
&nbsp;
<a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> 
&nbsp; 
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> 
&nbsp;
<a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> 
&nbsp;
<a href="https://flask.palletsprojects.com" target="_blank" rel="noreferrer"> <img src="https://icongr.am/simple/flask.svg?size=40&color=ffffff&colored=false" alt="flask" width="35" height="35"/> </a> 
&nbsp;
<a href="https://react.dev/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="40" height="40"/> </a> 
&nbsp;
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>   
&nbsp;
<a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="postgresql" width="40" height="40"/> </a> 
&nbsp; 
<a href="https://jwt.io" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" alt="jwt" width="40" height="40"/> </a>
&nbsp;
<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"> <img src="https://deviconapi.vercel.app/vscode?color=3C99D4ff&size=128" alt="vscode" width="40" height="40"/> </a> 
&nbsp;
<a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://icongr.am/devicon/webpack-original.svg?size=128&color=currentColor" alt="webpack" width="40" height="40"/> </a>
&nbsp;
<a href="https://www.postman.com" target="_blank" rel="noreferrer"> <img src="https://skillicons.dev/icons?i=postman" alt="postman" width="40" height="40"/> </a>
&nbsp;
<a href="https://www.npmjs.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm" width="40" height="40"/> </a>
&nbsp; 
<a href="https://www.sqlalchemy.org" target="_blank" rel="noreferrer"> <img src="https://deviconapi.vercel.app/sqlalchemy?color=ff0000ff&size=128" alt="sqlalchemy" width="40" height="40"/> </a>
</p>

*Frontend Technologies*
1. HTML
2. CSS
3. JavaScript
4. React.js: Component-based UI library for building the user interface
- React Router: Navigation and routing between application pages
- React Bootstrap: UI component library for consistent styling
- React Tabs: For the tabbed interface in the user dashboard
- React DatePicker: For appointment date/time selection

*Backend Technologies*
1. Flask: Python web framework for the API
2. SQLAlchemy: ORM for database operations
3. Flask-JWT-Extended: For user authentication 
4. Flask-Migrate: For database schema migrations
5. Stripe API: For payment processing
6. News API: For health news integration

*Database*
1. PostgreSQL: Relational database for persistent data storage

*Development & Deployment*
1. Webpack: Asset bundling and development server
2. Gunicorn: WSGI HTTP server for deployment
3. Python-dotenv: Environment variable management

## Pages
![Screenshot 2023-11-27 at 7 22 34 PM](https://github.com/Jide-Muritala/europe-fs-pt11-group4/assets/115728688/023498f6-191f-48dd-b73a-1a66459b567d)

![Screenshot 2023-11-27 at 7 33 58 PM](https://github.com/Jide-Muritala/europe-fs-pt11-group4/assets/115728688/fd93ef83-c9f6-4e95-962a-15d5d22f7686)

## Installation:

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
