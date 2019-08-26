import React from 'react';


export default function Paragraph({text}){    
    return (
        <div dangerouslySetInnerHTML={{__html: text}} />
    );
    
}