// import React from 'react'
// import ReactDOM from 'react-dom'

// class Hello extends React.Component {

//   componentDidMount(){
  
//       // get this intentContainer using ref (Its your parent)
//       var intentContainer = this.refs.intentContainer;
  
//       // this will return the count of all childrens 
//       var childrenCount = this.refs.intentContainer.children.length;
  
//       alert(childrenCount);
      
//       // get the count by particular class name from parent dom
//       var countByClass = ReactDOM.findDOMNode(intentContainer).getElementsByClassName('intent').length;
      
//       alert(countByClass);
      
  
//     }
  
//      render() {
//         return (
//           <div ref="intentContainer">
//               <div className="intent">abc</div>
//              <div className="intent">abc</div>
//           </div>
//         );
//      }
//   }
  
//   ReactDOM.render(
//     <Hello name="World" />,
//     document.getElementById('container')
//   );
  