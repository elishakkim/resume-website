import React from "react";
import { Typography } from "antd";
import './Info.scss'

const { Title } = Typography

export const Skills = () => {
  return (
    <Title level={5} className="info-body">
      <div className="skills-info">
        <div className="information-header">Front-End</div>
        <ul>
          <li>HTML</li>
          <li>CSS + Flexbox</li>
          <li>Bootstrap + Tailwind</li>
          <li>ASP.Net</li>
          <li>React + Redux</li>
          <li>Javascript + Typescript</li>
        </ul>
      </div>
      <div className="skills-info">
        <div className="information-header">Back-End</div>
        <ul>
          <li>Java</li>
          <li>SQL</li>
          <li>Node.js</li>
          <li>C#</li>
          <li>GraphQL</li>
          <li>Python</li>
        </ul>
      </div>
      <div className="skills-info">
        <div className="information-header">DevOps/Monitoring Tools</div>
        <ul>
          <li>New Relic</li>
          <li>Quantum Metric</li>
        </ul>
      </div>
      <div className="skills-info">
        <div className="information-header">Version Control System</div>
        <ul>
          <li>Git</li>
        </ul>
      </div>
      <div className="skills-info">
        <div className="information-header">Basic Knowledge</div>
        <ul>
          <li>MongoDB</li>
          <li>C++</li>
        </ul>
      </div>
    </Title>
  )
}