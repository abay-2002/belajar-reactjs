import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

function FormattedDate(props){
    return (
        <div>
            <p>It is {props.date.toLocaleTimeString()}.</p>
        </div>
    )
}

// Class component
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    // Lifecycle
    componentDidMount() { this.timerID = setInterval(() => this.tick(),1000);}
    // While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store something that doesn’t participate in the data flow (like a timer ID).

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                {/* <p>It is {this.state.date.toLocaleTimeString()}</p> */}
                <FormattedDate date={this.state.date}/>
            </div>
        );
    }
}

root.render(<Clock />);