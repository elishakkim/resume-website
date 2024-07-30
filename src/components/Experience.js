import React from "react";
import { Divider, Typography } from 'antd'
import { RocketOutlined } from "@ant-design/icons";
import { Job } from './subcomponents/Job'
import { JOBS } from "../files/ExperienceContstants";

import 'bootstrap/dist/css/bootstrap.min.css'
import './Info.scss'
import './Experience.scss'

const { Title } = Typography;

export const Experience = () => {
  return (
    <div>
      <Divider orientation="left">
        <Title level={2} className="info-title">
          <RocketOutlined className="info-header-icon" />
          Experience
        </Title>
      </Divider>
      <Title level={5} className="info-body">
        <div className="container">
          {JOBS.map((job) => {
            return (
              <Job 
                timeframe={job.timeframe}
                title={job.title}
                location={job.location}
                experience={job.experience}
              />
            )
          })}
        </div>
      </Title>
    </div>
  )
}
