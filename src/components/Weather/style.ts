import styled from "styled-components";

export const ContainerForecast = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: black;

  @media screen and (max-width: 576px) {
    justify-content: center;
  }
`;
