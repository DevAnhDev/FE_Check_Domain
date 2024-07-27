import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const GuidelinePage = () => {

  
  return (
    <div style={{ padding: '20px' }}>
      <Typography>
        <Title>Website to Check Domain Activity on Major Networks (Viettel, Mobifone, Vinaphone)</Title>
        <Divider />
        <Title level={2}>Purpose:</Title>
        <Paragraph>
          This website allows users to check and evaluate the activity status of domains. Users can also add their Telegram information to receive updates about domain statuses directly to their personal Telegram accounts.
        </Paragraph>

        <Divider />

        <Title level={2}>Key Features:</Title>

        <Title level={3}>Check Domain Status:</Title>
        <Paragraph>
          Users can enter a domain name to check its activity status. Click the "Check" button to perform the check. Results will display whether the domain is active or inactive.
        </Paragraph>

        <Title level={3}>Send Information via Telegram:</Title>
        <Paragraph>
          After checking, users can choose to send information about the domain's status to their personal Telegram account. Notifications about blocked domains will be sent to the user's Telegram and updated on the website.
        </Paragraph>

        <Title level={3}>Security Measures:</Title>
        <Paragraph>
          The website uses secure protocols to ensure user data safety. Personal user information is not shared with any third party outside of the confirmed personal Telegram account.
        </Paragraph>

        <Divider />

        <Title level={2}>Instructions for Use:</Title>

        <Title level={3}>Check Domain:</Title>
        <Paragraph>
          Enter the domain name in the search box. Click the "Check" button to initiate the check. The website will display the domain's current status (active, inactive, etc.).
        </Paragraph>

        <Title level={3}>Send Information via Telegram:</Title>
        <Paragraph>
          After checking, notifications regarding blocked domains will be sent to your personal Telegram account. The website will also update the status accordingly.
        </Paragraph>

        <Divider />

        <Title level={3}>Note:</Title>
        <Paragraph>
          The website uses secure protocols to ensure user data safety. Personal user information is not shared with any third party outside of the confirmed personal Telegram account.
        </Paragraph>
      </Typography>
    </div>
  );
};

export default GuidelinePage;
