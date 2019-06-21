import React from 'react';

function Render(){
  
 const {PI} = Math;
    const circle = {
        label: 'Circle A',
        radius: 2
    };

    const circleArea = ({radius}) => {
     (PI * radius * radius).toFixed(2);
    }

    console.log(circleArea(circle))
    return (
        <div>{circleArea}</div>
    )
}

export default Render
