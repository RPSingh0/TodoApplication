# ToDo Application
[Live View](https://rpsingh0.github.io/TodoApplication/)

This is a simple ToDo application built with React. It allows users to add tasks, mark them as completed, and delete them.

## Features
- Add tasks with a title, description and status
- Mark tasks as completed
- Delete tasks
- Store tasks locally to persist data even after page refresh

## Technologies Used
- React.js
- Redux for global state management
- react-select for dropdown selection
- react-icons for icon display
- Tailwind CSS for styling
- Local storage for data persistence

## Usage
- Add a new task by entering the title and description, then click "Add Task."
- Mark a task as completed by changing the status
- Delete a task by clicking the delete icon.
- Tasks are saved locally, so they will persist even if you refresh the page.

## How to prepare this for GitHub pages

* Install `gh-pages` with following command and save as dev dependency

```bash
npm install gh-pages --save-dev
```

* Now, head to `package.json` and the following at top

```json
{
  "homepage": "https://<github-user-name>.github.io/<repository-name>/"
}
```

* And add the following to the scripts (since we're using [Vite](https://vitejs.dev/guide/) for our application, we'll
  be using deploy command with `dist` instead of `build`)

```json
{
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

* Now, head to `vite.config.js` and add the following in config

```json
{
  "base": "/<repository-name>/"
}
```

### After all the steps above, save all of your code and run the following command

```bash
npm run deploy
```

* This will do the following things
    * Build the project and put the built files under `dist` directory
    * Reach out to GitHub and create/update the build files under the branch `gh-pages`
    * Once you see `Published` in your console, it's all done!

### Now go to GitHub under the following path

* `github` -> `repository` -> `settings` -> `pages`
* And ensure that `gh-pages` is selected as deploy under `Build and deployment` section and `source` is set
  to `Deploy from a branch`
* After a few minutes, you'll be able to see the url for your site 🥳