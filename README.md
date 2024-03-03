# AiloremIpsum

## Framework
- [Angular](https://angular.io/)

## Front-end
- [Tailwind](https://tailwindcss.com/)
- [Daisy UI](https://daisyui.com)

## To Do
### Developer Experience
- PR preview environments
- Prettier (or something similar) for formatting on save
- Figure out how to emulate Firebase functions for quicker local development

### Enhancments
- Add copy to clipboard icon to button
- Update prompt to exclude various HTML elements from generated result
    - <img>, <title>, <meta>, <head>
- Disable form when new card is being generated
- Display skeleton component when newly generated card is awaiting prompt response

### New Features
- When HTML is generated save topic and content to Firebase
    - Display latest saved (and approved) results
    - Random topic pulling from previously submitted (and approved) topics
- Add ability to copy to clipboard on generation
- Display toast alert when contents of card are copied to clipboard