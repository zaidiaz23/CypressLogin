# :open_file_folder: Automation Script with Cypress
This project contains an automated login using Cypress (front-end). Given project verify the behavior of the web application when providing valid or invalid credentials. 

## :page_with_curl: Prerequisites:
- **[Node.js](https://nodejs.org/)** - Download and install the latest version with default settings. 
- **[Visual Studio Code (VSCode)](https://code.visualstudio.com/)** - Download and install the latest version with default settings.
- Cypress requires Node.js in order to install. Supported versions are listed below: Node.js 18.x, 20.x, 22.x and above.

## :desktop_computer:	 Installing the project

You are going to need to clone a copy of the application onto your computer to follow along.

### Cloning with Git
If you are familiar with Git and already have it installed the easiest way to clone the repo is to run this command in your terminal.

> [!IMPORTANT]
> git clone **_https://github.com/zaidiaz23/CypressLogin.git_**

Now that you have cloned the repo, you will need to install all of the npm packages and dependencies. 

### VSCode
We are going to need to open the repo in a text editor.
+ Within VSCode, you can open the repo via File > Open Folder
+ You can open the terminal via Terminal > New Terminal
+ Use the command prompt in order to follow the next steps.

### :pick: Installing npm dependencies

```sh
npm install
```

### :hammer_and_pick: Installing Cypress
```sh
npm install cypress --save-dev
```
Now that we have Cypress installed, we can launch our project with:

```sh
npm test
```

### :computer:	 Running the project:
+ It might display you the following screen. Just press `Continue`.
![1](https://github.com/user-attachments/assets/955b0ffc-88b2-499f-891c-7d22e46cfb42)

+ Click on the “E2E Testing” button on the left to get started.
![2](https://github.com/user-attachments/assets/ca607d22-48bd-4b99-b13c-f358a2da44cb)

+ It will display you the Configuration Files. Just press `Continue`.
![3](https://github.com/user-attachments/assets/3e099a74-54af-4378-9fc6-2598b3ac728c)

+ It will ask you to choose a browser, you can opt for any.
![4](https://github.com/user-attachments/assets/567d643a-d4f2-4705-a3a2-885e8674af92)

+ Start E2E Testing.
+ It will direct you to the home screen.
+ Go to the **_Specs_** section. 
+ Clic on the **_login.cy.js_** file.


### :pushpin: Login Page
This project contains test cases for:
- :white_check_mark: Valid login
- :white_check_mark: Invalid username
- :white_check_mark: Invalid password
- :white_check_mark: Missing username and/or password 

As well each test case has assertions for: 
- Success message. 
- Error message.
- URL redirection.

### :dolphin: Project structure:
- **e2e:** folder to save the test files.
- **fixtures:** folder to save files that contains data test.
- **pages:** folder to save the Page Object Models that might be needed. So LoginPage.js has the logic with the methods that validates data and assertions.
