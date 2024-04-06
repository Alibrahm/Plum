import { css, SerializedStyles } from "@emotion/react";

// Define slideStyles using Emotion's css function
const slideStyles: SerializedStyles = css`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  color: #fff;
  position: relative;
  .content {
    margin-top: -2px;
  }
`;

export default slideStyles;
