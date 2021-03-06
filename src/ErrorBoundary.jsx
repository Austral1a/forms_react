import React from 'react';

export class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    };

    static getDerivedStateFromError(error) {
        return {hasError: error};
    };

    render() {
        if(this.state.hasError) {
            return (
                <div className='ui-error'>Something went wrong</div>
            );
        }
        return this.props.children;
    };
}
