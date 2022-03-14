import React, { useState } from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../../theme/styleTheme';
import { Card } from '../../../common';
import HatSrc from '../../../../../public/hat.png';

type SelectHatBoxProps = {
  subject: string;
  myHat: string;
  userList: string[];
  onClickHat: (arg: any) => void;
  onClickRandom: () => void;
};

type StyleProps = {
  width?: number;
  height?: number;
  isMouseOver?: boolean;
};

const SelectHatBox = ({
  subject,
  myHat,
  userList,
  onClickHat,
  onClickRandom,
}: SelectHatBoxProps) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const hatData = [
    { src: HatSrc, value: 'red', text: '빨간모자', desc: '직관주의자, 순간적인 느낌에 충실' },
    {
      src: HatSrc,
      value: 'blue',
      text: '파란모자',
      desc: '낙관주의자, 아이디어를 긍정적으로 생각',
    },
    { src: HatSrc, value: 'green', text: '초록모자', desc: '몽상주의자, 새로운 아이디어 생성' },
    {
      src: HatSrc,
      value: 'black',
      text: '검정모자',
      desc: '사회자, 회의를 주관하며 요약 및 결론을 유도',
    },
    {
      src: HatSrc,
      value: 'yellow',
      text: '노란모자',
      desc: '비관주의자, 아이디어의 문제점을 도출',
    },
    { src: HatSrc, value: 'white', text: '하얀모자', desc: '이성주의자, 객관적인 정보에 집중' },
  ];

  return (
    <Container>
      <SubjectBox>
        {subject}
        <RandomButton onClick={onClickRandom}>랜덤</RandomButton>
      </SubjectBox>
      <DownBox>
        <UserListBox>
          <MyHatBox>
            <HatImg src={HatSrc} width={70} />
          </MyHatBox>
          <UserList>
            {userList.map(user => {
              return <User>{user}</User>;
            })}
          </UserList>
        </UserListBox>
        <CardListBox>
          {hatData.map(hat => {
            return (
              <Card width={200} height={200}>
                {isMouseOver ? (
                  <HatBox isMouseOver={isMouseOver}>
                    <h3>{hat.text}</h3>
                    <DescText>{hat.desc}</DescText>
                    <TouchArea
                      onMouseOver={() => setIsMouseOver(true)}
                      onMouseOut={() => setIsMouseOver(false)}
                    />
                  </HatBox>
                ) : (
                  <HatBox>
                    <HatImg width={100} src={hat.src} onClick={() => onClickHat(hat.value)} />
                    <div>{hat.text}</div>
                    <TouchArea
                      onMouseOver={() => setIsMouseOver(true)}
                      onMouseOut={() => setIsMouseOver(false)}
                    />
                  </HatBox>
                )}
              </Card>
            );
          })}
        </CardListBox>
      </DownBox>
    </Container>
  );
};

const Container = styled.div`
  width: 1044px;
  height: 586px;
  border: 5px solid ${themedPalette.border_1};
  border-radius: 18px;
`;

const MyHatBox = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 18px;
  border: 5px solid ${themedPalette.border_1};
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubjectBox = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${themedPalette.black};
  color: ${themedPalette.main_text2};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  position: relative;
`;

const RandomButton = styled.button`
  width: 70px;
  height: 45px;
  position: absolute;
  right: 70px;
  border: none;
  border-radius: 12px;
`;

const DownBox = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
`;

const UserListBox = styled.div`
  width: 212px;
  height: 514px;
  border-right: 5px solid ${themedPalette.black};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
`;

const CardListBox = styled.div`
  width: 832px;
  height: 512px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px;
  padding: 32px 48px;
`;

const UserList = styled.div`
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  margin-bottom: 8px;
`;

const HatImg = styled.img<StyleProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  padding: 15px;
`;

const HatBox = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  ${props => props.isMouseOver && `background-color : #EEEEEE`};
`;

const TouchArea = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const DescText = styled.span`
  text-align: center;
`;

export { SelectHatBox };

// NOTE : 이 페이지에서 처리해야 할 내용 1.모자선택시 로직 2.랜덤 로직
