import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAcademicsSection = styled.section`
  .inner {
    grid-template-columns: 1fr 1fr;
    grid-gap: 100px;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 900px) {
      margin: 20px 0 20px;
    }

    @media (max-width: 900px) {
      color: var(--white);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(500px, 500px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const Academics = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const ibh = ['Biology', 'Chemistry', 'Psychology', 'Math Analysis and Approaches (Calculus, Trigonometry and Statistics)'];
  const ap = ['Statistics (AP Exam Score: 5)'];
  const honors = ['Physics', 'Pre-Calculus'];
  const self_m = ['Campbell and Reece’s Biology', 'Vander’s Human Physiology', 'Frazier’s Essentials of Human Diseases and Conditions', 'The Color Atlas of Biochemistry', 'Copstead’s Pathophysiology', 'The Color Atlas of Neuroscience'];
  const awards = ['United States Biology Olympiad top 3%', 'British Biology Olympiad Bronze Medal (top 30% internationally)', 'HOSA State Silver Champion (Prepared Speaking)', 'HOSA State Silver Champion (Pathophysiology)', 'PPES CEO’s Personal “Outstanding Award” and Recognition', 'Public Forum Debate League Finals – 2nd place', 'Société Honoraire de Français member', 'Gift of Life Donor Program Ambassador Recognition', 'Regional PA Media and Design Film Winner', 'Medium: Journal of Journeys Publication Feature', 'Medium: Writer’s Blokke Publication Feature', 'Centre for Talented Youth Scholar', 'Cubing USA National Level Qualifier'];
  return (
    <StyledAcademicsSection id="academics" ref={revealContainer}>
      <h2 className="numbered-heading">Academics</h2>

      <div className="inner">
        <StyledText>
          <div className="project-description">
            <p>
              GPA: 4.0 UW, 4.55 W (past year)
            </p>
            <p>
              SAT: 1560 (770 Math, 790 Evidence Based Reading/Writing)
            </p>
          </div>
          
          <h3 className="project-title">IB Higher Level (HL):</h3>
          <div className="project-description">
            <ul className="skills-list">
              {ibh && ibh.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>

          <h3 className="project-title">AP:</h3>
          <div className="project-description">
            <ul className="skills-list">
              {ap && ap.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>

          <h3 className="project-title">Honors:</h3>
          <div className="project-description">
            <ul className="skills-list">
              {honors && honors.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>

          <h3 className="project-title">Self-Studied Materials:</h3>
          <div className="project-description">
            <ul className="skills-list">
              {self_m && self_m.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
          <h3 className="project-title">My Awards and Recognitions:</h3>
          <div className="project-description">
            <ul className="skills-list">
              {awards && awards.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
        </StyledText>
      </div>
    </StyledAcademicsSection>
  );
};

export default Academics;
