# `ReactGrandTour`

> Super lightweight, super customisable high performance application touring library.
> 
> Show your users around your applications with ease.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Install](#install)
- [Why](#why)
- [Demo](#demo)
- [Example](#example)
- [Advanced Usage](#advanced-usage)
  - [Fast Moving Objects](#fast-moving-objects)
  - [Modal Anchoring](#modal-anchoring)
  - [Component Visibility](#component-visibility)
  - [Style Overrides](#style-overrides)
  - [Overriding With Custom Components](#overriding-with-custom-components)

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

The [Demo](https://eitanelbaz.github.io/ReactGrandTour) shows how static and dynamic dom elements can be used in your application tours. 

It also contains examples for anchoring the modal to a different element than the element you want highlighted in the tour step.

The [Playground](https://github.com/EitanElbaz/ReactGrandTour/tree/main/playground) folder contains lots of examples of how to set up funky application tours. 

### Fast Moving Objects

Got an object which moves around frequently or changes size? No problem.

```jsx
<ReactGrandTour
    steps={[
        {
            selector: '#my-step-id',
            content: 'Some Content',
            track: true,

            /**
             * Optional. Default 10.
             *
             * Highlight area + modal position update frequency in ms.
             *
             * Less frequent (higher number) tracking is better for performance.
             *
             */
            trackFrequency: 10,


            /**
             * If set, will position the modal in the position indicated, if there is space.
             *
             * Default: auto
             */
            preferredModalPosition?: 'auto' | 'top' | 'right' | 'bottom' | 'left',
        },
    ]}
>
    <App />
</ReactGrandTour>
```

### Modal Anchoring

Want to highlight an element while anchoring the modal to its parent? No problem.

```jsx
<ReactGrandTour
    steps={[
        {
            selector: '#my-step-id',
            anchorSelector: '#my-step-id-parent',
            content: 'Some Content',
        },
    ]}
>
    <App />
</ReactGrandTour>
```

### Component Visibility

You can force components to be hidden on a per step or per tour basis.

The visibility prop on a step takes precedence over the hidden prop on the `ReactGrandTour` component.

```jsx
export type ComponentVisibility = {
  hideCloseButton?: boolean;
  hideCurrentStepLabel?: boolean;
  hideNextStepButton?: boolean;
  hidePreviousStepButton?: boolean;
  hideStepButtons?: boolean;
}

<ReactGrandTour
    // hides the close button for every step on the tour
    hideCloseButton
    steps={[
        {
            // hide the current step label for this particular step
            hideCurrentStepLabel: true,
            selector: '#my-step-id',
            anchorSelector: '#my-step-id-parent',
            content: 'Some Content',
        },
    ]}
>
    <App />
</ReactGrandTour>
```

### Style Overrides

To achieve the look you desire you don't have to override the CSS classes or provide custom components. You can also override a lot of colors using the `stylingOverrides` prop.

In this example we update the primary color and close button colors:

```jsx
    <ReactGrandTour
        steps={Steps}
        stylingOverrides={{
            primaryColor: 'red',
            closeButtonColor: 'yellow',
            closeButtonHoverColor: 'red',
        }}
    >
```

**All Possible Overrides:** 
```typescript
export type ReactGrandTourStylingOverrides = {
    primaryColor?: string;
    animationSpeed?: number;

    dotBackgroundColor?: string;
    dotBorderColor?: string;
    dotHoverBackgroundColor?: string;

    chevronButtonColor?: string;
    chevronButtonHoverColor?: string;
    chevronButtonDisabledColor?: string;

    closeButtonColor?: string;
    closeButtonHoverColor?: string;

    modalBackgroundColor?: string;
}
```

### Overriding With Custom Components
You can override every part of the modal in React Grand Tour by passing in your own components.

The [Custom Components Demo](https://eitanelbaz.github.io/ReactGrandTour) shows an example of a tour with some components of the modal overriden. It's not pretty, but the sky is the limit when it comes to customising the modal.

<details>
<summary>Override Props Annotated Screenshot</summary>

![Custom Components Annotation](https://github.com/EitanElbaz/ReactGrandTour/blob/feature/readme_updates/public/customise_step_annotated.png)

</details>

You can find more ComponentOverrideProps and their types [here](https://github.com/EitanElbaz/ReactGrandTour/blob/main/src/types.ts#L140).

```jsx
// Close.tsx
const Close = () => (<div>X</div>);

// index.tsx
<ReactGrandTour
    steps={[
        {
            selector: '#my-step-id',
            content: 'Some Content',
        },
    ]}
    closeButton={Close}
>
    <App/>
</ReactGrandTour>
```
