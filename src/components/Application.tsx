import { h, Component } from "preact";

export interface ApplicationProps {
    compiler: string;
    framework: string;
}

export default class Application extends Component<ApplicationProps, {}> {
    render() {
        console.log("Rendering Application");

        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.compiler}!</h1>
                <span>Made awesome with VSCode</span>
            </div>
        )
    }
}
