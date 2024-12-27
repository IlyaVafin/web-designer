import React, { useState } from 'react'

const IndustryCard = ({title, id, img}) => {
    const [showImg, setShowImg] = useState(false)
    const setShowImgFunc = () => {
        setShowImg(true)
    }
    const deleteImgFunc = () => {
        setShowImg(false)
    }
  return (
    <>
    <div onMouseEnter={setShowImgFunc} onMouseLeave={deleteImgFunc} className="industry-card__wrap">
        <p>{title}</p>
        <span>{id}</span>
        <img  style={{position: 'absolute',  opacity: showImg ? '1' : '0', transition: 'all 0.5s ease', left: '900px', zIndex: '-1'}} width={300} height={300} src= {img} alt="" />
    </div>
    </>
  )
}

export default IndustryCard