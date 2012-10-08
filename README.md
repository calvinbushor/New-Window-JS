External Window/Tab Client Side JS
================================

Sets an attribute of target="_blank" for external links.

@requires jQuery v1.8.*

Installation
------------------------
Put new-window.js before the end body script tag in your page.

    <script src="/javascripts/new-window.js"></script>

Create an instance of the Object
------------------------
Start the script by creating a new instance of the new window Object.

    var newWindow = new NewWindow(selector);

* selectorL The jQuery selected links you want to check against and potentionally add the attribute to. 

Run the script
------------------------
Run the script by calling .setAsNewWindow() on the NewWindow Object you created.
    newWindow.setAsNewWindow();

Example:
------------------------
Loop over all the selected anchors on the page and add target="_blank" to the non-internal links.

    var newWindow = new NewWindow($('a'));
    newWindow.setAsNewWindow();
