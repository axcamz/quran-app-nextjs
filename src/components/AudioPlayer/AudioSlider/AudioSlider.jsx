import React from 'react'

import style from './AudioSlider.module.css'

const AudioSlider = ({classNames, max, buffer, handleChange, value}) => {

  return (
    <div className={classNames}>
        <input value={value} onChange={handleChange} buffered-width={20} className={style.audioSlider} type="range" name="" id="slider" max={max} />
    </div>
  )
}

export default AudioSlider