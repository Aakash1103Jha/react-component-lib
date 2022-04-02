# Troubleshoot

## 1. Conflicting React version

At the time of this documentation, this project was not published to npm and therefore wasn't available to install via `npm`. The only way to use this as of now is by getting a zip file and running `npm link`. If you did so, you might encounter an error like mentioned below:

```
Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
    1. You might have mismatching versions of React and the renderer (such as React DOM)
    2. You might be breaking the Rules of Hooks
    3. You might have more than one copy of React in the same app
.....
```

### Solution

```plaintext
Below are the steps I followed :
1. In Your Application:
a) cd node_modules/react && npm link
b) cd node_modules/react-dom && npm link

2. In Your Library (this project)
a) Remove the react and react-dom folders from node_modules
b) Run npm link react && npm link react-dom

3)Stop your dev-server and do `npm start` again.
```

<!--
https://stackoverflow.com/questions/56021112/react-hooks-in-react-library-giving-invalid-hook-call-error -->
