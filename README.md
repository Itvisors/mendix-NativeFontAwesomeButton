## NativeFontAwesomeButton
Use Font Awesome in Mendix Native apps. The widget renders as a button.

## Features
- By default all solid and regular free icons
- Fork to use a pro license.

## Usage
Place this widget on the page where you want to show a Font Awesome icon. The widget renders as a button, it reacts to the same classes available to default buttons.

## App reload
During development you may get error messages about icons that could not be found. This happens when the app reloads while on a detail page. The library is not initialized in that case. Just reload the app so it starts at the home page.

## Initialization
The Font Awesome library needs to be initialized to allow icons to be referenced by name. This must be done before showing icons. So if you want to use Font Awesome on the home page you need to make sure that the library is initialized before attempting to show an icon.

This initialization step also ensures that the icons are included in the bundle.

This is recommended to use, even if your home page does not (yet) have Font Awesome icons. It would be very confusing if someone just adds an icon and that would break the app.

### Supporting entity
Create a non-persistent entity with a boolean flag. Example here: Entity NativePageContext attribute FontAwesomeInitialized.

### Home page
On the home page add a dataview with a datasource nanoflow. In that nanoflow, create a NativePageContext with FontAwesomeInitialized set to false

In the dataview, create two containers with conditional visibility on FontAwesomeInitialized

#### Initialize
In the container with conditional visibility FontAwesomeInitialized=false place the widget with action Initialize. Configure a nanoflow as library loaded action on the widget. In that nanoflow, set FontAwesomeInitialized to true

#### Initialization done
In the container with conditional visibility FontAwesomeInitialized=true, place the normal page content and use this widget to show icons.
