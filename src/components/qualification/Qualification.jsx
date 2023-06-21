import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon">
              
            </i>Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon">
              
            </i>Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">FullStack Developer</h3>
                <span className="qualification__subtitle">
                  4 Geeks Academy
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>

              <div>
                <h3 className="qualification__title">FullStack</h3>
                <span className="qualification__subtitle">
                  Open Bootcamp
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Expert React Native</h3>
                <span className="qualification__subtitle">
                  Udemy
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>

              <div>
                <h3 className="qualification__title">Angular</h3>
                <span className="qualification__subtitle">
                  Udemy
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >

<div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>

              <div>
                <h3 className="qualification__title">Web designer</h3>
                <span className="qualification__subtitle">
                  Freelance
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021-present
                </div>
              </div>

             
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Photograph</h3>
                <span className="qualification__subtitle">
                  E.A. Ministerio de Defensa
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2005 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>

              <div>
                <h3 className="qualification__title">Graphic design</h3>
                <span className="qualification__subtitle">
                  E.A. Ministerio de Defensa
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2005 - Present
                </div>
              </div>

              
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Photograph and design</h3>
                <span className="qualification__subtitle">Imago Center</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2016-2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
