# Dynamic Content Projection with Named Slots

## Objective:

Create a TabComponent that allows you to project different content into named tabs. Implement dynamic tab switching and default tab content when no tab is selected.

## Instructions:

1. Create the TabComponent and Tab components:

- TabComponent: The container for tabs, handles the tab switching logic.
- Tab: Represents an individual tab, which will be used within TabComponent.

2. Define the template for TabComponent:

- Use `<ng-content>` with selectors to project content into different tabs.
- Add logic to display content based on the active tab.

3. Add a fallback mechanism for displaying default content when no tab is active.

4. Use the TabComponent in another component and add multiple Tab components with different content.
