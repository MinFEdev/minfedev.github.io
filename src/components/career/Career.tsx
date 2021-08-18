import React from 'react';
import styled from '@emotion/styled';

const careerList = [
  {
    id: 1,
    company: '㈜지키미커뮤니케이션',
    period: '2016. 11 ~ 2019. 12',
    projects: [
      {
        id: 1,
        title: '얼짱몸짱 반응형 홈페이지 퍼블리싱',
        skills: ['HTML5', 'CSS3', 'Javascript', 'Jquery'],
      },
      {
        id: 2,
        title: '한국관세무역개발원 CUSTRA 반응형 홈페이지 퍼블리싱',
        skills: ['HTML5', 'CSS3', 'Javascript', 'Jquery'],
      },
      {
        id: 3,
        title:
          'KC대학교 입학안내처, 대학교, 대학원, 부서기관 반응형 홈페이지 퍼블리싱',
        skills: ['HTML5', 'CSS3', 'Javascript', 'Jquery'],
      },
    ],
  },
  {
    id: 2,
    company: '㈜봄비숲',
    period: '2020. 01 ~ 2020.04',
    projects: [
      {
        id: 1,
        title: '디자인 스토리 반응형 홈페이지 퍼블리싱',
        skills: ['HTML5', 'CSS3', 'Javascript', 'Jquery'],
      },
    ],
  },
  {
    id: 3,
    company: '㈜디케이테크인',
    period: '2020. 10 ~ ',
    projects: [
      {
        id: 1,
        title: '카카오톡스토어 판매자센터 관리자 페이지 UI 개발',
        skills: ['HTML5', 'CSS3', 'Javascript'],
      },
      {
        id: 2,
        title: '카카오 포 비즈니스 - 운영 유지 보수',
        skills: ['HTML5', 'CSS3', 'Javascript', 'Vue', 'Jenkins'],
      },
      {
        id: 3,
        title: '멜론스튜디오 (진행중)',
        skills: [
          'React',
          'Redux',
          'Redux-Saga',
          'ES6',
          'Storybook',
          'Styled-Components',
        ],
      },
    ],
  },
];

const reverseCareer = careerList.reverse();

const Career = () => {
  return (
    <CareerStyle>
      <CareerTitle>Career</CareerTitle>
      <CareerList>
        {reverseCareer.map(career => {
          const { id, company, period, projects } = career;

          return (
            <li key={id}>
              <CareerPeriod>{period}</CareerPeriod>
              <CareerContentBox>
                <CompanyName>{company}</CompanyName>

                {projects.map(project => {
                  const { title, skills, id } = project;

                  return (
                    <ProjectList>
                      <li key={id}>
                        <ProjectTitle>{title}</ProjectTitle>
                        <ProjectSkill>
                          {skills.map(skill => (
                            <li key={skill}>{skill}</li>
                          ))}
                        </ProjectSkill>
                      </li>
                    </ProjectList>
                  );
                })}
              </CareerContentBox>
            </li>
          );
        })}
      </CareerList>
    </CareerStyle>
  );
};

const CareerStyle = styled.div`
  margin-top: 100px;
`;

const CareerTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
`;

const CareerList = styled.ol`
  margin-top: 20px;
  > li {
    display: flex;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    font-size: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

const CareerPeriod = styled.span`
  flex: 1;
  width: 200px;
  opacity: 0.7;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CareerContentBox = styled.div`
  width: calc(100% - 200px);

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CompanyName = styled.strong`
  display: block;
  font-weight: bold;
`;
const ProjectList = styled.ul`
  margin-top: 20px;
  margin-left: -1rem;
  > li {
    position: relative;
    padding-left: 1rem;
    font-size: 1rem;
    &::before {
      position: absolute;
      left: 0;
      top: 0;
      content: '-';
    }
  }
`;

const ProjectTitle = styled.em`
  display: block;
`;

const ProjectSkill = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-size: 0.85rem;

  > li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
    padding: 0.1em 0.5em;
    border-radius: 10px;
    background-color: #2e2a2a;
    color: #fff;
  }
  > li + li {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    justify-content: space-between;

    > li + li {
      margin-left: 0;
    }
  }
`;

export default Career;
