import React from "react";

export class ErrorBoundary extends React.Component {
    state ={
        isError: false
    }
    static getDerivedStateFromError(error){
        return ({isError: true})
    }
    render() {
        if(!this.state.isError){
            return this.props.children
        }
        return <div className='modal'>Что-то пошло не так</div>
    }
}
