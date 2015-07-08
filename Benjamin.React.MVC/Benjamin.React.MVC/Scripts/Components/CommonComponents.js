var Benjamin = Benjamin || {};
Benjamin.Forge = Benjamin.Forge || {};

Benjamin.Forge.Footer = React.createClass({displayName: "Footer",
    getInitialState: function() {
        return {css: []};
    },
    render: function () {

        if (this.props.css != "") {
            this.state.css = this.props.css;
        } else {
            this.state.css = "container body-content footer-container";
        }

        return (
            React.createElement("div", {className: this.state.css}, 
                React.createElement("hr", null), 
                React.createElement("footer", null, 
                    React.createElement("p", null, "© 2015 - Benjamin")
                )
            )
        );
    }
});

Benjamin.Forge.Header = React.createClass({displayName: "Header",
    render: function() {
        var linkElementComponents = [];

        for (var i = 0; i < this.props.links.length; i++) {
            var currentItem = this.props.links[i];
            linkElementComponents.push(React.createElement(Benjamin.Forge.HeaderLinks, {url: currentItem.url, text: currentItem.text}));
        }

        var applicationIcon = React.createElement(Benjamin.Forge.ApplicationIcon, {text: "Not Benjamin"});

        return (
            React.createElement("div", {className: "navbar navbar-inverse navbar-fixed-top"}, 
                React.createElement("div", {className: "header-content-container container"}, 
                    React.createElement("div", {className: "navbar-header"}, 
                        React.createElement("button", {type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-collapse"}, 
                            React.createElement("span", {className: "icon-bar"}), 
                            React.createElement("span", {className: "icon-bar"}), 
                            React.createElement("span", {className: "icon-bar"})
                        ), 
                        applicationIcon
                    ), 
                    React.createElement("div", {className: "navbar-collapse collapse"}, 
                        React.createElement("ul", {className: "nav navbar-nav"}, 
                            linkElementComponents
                        )
                    )
                )
            )
        );
    }
});

Benjamin.Forge.ApplicationIcon = React.createClass({displayName: "ApplicationIcon",
    getInitialState: function() {
        return {
            css: "navbar-brand",
            url: "/",
            text: "Benjamin"
        };
    },
    render: function() {

        if (this.props.css != null && this.props.css != "") {
            this.state.css = this.props.css;
        }

        if (this.props.url != null && this.props.url != "") {
            this.state.url = this.props.url;
        }

        if (this.props.text != null && this.props.text != "") {
            this.state.text = this.props.text;
        }

        return (
            React.createElement("a", {className: this.state.css, href: this.state.url}, this.state.text)
        );
    }
});

Benjamin.Forge.HeaderLinks = React.createClass({displayName: "HeaderLinks",
    render: function() {
        return (
            React.createElement("li", null, 
                React.createElement("a", {href: this.props.url}, this.props.text)
            )
        );
    }
});

React.render(React.createElement(Benjamin.Forge.Footer, {css: "container body-content footer-container"}), $("benjamin_forge_footer").get(0));

var links = [
    {"url":"/","text":"Home"},
    {"url":"/Help","text":"API"}
];

React.render(React.createElement(Benjamin.Forge.Header, {links: links}), $("benjamin_forge_header").get(0));