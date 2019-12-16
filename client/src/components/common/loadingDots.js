
import React from "react";
import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const DotWrapper = styled.div`
height: 20px;
  background-color: #282c34;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Dot = styled.div`
  background-color: #FFF;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;

class LoadingDots extends React.Component {
  render() {
    return (
    <>  
        {this.props.visible &&
            <DotWrapper >
                <Dot delay="0s" />
                <Dot delay=".1s" />
                <Dot delay=".2s" />
            </DotWrapper>}
      </>
    )
  }
}
export default LoadingDots