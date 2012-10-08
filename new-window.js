function NewWindow(links) {
    this.links = links;
    this.host  = window.location.host;
}

NewWindow.prototype.setAsNewWindow = function() {
    var that = this;

    that.links.each(function() {
        if ( this.host !== that.host ) {
            $(this).attr('target', '_blank');
        }
    });
}
