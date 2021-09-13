import { init } from 'ityped'
import {useEffect,useRef} from 'react'
import "./intro.scss"
export default function Intro() {
  
  const textRef =useRef()
  useEffect(() => {
      //Esto es parte de la libreria
      //Se uso el use effect porque la documentacion lo tenia con componentDidmount
      init(textRef.current,{
        showCursor:true,
        typeSpeed: 80,
        backSpeed: 60,
        backDelay:1500,
        strings:['Developer','UX Designer','UI Designer']
      })
    
  }, [])
  return (
    <div className ="intro" id="intro">
       <div className="left">
        <div className="img_container">
          <img src="assets/man.png" alt="its me" />
        </div>
       </div>
       <div className="right">
         <div className="wrapper">
           <h2>Hi There,I'm</h2>
           <h1>Enrique Alvarado</h1>
           <h3>Freelance <span ref={textRef}></span></h3>
         </div>
         <a href="#portfolio">
           <img src="assets/down.png" alt="link to portfolio" />
         </a>
       </div>
    </div>
  )
}
