# FlNav

This is a simple navigation module which allows the developer to quickly assembly a mobile navbar with side menu and search function

## 'Gooey' position

The navbar sticks to the top of the viewport when scrolling upwards. When scrolling down, the navbar gets 'stuck' to the page and scrolls out of view

## Menu/Customizable button

In the top left, most mobile navbars have a hamburger menu. My navbar also has a built in menu which can be opened using the classic hamburger style button.
The button can be configure to output an 'OnClick' event to do custom actions, such as return to the previous page.

## Sidemenu with backdrop

On openning the sidemenu, an animate backdrop fades over the page content and the sidemenu slides into view from the left. It has custom tags to enable easy and clean menu items to be created.

## Search function

You can use a standard title for the page you're currently on, or you could use the search element. This element provides event outputs OnKeyChange and OnChange. You can use these events for searching a page

## Summary of elements

### fl-navbar

The main container element, has no special function

### fl-navbar-button

This element is intended to be used with either the 'flOpenMenu' directive `<fl-navbar-button flOpenMenu>`.
This directive enables the button OnClick to open the menu.

The other directive 'flOnClick' `<fl-navbar-button flOnClick (onClick)="myCustomEvent()">` binds OnClick to your custom function

Provide this element with an SVG to get a scaled icon
`<fl-navbar-button> <svg...> <fl-navbar-button>`

### fl-navbar-search

The search element provides two outputs to bind to, also a placeholder input
`<fl-navbar-search [searchPlaceholder]="'Search in Clients'" (onChange)="onSearchChange($event)">`
The 2 events are OnChange and OnKeyDown. OnChange is fired when the input value is changed (by blur or enter). The OnKeyDown event is fired on every keystroke

### fl-navbar-title

This element simply provides a styling on title instead of a search bar

### fl-navbar-menu

No special function, this element is just a container for the menu

### fl-menu-title

The text provided within these tags is displayed within the sidemenu as a title

### fl-menu-item

This is a container element for the items contained in the sidemenu.
This will accept an SVG for an item icon and a Span for the item text

## Example of HTML Use

See the demo project within the Github repository
