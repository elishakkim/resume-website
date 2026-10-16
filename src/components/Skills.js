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
          <li>React + Redux</li>
          <li>React Native</li>
          <li>Next.js</li>
          <li>Javascript + Typescript</li>
          <li>HTML</li>
          <li>CSS + Flexbox</li>
          <li>Bootstrap + Tailwind</li>
          <li>ASP.Net</li>
        </ul>
      </div>
      <div className="skills-info">
        <div className="information-header">Back-End</div>
        <ul>
          <li>Java</li>
          <li>Node.js</li>
          <li>C#</li>
          <li>Python</li>
          <li>ASP.NET Web API</li>
          <li>Prisma ORM</li>
          <li>NextAuth</li>
          <li>Stripe</li>
        </ul>
      </div>
      <div className="skills-info">
        <div className="information-header">Databases</div>
        <ul>
          <li>PostgreSQL</li>
          <li>GraphQL</li>
          <li>Microsoft SQL Server</li>
          <li>NRQL</li>
          <li>BigQuery SQL</li>
          <li>NoSQL</li>
        </ul>
      </div>
      <div className="skills-info">
        <div className="information-header">Cloud/Hosting</div>
        <ul>
          <li>AWS (Amplify, RDS, Lambda, EventBridge, S3, CloudFront, SES, Route 53)</li>
          <li>Vercel</li>
        </ul>
      </div>
      <div className="skills-info">
        <div className="information-header">DevOps/Monitoring Tools</div>
        <ul>
          <li>GitHub Actions</li>
          <li>New Relic</li>
          <li>Quantum Metric</li>
        </ul>
      </div>
      <div className="skills-info">
        <div className="information-header">Testing</div>
        <ul>
          <li>Jest</li>
          <li>Vitest</li>
        </ul>
      </div>
      <div className="skills-info">
        <div className="information-header">CMS/Tools</div>
        <ul>
          <li>Contentful</li>
          <li>Claude Code</li>
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