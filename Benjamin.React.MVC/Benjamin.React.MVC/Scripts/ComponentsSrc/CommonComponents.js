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

Benjamin.Forge.Header = React.createClass({
    render: function() {
        var linkElementComponents = [];

        for (var i = 0; i < this.props.links.length; i++) {
            var currentItem = this.props.links[i];
            linkElementComponents.push(<Benjamin.Forge.HeaderLinks url={currentItem.url} text={currentItem.text} />);
        }

        var applicationIcon = <Benjamin.Forge.ApplicationIcon text="Not Benjamin"/>;

        return (
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="header-content-container container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        {applicationIcon}
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            {linkElementComponents}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

Benjamin.Forge.ApplicationIcon = React.createClass({
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
            <a className={this.state.css} href={this.state.url}>{this.state.text}</a>
        );
    }
});

Benjamin.Forge.HeaderLinks = React.createClass({
    render: function() {
        return (
            <li>
                <a href={this.props.url}>{this.props.text}</a>
            </li>
        );
    }
});

React.render(<Benjamin.Forge.Footer css="container body-content footer-container"/>, $("benjamin_forge_footer").get(0));

var links = [
    {"url":"/","text":"Home"},
    {"url":"/Help","text":"API"}
];

React.render(<Benjamin.Forge.Header links={links} />, $("benjamin_forge_header").get(0));