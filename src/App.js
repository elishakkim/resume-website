import React from 'react';
import { Layout, Typography } from 'antd';
import { Info } from './components/Info'
import { Experience } from './components/Experience'
import { Footer as MyFooter } from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout>
      <Header style={{ display: 'flex', justifyContent: 'center', alignItems: 'end', minHeight: '124px' }} >
          <div style={{ marginBottom: '20px', marginRight: '10px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fontWeight="600" fill="white" class="bi bi-code-slash" viewBox="0 0 16 16">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
            </svg>
          </div>
          <Title style={{ color: 'white', marginBottom: '29px'}}>Elisha Kim</Title>
      </Header>
      <Content style={{ display: 'flex' }}>
        <div className='container'>
          <div className='row'>
            <div className="col-md-6 order-md-1 order-1">
              <Info style={{ flex: '1' }} />
            </div>
            <div className="col-md-6 order-md-2 order-2">
              <Experience style={{ flex: '1' }} />
            </div>
          </div>
        </div>
      </Content>
      <Footer >
        <MyFooter />
      </Footer>
    </Layout>
  );
}

export default App;
