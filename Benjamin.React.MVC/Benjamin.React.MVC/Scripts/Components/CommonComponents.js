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

React.render(React.createElement(Benjamin.Forge.Footer, {css: "container body-content footer-container"}), $("benjamin_forge_footer").get(0));