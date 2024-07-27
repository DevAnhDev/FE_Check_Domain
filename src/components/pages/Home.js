import React from 'react';
import { Typography, Divider, Card, Row, Col, Space } from 'antd';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography>
        <Title>Welcome to the Domain Check Website</Title>
        <Paragraph>
          This website allows you to check and evaluate the activity status of domains on major networks such as Viettel, Mobifone, and Vinaphone. You can also receive notifications via Telegram about the status of the domains.
        </Paragraph>
        <Divider />

        <Space/>
          <Col span={24}>
            <Card title="Contact Information">
              <Paragraph>
                <strong>Name:</strong>Suken-Changelife<br />
                <strong>Email:</strong> devalllevel@gmail.com <br />
                <strong>Telegram:</strong> @changelife98 <br />
              </Paragraph>
            </Card>
          </Col>

          <Col span={24} style={{ paddingTop: '20px' }}>
            <Card title="Usage Instruction Video">
            <div className="video-container">
                <video autoPlay loop muted className="video">
                  <source src="/assets/background.mp4" type="video/mp4" />
                </video>
              </div>
            </Card>
          </Col>
          <Divider />
      </Typography>
    </div>
  );
};

export default Home;
