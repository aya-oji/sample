import styled from "styled-components";

import { Input } from "../atoms/input/Input";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

/**
 * atomsをまとめてmoleculesを作成
 * atomsをまとめた時の調整スタイルとかはこのコンポーネント内に記載する
 */
export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

/**
 * 以下調整用スタイル
 */
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
/**
 * ボタンとテキストボックスの間隔調整用
 */
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
