# Contributing Guide

How to set up, code, test, review, and release so contributions meet our Definition of Done.

## Code of Conduct

Reference the project/community behavior expectations and reporting process.

## Getting Started

List prerequisites, setup steps, environment variables/secrets handling, and how to run the app locally.

### Prerequisites 
* An emulator or a mobile device that can run the app. See this guide for setting up environment https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=simulated 
    * If you want to run the app on a mobile device, you will need to download the Expo Go app.
* Nodejs v24 isntalled
* Git installed

### How to run app locally
* Clone the repo using ```git clone https://github.com/lethangomes/AI-Textbook-Capstone.git```
* cd into AI-Textnook-Capstone/AI-Textbook-App
* run ```npm install```
* run one of the following commands to start the app
    * ```npm run start``` - Brings up QR code for running app on mobile and a menu to switch to android/iOS emulation
    * ```npm run ios``` - requires iOS emulator
    * ```npm run android``` - requires android emulator
* If you're running an emulator, the app should automatically open in the emulator. If you're using a mobile device, use the first option and scan the QR code.

## Branching & Workflow

Describe the workflow (e.g., trunk-based or GitFlow), default branch, branch naming, and when to rebase vs. merge.

## Issues & Planning

Explain how to file issues, required templates/labels, estimation, and triage/assignment practices.

## Commit Messages

State the convention (e.g., Conventional Commits), include examples, and how to reference issues.

## Code Style, Linting & Formatting

Name the formatter/linter, config file locations, and the exact commands to check/fix locally.

## Testing

Define required test types, how to run tests, expected coverage thresholds, and when new/updated tests are mandatory.

## Pull Requests & Reviews

Outline PR requirements (template, checklist, size limits), reviewer expectations, approval rules, and required status checks.

## CI/CD

Link to pipeline definitions, list mandatory jobs, how to view logs/re-run jobs, and what must pass before merge/release.

## Security & Secrets

State how to report vulnerabilities, prohibited patterns (hard-coded secrets), dependency update policy, and scanning tools.

## Documentation Expectations

Specify what must be updated (README, docs/, API refs, CHANGELOG) and docstring/comment standards.

## Release Process

Describe versioning scheme, tagging, changelog generation, packaging/publishing steps, and rollback process.

## Support & Contact

Provide maintainer contact channel, expected response windows, and where to ask questions.
