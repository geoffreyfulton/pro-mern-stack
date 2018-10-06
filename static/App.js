/*
const contentNode = document.getElementById('contents');
const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
const message = continents.map(c => `Hello ${c}!`).join(' ');

const component = <p>{message}</p>;
ReactDOM.render(component, contentNode);
*/

const contentNode = document.getElementById('contents');

class IssueFilter extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Placeholder for ",
            React.createElement(
                "em",
                null,
                "Issue Filter"
            )
        );
    }
}

class IssueRow extends React.Component {
    static get propTypes() {
        return {
            issue_id: React.PropTypes.number.isRequired,
            issue_title: React.PropTypes.string
        };
    }

    render() {
        const borderedStyle = { border: "1px solid silver", padding: 4 };
        return React.createElement(
            "tr",
            null,
            React.createElement(
                "td",
                { style: borderedStyle },
                this.props.issue_id
            ),
            React.createElement(
                "td",
                { style: borderedStyle },
                this.props.children
            )
        );
    }
}

class IssueTable extends React.Component {
    render() {
        const borderedStyle = { border: "1px solid silver", padding: 6 };
        return React.createElement(
            "table",
            { style: { borderCollapse: "collapse" } },
            React.createElement(
                "thead",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        { style: borderedStyle },
                        "Id"
                    ),
                    React.createElement(
                        "th",
                        { style: borderedStyle },
                        "Title"
                    )
                )
            ),
            React.createElement(
                "tbody",
                null,
                React.createElement(
                    IssueRow,
                    { issue_id: 1 },
                    "Error in console when clicking Add"
                ),
                React.createElement(
                    IssueRow,
                    { issue_id: 2 },
                    "Missing bottom border on panel"
                )
            )
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Placeholder for ",
            React.createElement(
                "em",
                null,
                "Issue Add"
            ),
            " entry form."
        );
    }
}

class IssueList extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Issue Tracker"
            ),
            React.createElement(IssueFilter, null),
            React.createElement("hr", null),
            React.createElement(IssueTable, null),
            React.createElement("hr", null),
            React.createElement(IssueAdd, null)
        );
    }
}

ReactDOM.render(React.createElement(IssueList, null), contentNode);