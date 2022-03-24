[![Node CI](https://github.com/Aakash1103Jha/react-component-lib/actions/workflows/node-ci.yml/badge.svg?branch=master)](https://github.com/Aakash1103Jha/react-component-lib/actions/workflows/node-ci.yml)

# React Component Library

A collection of different UI components for React projects, written in TypeScript.

## Stack:

![react-3](https://user-images.githubusercontent.com/52240895/159778641-89c4392f-d61f-4ec2-bad1-0a76d38d981e.png) ![typescript-3](https://user-images.githubusercontent.com/52240895/159778471-a78b5078-79fa-45fe-92f3-4c3b6cb684a1.png) ![rollup-dot-js](https://user-images.githubusercontent.com/52240895/159778932-958b8a26-7073-41ff-9194-009c94f5a1a9.png)

1. React
2. TypeScript
3. Rollup (for bundling)
4. npm (for local testing and later for publishing)

## Installation

1. For now, you can download a zip file of this project, open it up and run `npm i` to install all the dependencies.
2. Once done, run `npm link` to create a global link for this project on your local system.
3. From any project that you want to use this library in, run `npm link react-component-lib`

## Request New Components

This project is in it's early stages of development. I have started with the simpler UI elements and will gradually move towards more complex ones. If you have any ideas, or want some component to be included, please be sure to add it as a `new request` in the Issues section.

## Reference / Troubleshoot

If you use npm link to use this library, you might encounter an error that looks like

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

---

```json
{ "version": "0.0.1 - beta" }
```
