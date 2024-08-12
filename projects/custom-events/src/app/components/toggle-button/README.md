# Creating a Simple Toggle Button Component

## Objective:

## Steps

Create a 'ToggleButtonComponent' that emits an event when the button is toggled between "On" and "Off."

1. Create a new Angular component called ToggleButtonComponent.

2. In the component, create a property isOn that tracks whether the button is "On" or "Off".

3. Create an @Output property called toggle that emits an event when the button is clicked.

4. In the component's template, add a button that toggles the isOn state and emits the toggle event.

5. In the parent component, listen to the toggle event and display a message indicating whether the button is "On" or "Off."
