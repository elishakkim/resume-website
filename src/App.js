import React from 'react';
import { Layout, Typography } from 'antd';
import { ReactComponent as CodingLogo } from './files/div-coding-icon.svg'
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
      <Header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '124px' }} >
        <div style={{ fill: 'white', width: '50px', display: 'flex', marginRight: '14px', paddingTop: '4px' }}>
          <CodingLogo />
        </div>
        <Title style={{ color: 'white' }}>Elisha Kim</Title>
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
        <MyFooter/>
      </Footer>
    </Layout>
  );
}

export default App;
