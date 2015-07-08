var Benjamin = Benjamin || {};
Benjamin.Forge = Benjamin.Forge || {};

Benjamin.Forge.Footer = React.createClass({
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
            <div className={this.state.css}>
                <hr />
                <footer>
                    <p>&copy; 2015 - Benjamin</p>
                </footer>
            </div>
        );
    }
});

React.render(<Benjamin.Forge.Footer css="container body-content footer-container"/>, $("benjamin_forge_footer").get(0));