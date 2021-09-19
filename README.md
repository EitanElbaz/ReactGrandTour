# `ReactGrandTour`

> Super lightweight, super customisable high performance application touring library.
> 
> Show your users are your applications with ease.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Install](#install)
- [Why](#why)
- [Demo](#demo)
- [Example](#example)
- [Advanced Usage](#advanced-usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```
// yarn
yarn add react-grand-tour

// npm
npm install -S react-grand-tour
```

## Why
Some applications can get really complicated a feature rich, making them hard for new users to pick up and use effectively.

**If only there was a way of making that process easier 🤔**

Use ReactGrandTour to give  your users a quick tour around your application. Highlighting core features and screen regions along the way.

> Disclaimer. Safari does not support smooth scrolling to dom elements yet, so scrolling happens immediately. Other browsers which do support smooth scrolling to dom elements gently scroll between each step. 
> 
> Modals which track fast moving objects have also been slowed down in Safari because it cannot handle rapidly repositioning dom elements smoothly.

## Demo

[Demo](https://eitanelbaz.github.io/ReactGrandTour)

You can also override the custom components which make up the touring overlay.
[Custom Components Demo.](https://eitanelbaz.github.io/ReactGrandTour)



## Example

Take a look at the [Playground](https://github.com/EitanElbaz/ReactGrandTour/tree/main/playground) for comprehensive examples of how to use this library.

```typescript jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactGrandTour, useGrandTour } from 'react-grand-tour';

const Steps = [
    {
        selector: `#first-step`,
        content: 'Welcome to React Grand Tour. This is my first tour step!',
    },
]

ReactDOM.render(
    <React.StrictMode>
        <ReactGrandTour steps={Steps}>
            <App />
        </ReactGrandTour>
    </React.StrictMode>,
    document.getElementById('root'),
);

const App = () => {
    const { open } = useGrandTour();

    return (
        <div>
            <div>
                <button onClick={open}>Open Tour</button>
            </div>
            <div id="first-step">My First Step</div>
        </div>
    )
}

```

## Advanced Usage

You can override every part of the modal in React Grand Tour by passing in your own components.

<details>
<summary>Override Props Annotation</summary>

![Custom Components Annotation](https://github.com/EitanElbaz/ReactGrandTour/blob/feature/readme_updates/public/customise_step_annotated.png)

</details>