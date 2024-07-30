import React from "react";
import { Divider, Typography } from "antd";
import {
  FileTextOutlined,
  InfoCircleOutlined,
  ReadOutlined,
  MessageOutlined,
  BarsOutlined
} from '@ant-design/icons'
import {
  Star,
  StarHalf,
  StarOutline
} from '@mui/icons-material'
import { Skills } from './Skills'
import { InfoConstants } from "../files/InfoConstants";
import './Info.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const { Title } = Typography

export const Info = () => {
  return (
    <div>
      <Divider orientation="left">
        <Title level={2} className='info-title'>
          <FileTextOutlined className="info-header-icon" />
          Summary
        </Title>
      </Divider>
      <Title level={5} className="info-body">
        {InfoConstants.summary}
      </Title>
      <Divider orientation="left">
        <Title level={2} className='info-title'>
          <InfoCircleOutlined className="info-header-icon" />
          Information
        </Title>
      </Divider>
      <Title level={5} className="info-body">
        <div className="container">
          <div className="row pb-1">
            <div className="col-4 fw-bold">Location:</div>
            <div className="col-8">{InfoConstants.location}</div>
          </div>
        </div>
        <div className='container'>
          <div className="row">
            <div className="col-4 fw-bold">Contact:</div>
            <div className="col-8">{InfoConstants.email}</div>
          </div>
        </div>
      </Title>
      <Divider orientation="left">
        <Title level={2} className='info-title'>
          <ReadOutlined className="info-header-icon" />
          Education
        </Title>
      </Divider>
      <Title level={5} className="info-body">
        <div className="information-info">
          <div className="information-header">Georgia State University</div>
          <div style={{ paddingLeft: '10px' }}>{InfoConstants.universityTime}</div>
        </div>
        <div >Bachelor of Arts: English</div>
      </Title>
      <Divider orientation="left">
        <Title level={2} className='info-title'>
          <MessageOutlined className="info-header-icon" />
          Languages
        </Title>
      </Divider>
      <Title level={5} className="info-body">
        <div className="information-language">
          <div className="information-header">English</div>
          <div>
            <Star fontSize="small" />
            <Star fontSize="small" />
            <Star fontSize="small" />
            <Star fontSize="small" />
            <Star fontSize="small" />
          </div>
          <div className="information-header">Korean</div>
          <div>
            <Star fontSize="small" />
            <Star fontSize="small" />
            <Star fontSize="small" />
            <StarHalf fontSize="small" />
            <StarOutline fontSize="small" />
          </div>
        </div>
      </Title>
      <Divider orientation="left">
        <Title level={2}>
          <BarsOutlined className="info-header-icon" />
          Skills
        </Title>
      </Divider>
      <Skills />
    </div>
  )
}