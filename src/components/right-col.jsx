import React from 'react'
import { Col, Image } from 'react-bootstrap'
import banner from "../img/hero-desktop.jpg"

const RightCol = () => {
  return (
    <Col md={5} className='right-col'>
      <Image src={banner} alt='banner' className='right-banner'/>
    </Col>
  )
}

export default RightCol
