import React, { FunctionComponent } from 'react';

import Template from 'components/template/Template';
import Profile from 'components/profile/Profile';
import Career from 'components/career/Career';

interface AboutPageProps {
  location: {
    search: string;
    pathname: string;
  };
}

const AboutPage: FunctionComponent<AboutPageProps> = ({
  location: { pathname },
}) => {
  return (
    <Template pathname={pathname}>
      <Profile />
      <Career />
    </Template>
  );
};

export default AboutPage;
