import React from 'react';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link
  } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
// import HomeIcon from './HomeIcon';
import {AiFillHome } from 'react-icons/ai';
import { GrLinkedinOption, GrMail } from "react-icons/gr";
// import {HiOutlineDocumentDownload} from 'react-icons/hi';
// import {RiFileDownloadLine} from 'react-icons/ri';

/* Page Components */
// import Resume from './Resume';

function TopNav() {

  const style = { fill: "white", color: "white", height: "25px", fontSize: "24px" }
  

 return (
    <Router>
    {/* Top nav structure */}
    <div>
    <div className="top-nav-eyebrow-left">Social <span className="top-nav-eyebrow-right">Tim's Work</span></div>
      <div className="top-nav-items-container">
            
            <button className="top-nav-item">
            <Link to="/"><div className="top-nav-link"><AiFillHome style={style} /></div></Link>
            </button>
            {/* <button className="top-nav-item">
            <Link to="/projects"><div className="top-nav-link">Projects</div></Link>
            </button> */}
            <button className="top-nav-item">
            <Link to="/linkedin"><div className="top-nav-link"><GrLinkedinOption style={style} /></div></Link>
            </button>
            <button className="top-nav-item">
            <Link to="/mail"><div className="top-nav-link"><GrMail style={style} /></div></Link>
            </button>
            <span className="pipe-divider">|</span>
            <button className="top-nav-item">
            <HashLink smooth to="/#projects"><div className="top-nav-link"><span style={style}>Projects</span></div></HashLink>
            </button>
            {/* <button className="top-nav-item">
            <Link to="/resume"><div className="top-nav-link">  <span style={style}>Resume</span></div></Link>
            </button> */}
            
      </div>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/resume" component={() => { 
     window.location.href = 'mailto:timothyjamespike@gmail.com'; 
     return null;
}}>
        </Route>

        <Route path="/mail" component={() => { 
     window.location.href = 'mailto:timothyjamespike@gmail.com'; 
     return null;
}}>
        </Route>
        <Route path='/linkedin' component={() => { 
     window.location.href = 'https://www.linkedin.com/in/timothy-pike-387b51a8/'; 
     return null;
}}/>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
 )
}

/* Nav item components */
function Home() {
    return <div></div>;
  }
  
  // function Resume() {
  //   return <img src="../images/design-sys-img-01.png" alt="a somethin"></img>;
  // }

  // function Contact() {
  //   return <h2>Contact</h2>;
  // }

export default TopNav;