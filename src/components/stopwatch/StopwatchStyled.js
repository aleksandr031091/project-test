import styled from "styled-components";

const StopwatchStyled = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 50px 20px;
  width: 500px;

  .display_time {
    margin-bottom: 10px;
    font-size: 100px;
    color: #d4ffff;
    text-shadow: 0 1px 0 #cac8c8, 0 2px 0 #c7c5c5, 0 3px 0 #bbbaba,
      0 4px 0 #c7c5c5, 0 5px 0 #c7c5c5, 0 6px 1px rgba(0, 0, 0, 0.2),
      0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1),
      0 3px 5px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.2),
      0 10px 10px rgba(0, 0, 0, 0.3), 0 20px 20px rgba(0, 0, 0, 0.1);
  }

  .btn {
    width: 100px;
    height: 25px;
    font-weight: 700;
    color: #d4ffff;
    background: transparent;
    border: 1px solid #0ff;
    border-radius: 15px;
    transition: 0.3s;
  }

  .btn:hover {
    color: #66ffff;
    box-shadow: 1px 1px 10px 0 #0ff;
  }

  .btn:not(:last-child) {
    margin-right: 10px;
  }
`;

export default StopwatchStyled;
