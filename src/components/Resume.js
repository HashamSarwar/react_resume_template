import React from "react";
import "./Resume.css";

export default function Resume() {
  const facebook = require("./assets/facebook.png");
  const instagram = require("./assets/instagram.png");
  const twitter = require("./assets/twitter.png");
  const youtube = require("./assets/youtube.png");
  const github = require("./assets/github.png");
  const profile = require("./assets/profile.png");
  return (
    <>

    <div className="page">

  
      <div className="personal-detail">
        <div className="name-and-title">
          <h2 className="name">Hasham Sarwar</h2>
          <h4 className="title">Electrical Engineer</h4>
        </div>
        <div className="contact-detail">
          <table border="0">
            <tr>
              <td className="contact-table-label">Address: </td>
              <td className="contact-table-value">House No. 18G/1890<br/> Wah Cantt, Pakistan</td>
            </tr>
            <tr>
              <td className="contact-table-label">Email: </td>
              <td className="contact-table-value">hsarwar0337@gmail.com</td>
            </tr>
            <tr>
              <td className="contact-table-label">Mobile: </td>
              <td className="contact-table-value">+92-315-1992592</td>
            </tr>
            <tr>
              <td className="contact-table-label">Whatsapp: </td>
              <td className="contact-table-value">+92-337-1611258</td>
            </tr>
            <tr>
              <td className="contact-table-label">D.O.B: </td>
              <td className="contact-table-value">September 1, 1999</td>
            </tr>
            {/* <tr>
              <td colspan="2">
                <div className="social-links">
                  <img className="social-icons" src={facebook}/>
                  <img className="social-icons" src={instagram}/>
                  <img className="social-icons" src={twitter}/>
                  <img className="social-icons" src={youtube}/>
                  <img className="social-icons" src={github}/>
                </div>
              </td>
            </tr> */}
          </table>
        </div>
        <div>
          <img className="profile-image" src={profile}/>
        </div>
      </div>
      <hr/>

      {/* Work Experience Section */}
      <div className="work-experience">
        <hr className="work-experience-line"/>
        <h2 className="headings">Work Experience</h2>
      </div>
      <div className="sections-table">
          <table border="0">
            <tr>
              <td className="sections-table-label">August 2022 - Present</td>
              <td className="sections-table-value">
                <h3 className="sub-headings">Information Security Engineer at QuantumRonics</h3>
                <ul>
                  <li>Implement Efficient Quantum Full Adder using IBM Quantum Experience.</li>
                  <li>Develop International Data Encryption Algorithm (IDEA) in C++.</li>
                  <li>Develop Desktop Application to encrypt and decrypt files.</li>
                  <li>Develop E-commerce Android App using Java and Firebase.</li>
                  <li>Develop E-commerce Website using React, Firebase, Bootstrape (waltonestore.com).</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="sections-table-label">Dec 2021 - june 2022</td>
              <td className="sections-table-value">
              <h3 className="sub-headings">Internship at Horizon Tech Services</h3>
                <ul>
                  <li>Created Vehicle Tracking System using Sim808 and Arduino also develop its Android App.</li>
                  <li>Conduct Research on Code Obfuscation and develop tool to DeObfuscate Android App.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="sections-table-label">July - Sept 2021</td>
              <td className="sections-table-value">
              <h3 className="sub-headings">Internship at Wah Brass Mill</h3>
                <ul>
                  <li>At Wah Brass Mill i am the part of team doing case study on power consumption of Air & Nitrogen Generator to increase their efficiency.</li>
                </ul>
              </td>
            </tr>
           
          </table>
        </div>


        {/* Education Section */}
        <div className="work-experience">
        <hr className="work-experience-line"/>
        <h2 className="headings">Education</h2>
      </div>
      <div className="sections-table">
          <table border="0">
            <tr>
              <td className="sections-table-label">Feb 2023 - Present</td>
              <td className="sections-table-value">
                <h3 className="sub-headings">Master’s in Information Security</h3>
                <span>Bahria University Islamabad</span>
              </td>
            </tr>
            <tr>
              <td className="sections-table-label">2017 - 2021</td>
              <td className="sections-table-value">
              <h3 className="sub-headings">Bachlor’s in Electrical Engineering</h3>
                <span>COMSATS University Islamabad, Wah Cantt Campus</span>
              </td>
            </tr>
            <tr>
              <td className="sections-table-label">2015 - 2017</td>
              <td className="sections-table-value">
                <h3 className="sub-headings">F.Sc Pre-Engineering</h3>
                <span>Sir Syed College, Wah Cantt Campus II</span>
              </td>
            </tr>
            <tr>
              <td className="sections-table-label">2012 - 2014</td>
              <td className="sections-table-value">
                <h3 className="sub-headings">SSC (Science)</h3>
                <span>Sir Syed College, Wah Cantt Campus II</span>
              </td>
            </tr>
           
           
          </table>
        </div>



        {/* Acheivement Section */}
        <div className="work-experience">
        <hr className="work-experience-line"/>
        <h2 className="headings">Achievement (Research Papers on arxiv.org)</h2>
      </div>
      <div className="sections-table">
          <table border="0">
            <tr>
              <td className="sections-table-label">Feb 2022 - March 2023</td>
              <td className="sections-table-value">
                <h3 className="sub-headings">DEPRODEXCATOR: A TOOL FOR DECOMPILING AND DEOBFUSCATING PROGUARD AND DEXGUARD OBFUSCATED ANDROID APPLICATIONS</h3>
                <ul>
                  <li>DOI: https://doi.org/10.31224/2910</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="sections-table-label">August 2022 - March 2023</td>
              <td className="sections-table-value">
                <h3 className="sub-headings">Efficient Quantum Full Adder using IBM Quantum Experience</h3>
                <ul>
                  <li>DOI: https://doi.org/10.31224/2952</li>
                </ul>
              </td>
            </tr>
           
           
          </table>
        </div>

         {/* Certification Section */}
         <div className="work-experience">
        <hr className="work-experience-line"/>
        <h2 className="headings">Certificates</h2>
      </div>
      <div className="sections-table">
          <table border="0">
            <tr>
              <td className="sections-table-label">July - Sept 2015</td>
              <td className="sections-table-value">
                <h3 className="sub-headings">Web & Graphic Designing</h3>
                <span>HTML5, CSS3, Javascript, Photoshop</span>
              </td>
            </tr>
            <tr>
              <td className="sections-table-label">May - August 2014</td>
              <td className="sections-table-value">
              <h3 className="sub-headings">Office Automation</h3>
                <span>Ms Word, Ms Excel, Ms PowerPoint</span>
              </td>
            </tr>
            <tr>
              <td className="sections-table-label">Feb - April 2020</td>
              <td className="sections-table-value">
                <h3 className="sub-headings">Wordpress</h3>
                <span>Elemeter, Themes, Plugin</span>
              </td>
            </tr>
            <tr>
              <td className="sections-table-label">2023</td>
              <td className="sections-table-value">
                <h3 className="sub-headings">Ielts</h3>
                <span>Speaking : 8.0, Listening : 7.5, Reading : 7.5, Writing : 6.0, Overall : 7.5/9.0</span>
              </td>
            </tr>
           
           
          </table>
        </div>


{/* Technical Skills Section */}
<div className="work-experience">
        <hr className="work-experience-line"/>
        <h2 className="headings">Technical skills</h2>
      </div>
      <div className="sections-table">
          <table border="0">
            <tr>
              <td className="sections-table-label">Advance</td>
              <td className="sections-table-value">
                <span className="sub-headings">Problem Solving, Digital Logic Design, PCB Designing, Arduino, Raspberry pi, Microsoft
Office, Android Development, Web Development, Python, Java, React Js, Wordpress,
Firebase, Cloud Firestore</span>
              </td>
            </tr>
            <tr>
              <td className="sections-table-label">Intermediate</td>
              <td className="sections-table-value">
              <span className="sub-headings">Circuit Analysis, Linux, C++, Latex</span>
              </td>
            </tr>
          
           
           
          </table>
        </div>

        {/* Conferences Attended Section */}
        <div className="work-experience">
        <hr className="work-experience-line"/>
        <h2 className="headings">Conferences & Workshop Attended</h2>
      </div>
      <div className="sections-table">
          <table border="0">
            <tr>
              <td className="sections-table-label">July 13, 2023</td>
              <td className="sections-table-value">
                <h3 className="sub-headings">Advanced Numerical Techniques (FLAC) for the Design of Tunnels, Organized
by Pakistan Engineering Council.</h3>
              </td>
            </tr>
            <tr>
              <td className="sections-table-label">March 18, 2023</td>
              <td className="sections-table-value">
              <h3 className="sub-headings">One day summit of talks on “ Quantum Computing”, Electrical and Mechanical
2023 Engineering College</h3>
              </td>
            </tr>
            <tr>
              <td className="sections-table-label">Sept 20, 2022</td>
              <td className="sections-table-value">
                <h3 className="sub-headings">1st International Symposium on Quantum Computing, Air University, Islamabad</h3>
              </td>
            </tr>
            <tr>
              <td className="sections-table-label">June 16,17 2022</td>
              <td className="sections-table-value">
                <h3 className="sub-headings">Two Days workshop on “ Introduction to Quantum Computing”, Electrical and Mechanical Engineering College, NUST, Rawalpindi.</h3>
                
              </td>
            </tr>
           
           
          </table>
        </div>



{/* Languages Section */}
<div className="work-experience">
        <hr className="work-experience-line"/>
        <h2 className="headings">Languages</h2>
      </div>
      <div className="sections-table">
          <table border="0">
          <tr>
              <td className="sections-table-label">Professional</td>
              <td className="sections-table-value">
              <span className="sub-headings">English</span>
              </td>
            </tr>
            <tr>
              <td className="sections-table-label">Native</td>
              <td className="sections-table-value">
                <span className="sub-headings">Punjabi</span>
              </td>
            </tr>
            <tr>
              <td className="sections-table-label">Native</td>
              <td className="sections-table-value">
                <span className="sub-headings">Urdu</span>
              </td>
            </tr>
            
          
           
           
          </table>
        </div>


        {/* Languages Section */}
<div className="work-experience">
        <hr className="work-experience-line"/>
        <h2 className="headings">References</h2>
      </div>
      <div className="sections-table">
          <table border="0">
          <tr>
              <td className="sections-table-label"></td>
              <td className="sections-table-value">
              <h3 className="sub-headings">Dr. Mushtaq Ahmad Bhatti</h3>
              <span className="sub-headings">Principal Engineer at Comsats University Islamabad Wah Campass (6 years) Professional.
<br/>Email : mushtaq.bhatti@ciitwah.edu.pk, Mobile : +92-333-5434444</span>
              </td>
            </tr>
            <tr>
              <td className="sections-table-label"></td>
              <td className="sections-table-value">
              <h3 className="sub-headings">Fasih Ur Rehman</h3>
                <span className="sub-headings">Assistant Professor at Comsats University Islamabad Wah Campass (2 years) Professional.
<br/>Email : fasih@cuiwah.edu.pk, Mobile : +92-321-5305989</span>
              </td>
            </tr>
            
            
          
           
           
          </table>
        </div>









        </div>
    </>
  );
}
