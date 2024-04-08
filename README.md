<a name="readme-top"></a>

# BUSINESS Application
![home page](https://github.com/chayaleA/EmployeesApp/assets/150287616/16a5fd97-4355-4e17-92fb-ed3aea6fb0dc)

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#setup-instructions">Setup Instructions</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#developers">Developers</a></li>
  </ol>
</details>

<!-- DESCRIPTION -->
## Description

The BUSINESS application is designed to provide advanced solutions for businesses, including employee management and updates on company developments. Users can sign up for notifications and updates by entering their email on the home page. The application manages employees efficiently through a user-friendly display of employee data in either table or card format. Users can add, edit, or delete employees individually, or upload an Excel file to add multiple employees at once. Additionally, there's a feature to send emails to all employees directly from the application. Security measures are implemented to ensure that only administrators can access and utilize the employee management functionalities. Users are required to log in with their username and password on the login page.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->
## Features

- **Employee Management:**
  - View employees in a table or card format.
  - Add, edit, or delete individual employees.
  - Upload Excel file to add multiple employees.
- **Email Notifications:**
  - Sign up for updates by entering email.
  - Send emails to all employees.
- **Export and Print:**
  - Export employee list to Excel file.
  - Print employee list.
- **Search Functionality:**
  - Easily search for employees.
- **Security:**
  - Only administrators can access and manage employee data.
  - User authentication required for accessing the application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TECHNOLOGIES USED -->
## Technologies Used

- **Frontend:** Angular
- **Backend:** ASP.NET with Model-View-Controller (MVC) architecture
- **Authentication:** JSON Web Tokens (JWT)
- **Database:** SQL Server
- **Integration:** Gmail API for sending emails

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SETUP INSTRUCTIONS -->
## Setup Instructions

This guide will walk you through setting up the project locally. Follow these steps to get a local copy up and running.

### Prerequisites

Before you begin, make sure you have the following installed:
- Node.js and npm. You can install them from here.
- Angular CLI. You can install it globally using npm with the following command:
  
  ```sh
  npm install -g @angular/cli
  ```

- NET Core SDK. You can download and install it.
- SQL Server. You can download and install the Developer edition.

### Installation

1. Clone the repository:
    ```
   git clone https://github.com/chayaleA/EmployeesApp.git
   ```
    
4. Navigate to the client directory:
   ```
   cd Project-Name/client
   ```
5. Install Angular dependencies:
   ```
   npm install
   ```
6. Navigate to the server directory:
   ```
   cd ../server
   ```
7. Restore NuGet packages:
   ```
   dotnet restore
   ```

Set up the database:
  - Create a new SQL Server database.
  - Update the connection string in the appsettings.json file with your SQL Server database details.

1. Run the migrations to create the database schema:
   ```js
   dotnet ef database update
   ```
2. Start the server:
   ```js
   dotnet run
   ```
3. Navigate back to the client directory:
   ```js
   cd ../client
   ```
4. Start the Angular development server:
   ```js
   ng serve
   ```
Open your web browser and navigate to http://localhost:4200 to view the application.
Now you have the project set up locally and ready for development.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USEAGE -->
## Usage

1. Navigate to the login page.
   ![Connect](https://github.com/chayaleA/EmployeesApp/assets/150287616/08a65b35-2cd3-4b2b-9b87-1a3192c53f96)

3. Enter your username and password to access the application. (Username = Admin, Password = 123456)

   ![Login](https://github.com/chayaleA/EmployeesApp/assets/150287616/705c9092-ba36-47d2-9f96-a1bf2c616df7)
   
   If you don't have one, navigate to the registration page.
   
   ![register](https://github.com/chayaleA/EmployeesApp/assets/150287616/971a7415-cc0d-42ee-b612-cf54b9b03148)
   
   Enter your details there and you will receive an email to continue the process.
   
   ![sign up](https://github.com/chayaleA/EmployeesApp/assets/150287616/384b1d19-1c4f-46da-b8b2-a965f563bfa0)
   
6. Use the various features such as employee management, email notifications, export/print, and search.
   
Here are some screenshots demonstrating how to perform specific actions in the application:

<a name="screenshots"></a>

<details>
  <summary>screenshots</summary>
  <ol>
    <li><a href="#sign-up-for-updates">sign up for updates</a></li>
    <li><a href="#employee-view">Employee view</a></li>
    <li><a href="#deleting-an-employee">Deleting an Employee</a></li>
    <li><a href="#editing-an-employee">Editing an employee</a></li>
    <li>
      <a href="#add-an-employee">Add an employee</a>
      <ul>
         <li><a href="#adding-a-single-employee">Adding a single employee</a></li>
         <li><a href="#importing-employees-from-excel">Importing employees from Excel</a></li>
      </ul>
    </li>
    <li><a href="#search">Search</a></li>
    <li><a href="#exporting-the-employees-to-an-excel-table">Exporting the employees to an Excel table</a></li>
    <li><a href="#printing-the-list-of-employees">Printing the list of employees</a></li>
    <li><a href="#sending-email-notifications">Sending Email Notifications</a></li>
    <li><a href="#responsiveness">Responsiveness</a></li>
    <li><a href="#navigation-to-page-does-not-exist">Navigation to page does not exist</a></li>
  </ol>
</details>

<!-- SIGN UP FOR UPDATES -->
### Sign up for updates
Enter your email address in the box in the footer and you will receive email updates on new company developments.
![image](https://github.com/chayaleA/EmployeesApp/assets/150287616/b34f311e-feab-4163-b170-64374bff0cf0)

<p align="right">(<a href="#screenshots">back to screenshots</a>)</p>

<!-- EMPLOYEE VIEW -->
### Employee view
You can see the employees either in tabular form or in cards according to the icon above the list.

To display as cards:
![cards](https://github.com/chayaleA/EmployeesApp/assets/150287616/86a22650-ca16-4206-bb55-0947aba35661)

To display as a table:
![tabular](https://github.com/chayaleA/EmployeesApp/assets/150287616/f06f9d48-e1b3-4c74-9229-fb06ea6930e3)

<p align="right">(<a href="#screenshots">back to screenshots</a>)</p>

<!-- DELETING AN EMPLOYEE -->
### Deleting an Employee
Delete an employee Click on the deletion icon in the last column of the employee's details in the table.

![Delete Employee](https://github.com/chayaleA/EmployeesApp/assets/150287616/c6ec1eab-b3cf-49e3-9899-85489aeeb5e2)

If you are in the view of employee cards, you can skim over the card and receive the editing and deletion operations.
![Delete employee](https://github.com/chayaleA/EmployeesApp/assets/150287616/ab062b1c-fe62-454c-a725-552e344641ec)

<p align="right">(<a href="#screenshots">back to screenshots</a>)</p>

<!-- EDITING AN EMPLOYEE -->
### Editing an employee
To edit an employee, click on the edit icon in the one column before the last of the employee's details in the table.

![edit](https://github.com/chayaleA/EmployeesApp/assets/150287616/fa1d91e2-7bfa-449d-abc6-49d9178f642f)

In the form that opens, update the employee's details as you wish.
![update](https://github.com/chayaleA/EmployeesApp/assets/150287616/9cc239f2-b71a-4560-b7f9-80d94580f1b7)

<p align="right">(<a href="#screenshots">back to screenshots</a>)</p>

<!-- ADD AN EMPLOYEE -->
### Add an employee.
You can add a single employee or import several employees from Excel.

<!-- ADDING A SINGLE EMPLOYEE -->
#### Adding a single employee:
Click the Add icon.
![add](https://github.com/chayaleA/EmployeesApp/assets/150287616/e1124b0d-fb46-4924-9a69-01de7a9a50f8)

Or navigate to the Add Employee page.
![add](https://github.com/chayaleA/EmployeesApp/assets/150287616/649746ce-dcfe-4656-87b9-ecabeaf50430)

Enter the employee's information in the form.
![add form](https://github.com/chayaleA/EmployeesApp/assets/150287616/c63a8ec7-33fb-4b80-abd8-da20a692d298)

pay attention to the following details:
- ID. Must be exactly 9 digits.
- Email address is not required.
- You can add roles using the plus button or delete an existing role.
  ![roles](https://github.com/chayaleA/EmployeesApp/assets/150287616/049920a2-1ca9-4727-8223-61f1cc58ed29)

Note:
- It is not possible to select a position for an employee twice.
- The job start date cannot be before the work start date.

<p align="right">(<a href="#screenshots">back to screenshots</a>)</p>

<!-- IMPORTING EMPLOYEES FROM EXCEL -->
#### Importing employees from Excel:

Click the Import Employees File button.
![import](https://github.com/chayaleA/EmployeesApp/assets/150287616/ff6f7f9b-cca0-407f-9057-e7572ec7ecc7)

Select an Excel file from the computer that contains a list of employees, it is mandatory to fill in all the mandatory details except email and a list of positions, the name of the title is important, you can export an Excel file and according to its titles import a new Excel file

<p align="right">(<a href="#screenshots">back to screenshots</a>)</p>

<!-- SEARCH -->
### Search
You can search for an employee easily, enter the details of the employee you want to search for in the search box.
![search](https://github.com/chayaleA/EmployeesApp/assets/150287616/c542111e-99fa-49b3-8ee0-4528386df8f2)

If you search for an employee that does not exist, a notification will be displayed
![search](https://github.com/chayaleA/EmployeesApp/assets/150287616/7a253ed2-fdee-44f0-baca-9ecc6e67c626)

<p align="right">(<a href="#screenshots">back to screenshots</a>)</p>

<!-- EXPORTING THE EMPLOYEE TO AN EXCEL TABLE -->
### Exporting the employees to an Excel table
To export the list of employees, click on the Excel icon and get Excel with the employees' information on your computer.
![export](https://github.com/chayaleA/EmployeesApp/assets/150287616/8756cded-ce04-4bb3-85fe-a262cb52a085)

<p align="right">(<a href="#screenshots">back to screenshots</a>)</p>

<!-- PRINTING THE LIST OF EMPLOYEES -->
## Printing the list of employees
To print the list of employees click on the print icon.
![print](https://github.com/chayaleA/EmployeesApp/assets/150287616/7995098d-d856-4db5-abe8-2eec1514c9b4)

In the window that opens, select the options that suit you and send to print.
![print](https://github.com/chayaleA/EmployeesApp/assets/150287616/96798aed-5980-43c0-ad14-1e8b7e0b9cb9)

<p align="right">(<a href="#screenshots">back to screenshots</a>)</p>

<!-- SENDING EMAIL NOTIFICATIONS -->
### Sending Email Notifications
To send email notifications to all employees, navigate to the employee list and click on the "Send email to all workers" button.

![Send Email](https://github.com/chayaleA/EmployeesApp/assets/150287616/4df3bbd1-de30-4d62-8f5e-edfaf8366d17)

In the window that opens, enter a subject and content and click the send button.

![Email Content](https://github.com/chayaleA/EmployeesApp/assets/150287616/3c587027-1c2e-41fe-ac18-432e197f5dac)

<p align="right">(<a href="#screenshots">back to screenshots</a>)</p>

<!-- RESPONSIVENESS -->
### Responsiveness
You can display the application even on a small screen and the display will change accordingly.
For example:
![sign up](https://github.com/chayaleA/EmployeesApp/assets/150287616/a02f0e60-b374-4c5b-981b-f044e73a0ae9)

<p align="right">(<a href="#screenshots">back to screenshots</a>)</p>

<!-- NAVIGATION TO PAGE DOES NOT EXIST -->
### Navigation to page does not exist
In case you navigate to a page that does not exist, you will receive a 404 error.

![Page not found](https://github.com/chayaleA/EmployeesApp/assets/150287616/87a14a52-e8f0-40fb-ba18-38f59197d8ab)

<p align="right">(<a href="#screenshots">back to screenshots</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

This project is licensed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEVELOPERS -->
## Developers

Chayale Avramovitz
<p align="right">(<a href="#readme-top">back to top</a>)</p>
