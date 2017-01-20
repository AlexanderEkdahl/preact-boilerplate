import { Component, h } from "preact";

export interface IApplicationProps {
    compiler: string;
    framework: string;
}

export default class Application extends Component<IApplicationProps, {}> {
    public render() {
        return (
            <div>
                <h1>Hello from {this.props.framework} and {this.props.compiler}!</h1>
                <span>Made awesome with VSCode</span>
            </div>
        );
    }
}
