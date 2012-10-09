function NewWindow(links, settings) {
    this.links = links;
    this.hostname  = window.location.hostname;
    this.hostnameLength = window.location.hostname.length;

    this.settings = $.extend({}, this.defaults, settings);
}

NewWindow.prototype.defaults = {
    className: false,
    allowSubdomains: false
}

NewWindow.prototype.filterLinks = function(i, link) {
    if ( this.settings.allowSubdomains ) {
        return link.hostname !== this.hostname && link.hostname.substr(-this.hostnameLength) !== this.hostname;
    } else {
        return link.hostname !== this.hostname;
    }
}

NewWindow.prototype.setAsNewWindow = function() {
    var links = this.links.filter( $.proxy(this.filterLinks, this) );

    links.attr('target', '_blank');

    if ( this.settings.className ) {
        links.addClass( this.settings.className );
    }
}