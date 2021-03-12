import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.div`
  width: 1080px;
  height: 758px;

  background: #f1f3f5;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 1);

  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;

  display: flex;
`;

function Template({ children }) {
  return <TemplateBlock>{children}</TemplateBlock>;
}

export default Template;
