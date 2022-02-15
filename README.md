
-added first name/last name to signup form. thie totally works and persists a new user to the db.

-added lines 48 and 49 to config/application.rb- it's necessary for cookies

-added gem 'rack-cors' on line 55

-Right now, it doesn't like something on Appointments.js. With the 'user' prop passed in, destructured, and passed into the list elements (simply to display user's full name and username), the page loads fine but upon reload it says "user is null." The page as a whole is otherwise persisting the user in sessions. Navigating away from localhost:4000/ and then returning shows the user is still logged in. Upon commenting-out the list elements, the "const {} = user", and deleting the user prop from arguments, the page reloads correctly.

I just checked on the repo that i've been working on, it does the same thing on my old repo. We'll have to check it out.



