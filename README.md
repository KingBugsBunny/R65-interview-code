The following code was given to me by R65 out of Durham as a "Code Challenge". The challenge has not changed as long as the readme is the same staring from "R65 Labs...."

They didn't ask for much and I felt it unescessary to add Redux to the project. I reccmmend editing the sass files and designing it yourself as my styling was minimal as I've moved on from development.

END -RCB

R65 Labs - React Coding Challenge... 

Get your environment ready
* npm
* yarn (Streamlined dependency management)

Create a new Component for the registration page.
* It should have the following fields: Username, Email, Phone #, and Password
* Validation is not required
* Password field should be secure

In UserForm.js add your new component under the FormNameSection component.
* Ensure on form submission the new fields are saved as part of the User.

UserTable.js bug
* There is a small bug in the UserTable.js file that's prevent the page from loading.
* Check out the browser console for the error and address the issue
* Note It is a small fix and should not require more than a one line fix

Create a new Route to view user details from the Users page.
* Look at UserTable.js, each row represents a user and has a 'details' button
* Update the button so it navigates to the new Route with the user's data
* We recommend using <Link /> http://easyreactbook.com/blog/stylizing-a-react-router-link-with-bootstrap
* Display all the fields from the user except their password
