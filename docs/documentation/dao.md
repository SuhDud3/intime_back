# UsersDbDAO Class

`UsersDbDAO` is a class that extends `UsersDAO` to provide data access object (DAO) functionalities specifically for interacting with a database. It is used to perform operations such as inserting a new user into a database.

## Constructor

### `constructor(db)`

The constructor takes a single parameter:

- `db`: An instance of the database connection object which will be used to run database queries.

## Properties

- `db`: The database connection object passed during the construction of the instance.

## Methods

### `async insertUser(user)`

Inserts a new user into the database.

**Parameters:**

- `user`: An object with the following structure:
  - `username`: A string representing the user's username.
  - `password`: A string representing the user's password.
  - `email`: A string representing the user's email address.

**Returns:** A promise that resolves with the result of the insert operation.

**Usage example:**

```javascript
// Assume `db` is an instance of a database connection
const usersDbDao = new UsersDbDAO(db);

const newUser = {
  username: 'john_doe',
  password: 'securepassword123',
  email: 'john.doe@example.com'
};

await usersDbDao.insertUser(newUser);
```

**Note:** The `insertUser` method assumes that the `Users` table and the database connection are already set up and that the `run` method exists on the database connection object, which takes an SQL query and parameters, and performs the query on the database. The actual implementation details and response of the `run` method depend on the specific database driver/lib being used.

### `async deleteUser(user)`
Deletes a user from the database.

**Parameters:**

- `user`: An object with the following structure:
  - `username`: A string representing the user's username.
  - `password`: A string representing the user's password.
  - `email`: A string representing the user's email address.

**Returns:** A promise that resolves with the result of the delete operation.

**Usage example:**

```javascript
// Assume `db` is an instance of a database connection
const usersDbDao = new UsersDbDAO(db);

const newUser = {
  username: 'john_doe',
  password: 'securepassword123',
  email: 'john.doe@example.com'
};

await usersDbDao.deleteUser(newUser);
```

**Note:** The `deleteUser` method assumes that the `Users` table and the database connection are already set up and that the `run` method exists on the database connection object, which takes an SQL query and parameters, and performs the query on the database. The actual implementation details and response of the `run` method depend on the specific database driver/lib being used.

### `async updateUserUsername(username, newUsername)`
Updates a user's username in the database.

**Parameters:**

- `user`: An object with the following structure:
  - `newUsername`: A string representing the user's new username.
  - `password`: A string representing the user's password.
  - `email`: A string representing the user's email address.

**Returns:** A promise that resolves with the result of the update operation.

**Usage example:**

```javascript
// Assume `db` is an instance of a database connection
const usersDbDao = new UsersDbDAO(db);

const newUser = {
  username: 'john_doe',
  password: 'securepassword123',
  email: 'john.doe@example.com'
};

await usersDbDao.updateUserUsername(newUser);
```

**Note:** The `updateUserUsername` method assumes that the `Users` table and the database connection are already set up and that the `run` method exists on the database connection object, which takes an SQL query and parameters, and performs the query on the database. The actual implementation details and response of the `run` method depend on the specific database driver/lib being used.

### `async getUser(user)` 
Gets a user from the database.

**Parameters:**

- `user`: An object with the following structure:
  - `username`: A string representing the user's username.
  - `password`: A string representing the user's password.
  - `email`: A string representing the user's email address.

**Returns:** A promise that resolves with the result of the get operation.

**Usage example:**

```javascript
// Assume `db` is an instance of a database connection

const usersDbDao = new UsersDbDAO(db);

const newUser = {
  username: 'john_doe',
  password: 'securepassword123',
  email: 'john.doe@example.com'
};

await usersDbDao.getUser(newUser);
```

**Note:** The `getUser` method assumes that the `Users` table and the database connection are already set up and that the `run` method exists on the database connection object, which takes an SQL query and parameters, and performs the query on the database. The actual implementation details and response of the `run` method depend on the specific database driver/lib being used.

### `async getUserByMail(email)`

Gets a user from the database by email.

**Parameters:**

- `email`: A string representing the user's email address.

**Returns:** A promise that resolves with the result of the get operation.

**Usage example:**

```javascript
// Assume `db` is an instance of a database connection

const usersDbDao = new UsersDbDAO(db);

const newUser = {
  username: 'john_doe',
  password: 'securepassword123',
  email: 'john.doe@example.com'
};

await usersDbDao.getUserByMail(newUser);
```

