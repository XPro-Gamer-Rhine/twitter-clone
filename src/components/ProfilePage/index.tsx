/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img src="./image.jpg" alt="RHINEUL ISLAM" />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Set up profile</EditButton>

        <h1>RHINEUL ISLAM</h1>
        <h2>@Rhine21733963</h2>

        <p>
          Developer at{' '}
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a
            href="https://www.linkedin.com/in/rhineul-islam-737200180/"
            target="_blank"
          >
            @RHINE
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Ghoramara Sultanabad Rajshahi
          </li>
          <li>
            <CakeIcon />
            Born on Nov 18, 1999
          </li>
        </ul>

        <Followage>
          <span>
            <strong>98 </strong>
            Following
          </span>
          <span>
            <strong>322 </strong>Followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
