<h1 align="center">
  Redux Basic (+Toolkit, +Toolkit slice)
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/-html-red" alt="html">
  <img src="https://img.shields.io/badge/-css-blue" alt="css">
  <img src="https://img.shields.io/badge/-javascript-yellow" alt="javascript">
  <img src="https://img.shields.io/badge/-react-cyan" alt="react"> <br>
  <img src="https://img.shields.io/badge/-redux-blueviolet" alt="redux">
  <img src="https://img.shields.io/badge/-redux/toolkit-blueviolet" alt="redux toolkit">
</p>

<div align="center">
  <a href='https://ik-web.github.io/redux-toolkit-slice'>
    [> SIMPLE COUNTER - DEMO LINK <]
  </a>
</div>

## Description:

>Familiarization with Redux basic. <br>
>Basic examples of using the framework Redux and Redux/Toolkit (+Toolkit slice)

## Documentation

> [Getting Started with Redux](https://redux.js.org/introduction/getting-started) <br>
> [Getting Started with Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)

About examples: <br>
For Redux classic to use:
- `import { store } from './vanilaStore'` in file `index.js`
- `import { minus, plus } from './vanilaStore/reducer'` in file `App.jsx`
- `const counter = useSelector(state => state.reducer.counter)` in file `App.jsx`

For Redux toolkit to use:
-`import { store } from './toolkitStore'` in `index.jsx`
- `import { minus, plus } from './tookitStore/toolkitReducer'` in file `App.jsx`
- `const counter = useSelector(state => state.toolkit.counter)` in file `App.jsx`
- `import toolkitReducer from './toolkitReducer'` in file `index.js` of directory `toolkitStore`
- `toolkit: toolkitReducer` to `rootReducer` in file `index.js` of directory `toolkitStore`

For Redux toolkit to use:
- `import { store } from './toolkitStore'` in file `index.js`
- `import { minus, plus } from './tookitStore/toolkitReducer'` in file `App.jsx`
- `const counter = useSelector(state => state.toolkit.counter)` in file `App.jsx`
- `import toolkitSlice from './toolkitSlice'` in file `index.js` of directory `toolkitStore`
- `toolkit: toolkitSlice` to `rootReducer` in file `index.js` of directory `toolkitStore`

We created an asynchronous function to asynchronously increment after 2 seconds <br>
to check what `redux-thunk` is included in `redux toolkit` and works good.
```
const asyncPlus = () => {
  return async dispatch => {
    setTimeout(() => {
      dispatch(plus('ASYNC_PLUS'))
    }, 2000)
  }
};
```
---

**The npm commands used to install the required node modules:**
- `npx create-react-app my-app`
- `npm i redux`
- `npm i react-redux`
- `npm i redux-devtools-extension`
- `npm i redux-thunk`
- `npm i @reduxjs/toolkit` (it has redux, redux-devtools-extension, redux-thunk by itself)

## Developers

- [Ihor Kuchin](https://github.com/ik-web)