**Note:** The `getUserByMail` method assumes that the `Users` table and the database connection are already set up and that the `run` method exists on the database connection object, which takes an SQL query and parameters, and performs the query on the database. The actual implementation details and response of the `run` method depend on the specific database driver/lib being used.

### `async findAll()`

Gets all users from the database.

**Parameters:**

- None

**Returns:** A promise that resolves with the result of the get operation.

**Usage example:**

```javascript
// Assume `db` is an instance of a database connection

const usersDbDao = new UsersDbDAO(db);

const newUser = {
  username: 'john_doe',
  password: 'securepassword123',
  email: 'john.doe@example.com'
};

await usersDbDao.findAll();
```

**Note:** The `findAll` method assumes that the `Users` table and the database connection are already set up and that the `run` method exists on the database connection object, which takes an SQL query and parameters, and performs the query on the database. The actual implementation details and response of the `run` method depend on the specific database driver/lib being used.


# AlertsDbDAO Class

`AlertsDbDAO` is a class that extends `AlertsDAO` to provide data access object (DAO) functionalities specifically for interacting with a database. It is used to perform operations such as inserting a new alert into a database.

## Constructor

### `constructor(db)`

The constructor takes a single parameter:

- `db`: An instance of the database connection object which will be used to run database queries.
  
## Properties

- `db`: The database connection object passed during the construction of the instance.
  
## Methods

### `async insertAlert(alert)`

Inserts a new alert into the database.

**Parameters:**

- `alert`: An object with the following structure:
  - `username`: A string representing the user's username.
  - `alertType`: A string representing the type of alert.
  - `alertDetail`: A string representing the alert message.

**Returns:** A promise that resolves with the result of the insert operation.

**Usage example:**

```javascript
// Assume `db` is an instance of a database connection
const alertsDbDao = new AlertsDbDAO(db);

const newAlert = {
  username: 'john_doe',
  alertType: 'High Blood Pressure',
  alertDate: '2021-01-01',
  alertDetail: 'Your account has been compromised.'
};

await alertsDbDao.insertAlert(newAlert);
```

**Note:** The `insertAlert` method assumes that the `Alerts` table and the database connection are already set up and that the `run` method exists on the database connection object, which takes an SQL query and parameters, and performs the query on the database. The actual implementation details and response of the `run` method depend on the specific database driver/lib being used.

### `async deleteAlert(alert)`

Deletes an alert from the database.

**Parameters:**

- `alert`: An object with the following structure:
  - `username`: A string representing the user's username.
  - `alertType`: A string representing the type of alert.
  - `alertDetail`: A string representing the alert message.

**Returns:** A promise that resolves with the result of the delete operation.

**Usage example:**

```javascript
// Assume `db` is an instance of a database connection
const alertsDbDao = new AlertsDbDAO(db);

const newAlert = {
  username: 'john_doe',
  alertType: 'High Blood Pressure',
  alertDate: '2021-01-01',
  alertDetail: 'Your account has been compromised.'
};

await alertsDbDao.deleteAlert(newAlert);
```

**Note:** The `deleteAlert` method assumes that the `Alerts` table and the database connection are already set up and that the `run` method exists on the database connection object, which takes an SQL query and parameters, and performs the query on the database. The actual implementation details and response of the `run` method depend on the specific database driver/lib being used.

### `async updateAlert(alert)`

Updates an alert in the database.

**Parameters:**

- `alert`: An object with the following structure:
  - `username`: A string representing the user's username.
  - `alertType`: A string representing the type of alert.
  - `alertDetail`: A string representing the alert message.

**Returns:** A promise that resolves with the result of the update operation.

**Usage example:**

```javascript
// Assume `db` is an instance of a database connection
const alertsDbDao = new AlertsDbDAO(db);

const newAlert = {
  username: 'john_doe',
  alertType: 'High Blood Pressure',
  alertDate: '2021-01-01',
  alertDetail: 'Your account has been compromised.'
};

await alertsDbDao.updateAlert(newAlert);
```

**Note:** The `updateAlert` method assumes that the `Alerts` table and the database connection are already set up and that the `run` method exists on the database connection object, which takes an SQL query and parameters, and performs the query on the database. The actual implementation details and response of the `run` method depend on the specific database driver/lib being used.
