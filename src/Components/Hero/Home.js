import React from "react";
import "./Home.css";

import hero from "./hero.jpg";
import html from "./icons/html.png";
import css from "./icons/css.png";
import js from "./icons/js.png";
import sass from "./icons/sass.png";
import next from "./icons/next.svg";
import react from "./icons/react.png";

import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
// import { LoremIpsum } from 'react-lorem-ipsum';

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3 className="uppercase">welcome to my world</h3>
            <h1>
              Hi, I'm <span>Tohir Babs</span>
            </h1>

            <h2>
              a(n){" "}
              <span>
                <Typewriter
                  words={[
                    "Web Designer.",
                    "Frontend Dev.",
                    "Blogger.",
                    "Engr Student.",
                    "CAD Designer.",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I'm a 21 year old with ever burning curiosity and a deep
              fascinaton with web technologies which motivates me to build and
              develop web applications that optimizes user experiences with
              minimalist principles
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4 className="uppercase">find me with</h4>
                <div className="button">
                  <a href="https://twitter.com/BabsTohir">
                    <button className="btn_shadow">
                      <i className="fab fa-twitter"></i>
                    </button>
                  </a>
                  <a href="https://github.com/TohirBabs">
                    <button className="btn_shadow">
                      <i className="fab fa-github"></i>
                    </button>
                  </a>
                  <a href="https://www.linkedin.com/in/tohir-babs-6a0045167/">
                    <button className="btn_shadow">
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                  </a>
                </div>
              </div>

              <div className="col_2">
                <h4 className="uppercase">best skill on</h4>

                <a href="https://tohirbabs.github.io/gameboy_wordle/">
                  <button className="btn_shadow">
                    <img src={js} alt="" />
                  </button>
                </a>
                <a href="https://easybankhomepage.netlify.app/">
                  <button className="btn_shadow">
                    <img src={sass} alt="" />
                  </button>
                </a>
                <a href="https://conwaygof.netlify.app/">
                  <button className="btn_shadow">
                    <img src={react} alt="" />
                  </button>
                </a>
                <a href="https://southsidefood.vercel.app/">
                  <button className="btn_shadow">
                    <img src={next} alt="" />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="right_img btn_shadow">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
