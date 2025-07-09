# Frontend Mentor - Browser extensions manager UI solution

This is a solution to [the Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp).
Frontend Mentor challenges help you improve your coding skills by building real-world projects.

## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:
- Toggle extensions between active and inactive states.
- Filter active and inactive extensions.
- Remove extensions from the list.
- Switch between light and dark mode.
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.

### Screenshot

![Preview](./preview.jpg)

### Links
- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/browser-extension-manager-ui-gMonk8Qfzc)
- Live Site URL: [Browser Extension Manager UI](https://browser-extension-manager-ui-2.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

- To create a slider toggle, use checkbox to capture the check/uncheck (ie on/off) value, and then a span with a ::before pseudo-element to design the switch.

    ```html
        <label class="switch">
            <input type="checkbox">
            <span class="slider"></span>                  
        </label>
    ```

    ```css        
        .switch{
            position: relative;
            display: inline-block;
            width: 38px;
            height: 22px;
        }

        .switch input{
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider{
            position: absolute;
            cursor: pointer;
            border-radius: 34px;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--switch-theme-bg-color);
            -webkit-transition: .4s;
            transition: .4s;
        }

        .slider:before{
            position: absolute;
            border-radius: 50%;
            content: "";
            height: 16px;
            width: 16px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }

        .switch input:checked + .slider{
            background-color: var(--switch-on-color);
        }

        .switch input:checked + .slider:before{
            -webkit-transform: translateX(15px);
            -ms-transform: translateX(15px);
            transform: translateX(15px);
        }
    ```

- One way to load data from a .json file is to use fetch().

    ```js
        const data = await(await fetch('./data.json')).json();
    ```

### Continued development
    
- Strenghten JavaScript skills through additional challenges.
- Deepen CSS knowledge by practicing more complex layouts and designs.
- Begin learning and building projects with the React framework.

### Useful resources

- [W3Schools](https://www.w3schools.com/howto/howto_css_switch.asp) - This helped me with toggle switch.