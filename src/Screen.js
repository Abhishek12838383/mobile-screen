import React from 'react'
import './Screen.css'
import nav from './Frame 5606.png';
import tick from './Vector (2).png'
import dot from './Ellipse 25.png'
import right from './chevron-right.png'
import right1 from './chevron-right (1).png'
import bag from './Frame 5591.png'
import filter from './sliders-horizontal.png'
import blue from './check-square-2.png'
import gray from './check-square-2 (2).png'
import share from './paperclip.png'
import white from './Vector (3).png'
import logo from './Logo.svg'

const Screen = () => {
  return (
    <div className='screen'>

<div className="chatapp">
        {/* nav */}
      
<div className="nav">

<div className="" style={{display:'flex',gap:'10px'}}>
<div className="logo">
    <img src={nav} alt="" />
</div>

<div className="screen-name">
    <div className='one'>Timpu <img src={tick} alt="" /></div>
    <div className='two'>Chat Assistant</div>
</div>
</div>

<div className="online">
  <img src={dot} alt="" />
  Online
</div>

</div>

{/* chatbox */}

<div className="rec">
Hi Sam! I am your personal shopping assistant , how can i help you today ?
</div>
<div className="rec-time">
  4:45 PM
</div>

<div className="send">
I am looking for a hand bag, with long strap .
</div>
<div className="send-time">
  4:46 PM
</div>

{/* tags */}

<div className="tag-head">
  Popular tags for handbag
</div>

<div className="tags">
  <div className="tag-1">
CLUTCH
  </div>
  <div className="tag-2">
    FABRIC LINING
  </div>
  <div className="tag-3">
    BAGGIT
  </div>
  <div className="tag-4">
    MULTI 
  </div>
  <img src={right} alt="" />
</div>

{/* component */}

<div className="comp">
  <div className="detail">

  <div className="img">
  <img src={bag} alt="" />
  </div>

  <div className="comp-name">
    <div className="comp-one">Bags on <span>Timpu</span></div>
    <div className="comp-two">1123 Products <img src={right1} alt="" /></div>
  </div>

  </div>

  <div className="text">
  Or set filter and help us choose the best bag for you.
  </div>

</div>
<div className="rec-time">
  4:48 PM
</div>

{/* filter */}

<div className="filter-head">
  <div className="filter-one">Select filters</div>
  <div className="filter-two"><img src={filter} alt="" /> Filter</div>
</div>

<div className="filters">

  <div className="filters-one">
<div className="fil-1">Strdp - Long <img src={blue} alt="" /></div>
<div className="fil-2">Color <img src={gray} alt="" /></div>
<div className="fil-3">Size <img src={gray} alt="" /></div>
  </div>


  <div className="filters-two">
<div className="fil-2">Brand <img src={gray} alt="" /></div>
<div className="fil-2">Material <img src={gray} alt="" /></div>
  </div>

</div>

{/* msg */}

<div className="imgg">
<div className="img">
<div className="input">
  <input type="text" />
  <img src={share} alt="" />
</div>
<div className="s">
<img src={white} alt="" />
</div>
</div>

<div className="logoo">
  Powered by <span>Krunk.ai</span>
  <img src={logo} alt="" />
</div>
</div>



</div>
    </div>
  )
}

export default Screen
