import React from "react"


// export  class ErrorBoundary extends React.Component {
//     state = { hasError: false, errror : null };
  
//     static getDerivedStateFromError(error) {
//       return { hasError: true , error};
//     }
  
//     componentDidCatch(error, errorInfo) {
//       console.log(error, errorInfo)
//     }
  
//     render() {
//       if (this.state.hasError) {
//         return <h1>Something went wrong : {this.state.error.message}</h1>;
//       }
  
//       return this.props.children; 
//     }
//   }