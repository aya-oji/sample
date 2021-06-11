import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

/**
 * styled(コンポーネント)`スタイル`;
 * と記述すると、既存コンポーネント+αでスタイルを反映することができる
 */
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
