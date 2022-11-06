import React from 'react';
import * as ReactDom from "react-dom";
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class SidenavProfile extends React.Component {
  render() {
    return (
      <div>


      <div class="sidenav">
       
        <span id="profile" onclick="goProfile()"> 
            Profile
        </span>
        <br />

        <span id="Experiences" onclick="goExp()"> 
            Experiences
        </span>
        <br />

        <span id="Abilities" onclick="goAb()">
            Abilities
        </span>
        <br />

        <span id="Projects" onclick="goProj()">
            Projects
        </span>
       <br />

        <span id="Languages" onclick="goLanguages()">
            Languages
        </span>
        <br />

      </div>
      <div id="main">
        <h1 id="profileSection">Truong My Song Dan</h1>
    <div id="mainheader">I'm a student</div>
    <hr />


    <table id = "nametable">
        <tr>
            <td>
                <h3>About me</h3>
                I am a third year student <br /> at UIT-VNU:HCM. <br /> I love IT and I wish <br /> to be developer in the future
            </td>
            <td>
                <img src="./pusheen.jpg" alt="Pusheen" width="200" height="200"/>
            </td>
            <td>
                <h3>Details</h3>
                <b>Name:</b> <br />
                 Truong My Song Dan <br />
                <b>Age: </b> <br />
                 20 <br />
                <b>Location: </b> <br />
                 UIT,VNU-HCM <br />
            </td>
        </tr>
    </table>


    <div id = "Experiencetab">
        <h2>Experiences</h2>
        <hr />
        <h3>Educations</h3>

        <table>
            <tr>
                <td id = "uni">
                    <b>UIT,VNU-HCM </b> <br />
                    Oct 2020-Current
                </td>
                <td>
                    <b>Information Systems </b> <br />
                    The education was mainly System design-based course, but I also learned about Web, Data analysis and more. During my time in college, I specialized in OOP, Data Science. Now, I am learning Web development.
                </td>
            </tr>
        </table>
        <hr />    

    </div>

    <div id = "Abilities">
        <h3>Skills</h3>
        <table id="skillTable">
            <tr>
                
                <td>
                    <table>
                        <tr>
                            <td>HTML/CSS</td>
                            <td><span class="selected">&#x2610; &#x2610; &#x2610;</span>
                            <span class="unselected"> &#x2610; &#x2610; </span>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>SQL</td>
                            <td><span class="selected">&#x2610; &#x2610; &#x2610;</span>
                            <span class="unselected">&#x2610; &#x2610; </span>
                            </td>
                        </tr>
                    </table>
                </td>


                <td>
                    <table>
                        <tr>
                            <td>Assembly</td>
                            <td><span class="selected">&#x2610; &#x2610; </span>
                            <span class="unselected">&#x2610; &#x2610; &#x2610;</span>
                            </td>
                        </tr>
                        <tr>
                            <td>C++</td>
                            <td><span class="selected">&#x2610; &#x2610; &#x2610; &#x2610;</span>
                            <span class="unselected">&#x2610; </span> 
                            </td>
                        </tr>
                    </table>
                </td>

            </tr>
        </table>

        <div id="github">
            See my profile on github
            <br /> <br />
            <button onClick="https://www.youtube.com/">See project on Github</button>
        </div>
        <hr />

        <div id="language">
            <h3>Languages</h3>

            <table>
                <tr>
                    
                    <td>
                        <table>
                            <tr>
                                <td>Vietnamese(Native)</td>
                                <td><span class="selected">&#x2610; &#x2610; &#x2610; &#x2610; &#x2610;</span>
                                    
                                </td>
                            </tr>
                        </table>
                    </td>
    
    
                    <td>
                        <table>
                            <tr>
                                <td>English (IELTS 6.0) </td>
                                <td><span class="selected">&#x2610; &#x2610; &#x2610;</span>
                                    <span class="unselected">&#x2610; &#x2610; </span>
                  
                                </td>
                            </tr>
                        </table>
                    </td>
    
                </tr>
            </table>
        </div>
    </div>

      </div>

      </div>
    
    );
  }
}

ReactDom.render(
  <SidenavProfile />,
  document.getElementById('sidenav')
);

export default App;
