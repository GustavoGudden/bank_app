import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  color: white;
  height: 150px;
  background-color: #5e45a5;
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 20px;
  }

  .userArea {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;

    > button {
      width: 40px;
      background-color: #2879ff;
      border: none;
      color: white;
      border-radius: 7px;
      box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.15);

      :hover {
        background-color: black;
        border: 1px solid white;
      }
    }
  }
`;
