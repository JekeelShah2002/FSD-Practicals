import React from 'react'
import './Footer.css'

export default function Header(props) {
  return (
    <div className="footer">
      <h5>{props.note}</h5>
    </div>
  );
}
