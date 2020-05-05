import React from 'react';
import img from './pic.jpg'


import './App.css';

function App() {
  return (
    <div className="App">
      <section class="about">
      <div class="box">
            <div class="profilesummary">
                <div class="profile-image">
                <img src="/pic.jpg" class="profile-pic" />
                </div>
                <div class="profile-heading">
                    <h1 class="h1">Lokesh M R</h1>
                    <p>
                        <span class="icon"><i class="fa fa-envelope-o" aria-hidden="true">

                        </i></span>lokesh3366@gmail.com
                    </p>
                    <p>
                        <span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                        Tumkur,Karnataka
                    </p>
                </div>
            </div>
            <div class="profile-description">
                <div class="about1">About Me</div>
                <p>I am an enthusiastic, self-motivated,responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.

                </p>
            </div>
        </div>
        </section>
        <section class="expertise">
        <h1 class="ml-60">My Expertise</h1>
        <div class="box">
            <div class="row-container">
                <div class="left w-100 h-100">
                    <img src="/python.jpg" class="w-100 h-100"></img>
                </div>
                <div class="right w-500 pl-25 v-top">
                    <h2>Python</h2>
                    <p>Developed Python Applications.Expertise in building  User Interface and Database components.</p>
                </div>
            </div>

            <div>
                <div class="left w-150">
                    <img src="/html.jpeg" class="w-100 h-100"></img>
                </div>
                <div class="right w-500 pl-25">
                    <h2>HTML & CSS3</h2>
                    <p>Developed and deployed HTML applications.Expertise in building Class based and Functional components.</p>
                </div>
            </div>

            <div>
                <div class="left w-150">
                    <img src="/react.jpeg" class="w-100 h-100"></img>
                </div>
                <div class="right w-500 pl-25">
                    <h2>ReactJs</h2>
                    <p>Developed and deployed ReactJs applications.Expertise in building Class based and Functional components.</p>
                </div>
            </div>
        </div>
      

        </section>
        <section class="expertise">
        <h1 class="ml-60">Links & Projects</h1>
        <div class="box">
            <div class="row-container">
                <div class="left w-100 h-100">
                    <img src="/linked.jpeg" class="w-100 h-100"></img>
                </div>
                <div class="right w-500 pl-25 v-top">
                    <h2>GitHub Contribution</h2>
                    <p>https://github.com/Lokesh-MR/todo</p>
                </div>
            </div>

            <div>
                <div class="left w-150">
                    <img src="/git.jpeg" class="w-100 h-100"></img>
                </div>
                <div class="right w-500 pl-25">
                    <h2>LinkedIn</h2>
                    <p>https://www.linkedin.com/in/lokesh-m-r-653130174</p>
                </div>
            </div>

            
        </div>
          </section>  
          <section class="contact">
          <h1 class="ml-60">Contact</h1>
          <div class="box">
            <div class="contact">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <h2>+91-9844670001</h2>
            </div>
            <div class="contact">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <h2>lokeshmr3366@gmail.com</h2>
            </div>
        </div>
        
          </section>
          <section class="footer">
          <div class="box text-center">
            <h2>HIRE ME</h2>
        </div>
          </section>
      
    </div>
    
  );
}

export default App;
