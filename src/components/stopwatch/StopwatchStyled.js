import styled from "styled-components";

const StopwatchStyled = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 50px 20px;
  width: 500px;

  .display_time {
    margin-bottom: 10px;
  }
  .btn {
    display: inline-block;
    padding: 0 10px;
  }

  .btn:not(:last-child) {
    margin-right: 10px;
  }
`;

export default StopwatchStyled;
