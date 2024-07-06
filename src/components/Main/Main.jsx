import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}= useContext(Context)





  return (
    <div  className='main'> 
    <div className="nav">
      <p>MITS-GPT.</p>
      <img src={assets.mits_logo} alt="" />
    </div>
     <div className="main-container">
         
         {!showResult
         ?<>
         

      <div className="greet">
        <p><span>Hello, Dev</span></p>
        <p>How can i help you today</p>
      </div>
      <div className="cards">
        <div className="card">
          <p>IoT stands for the Internet of Things. It refers to the network of physical objects or "things" embedded with sensors</p>
          <img src={assets.compass_icon} alt="" />
        </div>
        <div className="card">
          <p>Compiler design is a field of computer science that focuses on the development of software tools called compilers.</p>
          <img src={assets.bulb_icon} alt="" />
        </div>
        <div className="card">
          <p>AIML stands for Artificial Intelligence Markup Language. It's an XML-based markup language used to create chatbots or conversational agents</p>
          <img src={assets.message_icon} alt="" />
        </div> 
        <div className="card">
          <p>Data mining is the process of discovering patterns, correlations, anomalies, and other insights from large datasets using various computational techniques</p>
          <img src={assets.code_icon} alt="" />
        </div>
      </div>
         
         
         </>
         :<div className='result'>
          <div className="result-title">
            <img src={assets.mits_logo} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading
            ? <div className="loader">
              <hr />
              <hr />
              <hr />



            </div>
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
            
            }

            
          </div>

         

         </div>

         }
        





      

      <div className="main-bottom">
        <div className="search-box">
          <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
        
        <div>
          <img src={assets.gallery_icon} alt="" />
          <img src={assets.mic_icon} alt="" />
          {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
        </div>
        </div>
        <p className='bottom-info'>
          MITS-GPT can make mistakes. Consider checking important information.
        </p>
      </div>
      

     </div>



    </div>
  )
}

export default Main