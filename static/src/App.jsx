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
        return (
            <div>Placeholder for <em>Issue Filter</em></div>
        )
    }
}


class IssueRow extends React.Component {
    static get propTypes() {
        return {
            issue_id: React.PropTypes.number.isRequired,
            issue_title: React.PropTypes.string
        };
    };

    render() {
        const borderedStyle = {border: "1px solid silver", padding: 4};
        return (
            <tr>
                <td style={borderedStyle}>{this.props.issue_id}</td>
                <td style={borderedStyle}>{this.props.children}</td>
            </tr>
        )
    }
}


class IssueTable extends React.Component {
    render() {
        const borderedStyle = {border: "1px solid silver", padding: 6};
        return (
            <table style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th style={borderedStyle}>Id</th>
                        <th style={borderedStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow issue_id={1}>Error in console when clicking Add</IssueRow>
                    <IssueRow issue_id={2}>Missing bottom border on panel</IssueRow>
                </tbody>
            </table>
        )
    }
}


class IssueAdd extends React.Component {
    render() {
        return (
            <div>Placeholder for <em>Issue Add</em> entry form.</div>
        )
    }
}


class IssueList extends React.Component {
    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />
            </div>
        );
    }
}


ReactDOM.render(<IssueList />, contentNode);
