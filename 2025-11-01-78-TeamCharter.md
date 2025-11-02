<!-- YYYY-MM-DD-[TeamID]-TeamCharter.md -->

# Team Charter & Working Agreement

## Team Members & Roles

Describe each member’s role, primary responsibilities, backups/rotation plan, and contact info.
### Lucas Gomes
Role -  
Primary responsibilities -  
Backup -  
Contact - gomesl@oregonstate.edu

### Jimena 
Role -  
Primary responsibilities -  
Backup -   
Contact -  noaguevg@oregonstate.edu

### Adithya
Role -   
Primary responsibilities -  
Backup -   
Contact -  nairadi@oregonstate.edu

## Decision-Making Model

State how decisions are made (e.g., consent/majority), quorum, tie-break rules, and which decisions need instructor/partner input.

## Meeting Cadence & Tools

List recurring meetings (purpose, length, when/where), required tools (repo, tracker, chat, CI), and response-time expectations.

### Meetings
Meetings occur once a week on Tuesdays from 3-4PM in KEC 2098. During these meetings we review progress with our project mentor and go over our next steps

### Tools
Github repository
Discord server for communication

### Response time expectations
Discord and text messages should be responded to within 24 hours.

## Risk Management & Escalation Path

Identify top risks, early warning indicators, and who escalates to whom with timelines and evidence to provide.

### Top Risks
1. Because of our need to perform a study using the tool we develop, if we do not develop a functional prototype by mid winter term we may not have time to perform that study or improve upon our design after the study.
    * Warning signs: Prototype is not near completetion by mid winter term.
    * Escalation: Project mentor should be notified if we fall behind schedule, and should be presented with current state of prototype, a list of all unfinished tasks on github project board, and an estimated completion date for the prototype.
    * Problems with deadline should be reported before winter term begins to give time to prepare

2. Because we intend on working with student data in a study with graduate students, the university or other review boards may reject our design for failing to comply with policy, forcing us to rework or redesign certain parts of the app.
    * Warning signs: Failure to follow FERPA or other guidelines when building systems that involve use of student data.
    * Escalation: Bring potential issues to Jimena or project mentor, as they have the most knowledge regarding FERPA and similar policies. Bring examples of potential violations and which regulations may apply.
    * Potential issues should be brought to attention immediately and be resolved within a week

3. Because we are relying on a backend built by a previous group for a web app, we may run into issues connecting our tool to the backend or issues that were not resolved by the previous group, leading to delays.
    * Warning signs: Difficulty implementing features using the existing backend. 
    * Escalation: Reach out to other group members first. If no one in the group can help, contact project mentor with code snippets of problematic sections of the backend. Attempt to contact previous team if possible.
    * If difficulties involving the backend cannot be resolved within 24 hours, reach out for assistance from other group members. Reach out to project mentor after 24 more hours if problems persist

## Conflict Resolution & Accountability

Define triggers, stepwise restorative actions, timelines, and how objective evidence (PRs, reviews, attendance) will be used.

### Triggers and how to respond

* Communication Failure - A member of the team fails to respond to messages or PRs in a timely manner, leading to delays or other issues
    * Should a member fail to respond to a message within 24 hours, send another message asking for a response
    * If no response is given after another 24 hours, reach out to the other group member to see if they can reach them or can help you resolve your issues.
    * If a member fails to respond to messages in a timely manner repeatedly, bring up the issue at the next meeting with examples and revise communication policies or switch channels if current methods aren't working for everyone.

* Rejected pull requests - A member of the team feels their PR was rejected unfairly or that reviews are being made in bad faith
    * If this occurs, team members should try discussing the issue with their reviewer first and bring any relevant PRs and reviews. Talk through your issues with their review and ask for their reasoning.
    * If that fails, bring in another teammate and discuss the issue.
    * If no consensus is reached, contact the project mentor for final say.
    * These issues should be brought up within 24 hours of the offending review or PR.
    

* Failure to deliver on objectives - A member of the team repeatedly fails to complete a task on time
    * Should a member fail to deliver on objectives consistently, bring this up at the next meeting with evidence(PRs, incomplete tasks, lack of attendance). Discuss why this has been happening and adjust workloads or reprioritize tasks if necesary. Make sure they aren't being overburdened and that workload is being properly distributed among members.



## Definition of Done (DoD) & Quality Gates

Enumerate required checks before merge (tests, code review, security/static analysis, docs updates) and name the enforcing CI jobs.

### Steps before merging
1. Add tests for new features and ensure your code passes all previous tests. Currently deciding which testing library will be used
2. Submit PR where it will be run through CI jobs. CI jobs are not currently set up, but Lucas plans on implementing them in the future.
3. If new features involve student data, check with project mentor or Jimena to ensure features follow FERPA and other guidelines
4. Have at least one other team member review and approve code. 

## Accessibility & Inclusion Practices

Specify meeting norms (time zones, turn-taking, note-taking), accommodation process, and how barriers will be surfaced/addressed.

## Policy Owners & Review Dates

Assign an owner and next review date for each section; explain how updates are proposed and approved.

## Links & Artifacts

Link to meeting agenda/notes template, CI dashboard, linter/formatter config, and any external docs referenced.

ESLint/Prettier config: https://github.com/lethangomes/AI-Textbook-Capstone/blob/native-react-setup/AI-Textbook-App/eslint.config.js 