import React, { useState,useEffect } from 'react'
import PortfolioList from '../portfoliolist/PortfolioList'
import "./portfolio.scss"
import{
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio
} from "../../data"

export default function Portfolio() {
  const [selected,setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list =[
    {
      id:"featured",
      title: "Featured"
    },
    {
      id:"webapp",
      title:"Web App"
    },
    {
      id:"mobileapp",
      title:"Mobile App"
    },
    {
      id:"design",
      title:"Design"
    },
    {
      id:"branding",
      title: "Branding"
    },
  ]

  useEffect(() => {
    switch(selected){
        case "featured":
          setData(featuredPortfolio);
          break;
        case "webapp":
          setData(webPortfolio);
          break;
        case "mobileapp":
          setData(mobilePortfolio);
          break;
        case "design":
          setData(designPortfolio);
          break;
        case "branding":
         setData(contentPortfolio);
         break;
        default:
          setData(featuredPortfolio);
    }
  }, [selected])
  return (
    <div className= "portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <ul>
        {list.map((item)=>(
          <PortfolioList 
          title={item.title}
          active={selected === item.id}
          setSelected = {setSelected}
          id= {item.id}
          />
        ))}
      </ul>
      <div className="container">
       {data.map((d)=>(
        <div className="item">
          <img src={d.img} alt=""/>
          <h3>{d.title}</h3>
        </div>
       ))}
      
      </div>
    </div>
  )
}
