import React from 'react';

function Alert(props) {
  return (
 
         <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong>:{props.alert.msg} 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
      
  
  )
}

export default Alert
