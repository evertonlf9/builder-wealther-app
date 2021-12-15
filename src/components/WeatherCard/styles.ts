import styled from "styled-components";

export const Card = styled.div`
  flex: 0 0 240px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  background-color: rgb(245, 245, 245);
  margin-bottom: 2rem;

  @media screen and (max-width: 576px) {
    margin-right: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

export const WeatherImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: #d3d3d3;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const Subtitle = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const Temperature = styled.div`
  font-size: 16px;
  text-align: start;
`;

export const Additional = styled.div`
  font-size: 14px;
  text-align: start;
`;
