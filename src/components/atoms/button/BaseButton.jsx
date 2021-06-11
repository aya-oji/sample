import styled from "styled-components";
/**
 * ボタンのベース（共通化）
 * 共通化できる情報のみベースでまとめておき、使用時に拡張して使用する
 */
export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
