import styled from "styled-components";

export const Main = styled.main`
  height: 85vh;
`;

export const BoxNav = styled.div`
  display: flex;
  gap: 2rem;
  position: absolute;
  top: 7rem;
  right: 2rem;
  left: 2rem;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  width: 100px;
  background-color: white;
  box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  gap: 7px;
  h1 {
    font-size: 16px;
  }
`;

export const TransationArea = styled.section`
  margin-top: 5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  height: 40vh;
  border-radius: 7px;
  box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  p {
    margin-top: 1rem;
  }

  input {
    margin-top: 7px;
    width: 90%;
    height: 35px;
    border-radius: 3px;
    border: 1px solid #494c50;
  }

  textarea {
    margin-top: 7px;
    border-radius: 3px;
    border: 1px solid #494c50;
  }

  button {
    align-self: flex-end;
    margin-top: 1rem;
    width: 30%;
    height: 40px;
    background-color: #2879ff;
    border: none;
    color: white;
    border-radius: 7px;
    box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.15);
  }
`;

export const TransationRealize = styled.section`
  margin: 1rem;
  padding: 1rem;
  height: 40vh;
  border-radius: 7px;
  box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.15);
`;

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  margin-bottom: 1rem;
`;

export const Transation = styled.div`
  border: 1px solid #494c50;
  margin-top: 1rem;
  border-radius: 7px;
  padding: 7px;
`;
