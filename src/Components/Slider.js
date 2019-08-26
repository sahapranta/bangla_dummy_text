import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
  

const PrettoSlider = withStyles({
    root: {
      color: '#52a',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active:{},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);
  
  export default function CustomSlider({set, para, max}){    
    return (
        <PrettoSlider
         valueLabelDisplay="auto"
         aria-label="pretto slider"
         value={para}
         max={max}
         min={1}
         onChange={(e, v)=>set(v)}/>
    )
    
  }