import React, { useState } from 'react'
import "./works.scss"

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:"./assets/lisantura.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
  const handleClick = (direction) =>{
    direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 :2) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide+1 :0)
  }
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
       {data.map((item)=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="left_container">
                <div className="img_container">
                  <img src={item.icon} alt="" />
                </div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={item.img} alt="pagina de productos naturistas" />
            </div>
          </div>
        </div>
       ))
       }
      </div>
      <img src="assets/arrow.png"  className="arrow left" alt="flecha izquierda" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png"  className="arrow right" alt="flecha derecha" onClick={()=>handleClick("right")}/>
    </div>
  )
}
