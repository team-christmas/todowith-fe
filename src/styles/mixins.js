/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from '@emotion/react';

// 텍스트 말줄임 처리
export const mixinEllipsisText = (clamp) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${clamp || 1};
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
`;

// 텍스트 줄바꿈 속성: 단어 유지, 영역 유지
export const mixinWordKeepInWrap = css`
  word-break: keep-all;
  word-wrap: break-word;
`;

// 텍스트 줄바꿈 속성: 단어 유지 X, 영역 유지
export const mixinWordBreakInWrap = css`
  word-break: break-all;
  word-wrap: break-word;
`;

// 웹폰트 선명하게 나오지 않을때 사용하는 css hack
export const mixinFontSmoothingHack = css`
  transform: rotate(-0.03deg);
`;

// A11y 접근성 텍스트 처리 (헤딩 태그)
export const mixinForA11yText = css`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
`;
