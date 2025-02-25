# mpp-node

## Introduction
`mpp-node` is a Node.js package designed to provide [describe functionality here]. It includes two main functions:

- `connect()`: Establishes a tunnel.
- `disconnect()`: Deletes the tunnel.

Additionally, the package requires a file named `wg0` to be present wherever `mpp-node` is imported.

This guide will help you clone the repository, set up a local version using `npm link`, and attach it to other Node.js projects.

## Cloning the Repository and Setting Up `npm link`

### Step 1: Clone the Repository
First, clone the repository from GitHub:
```sh
git clone https://github.com/your-repo/mpp-node.git
```

### Step 2: Navigate into the Project Directory
```sh
cd mpp-node
```

### Step 3: Set up `npm link`
Run the following command to create a global symlink to the package:
```sh
npm link
```

## Using the Linked Package in Another Project

### Step 1: Navigate to Your Node.js Project
```sh
cd /path/to/your-project
```

### Step 2: Link the `mpp-node` Package
```sh
npm link mpp-node
```
This will create a symbolic link to the globally linked `mpp-node` package.

### Step 3: Ensure `wg0` File is Present
Before using `mpp-node`, make sure a file named `wg0` is present in the project directory.

### Step 4: Use the Package
Now, you can use `mpp-node` in your project as if it were installed from npm:
```javascript
const mpp = require('mpp-node');

// Establish a tunnel
mpp.connect();

// Disconnect the tunnel when done
mpp.disconnect();
```

## Troubleshooting
- If changes in `mpp-node` are not reflecting in the linked project, try reinstalling dependencies:
  ```sh
  npm link mpp-node
  ```
- Ensure the `wg0` file is present; otherwise, `mpp-node` may not function correctly.



