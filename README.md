# FinacPlus QA Automation Assignment

## ⚠️ Important

This project uses environment variables to securely store sensitive information such as DemoQA credentials and the ReqRes API key.

For security reasons, the actual `.env` file has **not** been included in this repository.

A sample configuration file (`.env.example`) is provided. Create a `.env` file in the project root using the following format:

```env
USERNAME=your_demoqa_username
PASSWORD=your_demoqa_password
REQRES_API_KEY=your_reqres_api_key
```

Replace the placeholder values with valid credentials before running the tests.

> **Note:** The `.env` file is intentionally excluded from version control using `.gitignore` to protect sensitive credentials. If you require the exact configuration used during development for evaluation purposes, please feel free to contact me.

## Overview

This project is developed as part of the **FinacPlus QA Automation Assignment** using **Playwright with JavaScript**. It demonstrates UI and API automation following the **Page Object Model (POM)** design pattern, along with reporting, test management, and defect tracking.

---

## Tech Stack

- Playwright
- JavaScript
- Node.js
- ReqRes API
- Page Object Model (POM)
- Jira
- TestRail

---

## Project Structure

```
├── pages/
│   ├── LoginPage.js
│   ├── BookStorePage.js
│   └── BookDetailsPage.js
│
├── tests/
│   ├── ui.spec.js
│   └── api.spec.js
│
├── utils/
│   └── fileWriter.js
│
├── output/
│   └── bookDetails.txt
│
├── screenshots/
├── playwright.config.js
├── package.json
├── .env.example
└── README.md
```

---

## Features

### UI Automation

- Login to DemoQA Book Store
- Verify successful login
- Search for a specific book
- Capture book details (Title, Author, Publisher)
- Save extracted data to `bookDetails.txt`
- Logout successfully

### API Automation

Using ReqRes API:

- Create User
- Get User Details
- Update User

---

## Framework Highlights

- Page Object Model (POM)
- Modular and reusable page classes
- Separate UI & API test suites
- Environment variables using `.env`
- HTML Reporting
- Screenshot on failure
- Video recording on failure
- Trace collection on retry

---

## Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Execute Tests

Run all tests:

```bash
npx playwright test
```

Run UI tests:

```bash
npx playwright test tests/ui.spec.js
```

Run API tests:

```bash
npx playwright test tests/api.spec.js
```

View HTML Report:

```bash
npx playwright show-report
```

---

## Environment Variables

Create a `.env` file using `.env.example`.

Example:

```env
USERNAME=your_username
PASSWORD=your_password
REQRES_API_KEY=your_reqres_api_key
```

---

## Screenshots Included

The repository contains screenshots demonstrating:

- Project Structure (POM)
- Terminal Execution with Passed Test Cases
- Playwright HTML Report
- Generated Output File (`bookDetails.txt`)
- Jira Backlog, Story, Task & Bug
- TestRail Test Cases
- TestRail Test Run

---

## Video_Demo

A complete demo video is included showing:

- UI Automation execution
- API Automation execution
- Successful test execution
- Output file generation

---

## Future Enhancements

- Jira API integration for automatic defect creation.
- TestRail API integration for automatic test result updates.
- CI/CD integration using GitHub Actions or Jenkins.
- Cross-browser and parallel execution.
- Allure Report integration.
- Cloud execution using BrowserStack or LambdaTest.
- Data-driven testing using JSON/Excel/CSV.

---

## Author

**Divianshu Chandel**

B.Tech Computer Science Engineering (2026)  
QA Automation | Playwright | JavaScript | API Testing
