import styled from "styled-components";

export const LoginArea = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  height: 100vh;
  background-color: #5e45a5;
`;

export const LoginBox = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 90%;
  border-radius: 7px;
  background-color: white;
  box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.15);
  font-family: inherit;

  div {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
  }

  button {
    margin-top: 1rem;
    width: 100%;
    height: 40px;
    background-color: #2879ff;
    border: none;
    color: white;
    border-radius: 7px;
    box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.15);
  }

  input {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid gray;
    outline: 0;
    font-size: 1.3rem;
    color: $white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    width: 100%;
    height: 25px;
  }
  button {
    align-self: flex-end;
    :hover {
      background-color: black;
      color: white;
    }
  }
  h2 {
    font-size: 20px;
    color: #5e45a5;
    margin-top: 1rem;
    align-self: flex-end;

    :hover {
      color: #3188d5;
    }
  }
`;

export const SocialArea = styled.div`
  margin-top: 1rem !important;
  padding-bottom: 7px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: row !important;
`;
