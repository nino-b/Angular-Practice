# Slider Component with Value Change Event

## Objective:

Create a SliderComponent that emits the current value when the slider is moved.

## Steps:

1. Create a new Angular component called SliderComponent.

2. Add an @Output property named valueChange that emits the current slider value.

3. Create a slider input in the component's template (<input type="range">).

4. Emit the valueChange event whenever the slider value changes.

5. In the parent component, listen to the valueChange event and display the current slider value.
