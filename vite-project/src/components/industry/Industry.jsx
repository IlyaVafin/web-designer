import React from 'react'
import dataIndustry from './DataIndustry'
import IndustryCard from './IndustryCard'
import './Industry.css'
const Industry = () => {
  return (
    <>
    <div style={{paddingTop: '140px', marginBottom: '52px'}} className="industry__wrapper">
      <div style={{maxWidth: '1440px', margin: '0 auto'}} className="indsurey-container">
        <h1>INDUSTRY EXPERTISE</h1>
        </div>
        <section className="industry__list">
            {dataIndustry.map((v, id) => {
              return <IndustryCard  key={id} title={v.title} id={v.id} img = {v.img}/>
            })}
        </section>
    </div>
    </>
  )
}

export default Industry