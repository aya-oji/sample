import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

/**
 * 再利用するために大きさの仕様は指定しない
 * 使用先で指定する
 */
const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
