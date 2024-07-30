import React from "react";
import { Button } from 'antd'
import { UpOutlined, LinkedinOutlined, GithubOutlined } from "@ant-design/icons";

import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.scss'

export const Footer = ({scrollToTop}) => {
  return (
    <div className="footer-body">
      <Button
        style={{ backgroundColor:"#0c2c4b", marginBottom: '10px'}}
        icon={<UpOutlined />} 
        type='primary'
        shape='circle'
        onClick={scrollToTop}
      />
      <div>This resume is mobile friendly.</div>
      <div>Last updated on July 29, 2024</div>
      <div>
      <Button
        size="large"
        className="footer-links-buttons"
        icon={
          <LinkedinOutlined
            style={{fontSize: '45px', color: '#0077b5'}}
          />
        }
        href="https://www.linkedin.com/in/elishadkim/"
        target='_blank'
      />
      <Button
        size="large"
        shape="circle"
        className="footer-links-buttons"
        icon={
          <GithubOutlined
            style={{fontSize: '45px', color: "#2b3137"}}
          />
        }
        href="https://github.com/elishakkim"
        target='_blank'
        type='text'
      />
      </div>
    </div>
  )
}