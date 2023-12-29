Eager Loading : Helps us run code more efficiently by incluiding two models into one connection, look for the **include** keyword.

CORS Policy is up to the client to enforce it, so it will NOT block requests from ALL clients.

Strings can be decrypted to it's original string **with or without the secret key**.

Encryption CAN be reversed, hashing CANNOT.

The **Header** and **Payload** are the two components of a **JWT** that are encoded.

What does it mean to verify a JWT? : To verify the origin of the JWT and that the payload has not been tampered with.

An XSS attack is : when a user is able to inject HTML elements into the frontend of the application to other users.

Which of the following statements BEST describes the purpose of a JWT? : To transmit **non-sensitive** data and keep track of the source of the data.

True or False: An application that has all its user inputs protected from XSS attacks is less likely to be prone to a CSRF attack : True.

Which method should you use if you want to verify two strings are the same and come from the same source, but you **don't need to read the content** of the strings? : Hashing
    - Hashing can compare both of the hashed strings but it won't let us read/decode the content of those strings

A CSRF attack can be BEST described as : when a user is able to steal another user's login credentials and make changes to their data.

What is the BEST way for an application to prevent CSRF attacks on its server? : By exchanging tokens with an authorized client

Should you store passwords as encrypted passwords or as hashed passwords? Why? : Hashed passwords, because encryption can be reversed if the secret key gets leaked, but for hashing
the potential attacker would need to have access/know what the original value was.

Choose the BEST description of a user role: A set of user permisions.

What is the BEST reason explaining why you should never store plaintext passwords in the database? : The data in the database can get stolen.

Scenario: For responses returned from only 2 endpoints in your server, you want to **exclude an item's description attribute**. The rest of the endpoints that return an item should include that attribute. What kind of scope should you define for the item's model in Sequelize in this scenario?: non-default scope.

True or False: The main purpose of a Kanban board is to report to the Project Manager which set of tasks each person on the development team has completed after every day : False.

When is a salt applied to a password when securing password data? : Right before hashing the password.

True or False: Salting a password is used to prevent Rainbow Table attacks : True.

Which branch should be the version that you should use to test new features right before deploying to production? : dev.

Scenario: You are working on a feature in the feature-1 branch, but want to create an entirely new unrelated feature before you are finished working on the feature in the feature-1 branch. What should you do? 
    - Checkout a new feature-2 branch from the dev branch

NEVER SEND PASSWORD DATA FROM THE SERVER TO THE CLIENT.

            app.use("/hello", express.static("world"));
Based on the code above, which of the following is correct? : The Express server will read the files from the world server folder and serve each file at /hello + the relative path of the file from the world folder.

Scenario: For responses returned from most of the endpoints in your server, you don't want a user to be able to view the tag attribute for an item. What SINGLE scope could you apply to the item's model in Sequelize that would be BEST suited for this scenario?
    - dafault scope : if the scope will be applied to MOST endpoints we can set it as a default scope.


     feature-1
     feature-2 *
     feature-3
     feature-4
The above list is returned when git branch is executed in a git repository. What commands should you use to merge the feature-2 branch into the feature-4 branch? : git checkout feature-4 && git merge feature-2
