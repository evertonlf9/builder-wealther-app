import styled from "styled-components";

export const ContainerCard = styled("div")`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  .ant-card {
    border-radius: 10px;
    min-width: 320px;
    max-width: 550px;
    width: 100%;
  }

  .Snow {
    background-image: linear-gradient(
      to right top,
      #ffffff,
      #fafafa,
      #f5f5f5,
      #f0f0f0,
      #ebebeb,
      #e8e8e8,
      #e6e6e6,
      #e3e3e3,
      #e2e1e2,
      #e0e0e0,
      #dfdede,
      #dedcdc
    );
  }

  .Clouds {
    background-image: linear-gradient(
      to right top,
      #bdc3c4,
      #c1c5c7,
      #c4c8c9,
      #c8cacc,
      #cbcdce,
      #cdcfd0,
      #cfd1d2,
      #d1d3d4,
      #d3d5d6,
      #d5d8d8,
      #d7dada,
      #d9dcdc
    );
  }

  .Rain {
    background-image: linear-gradient(
      to right top,
      #5d5e60,
      #646466,
      #6b696b,
      #716f71,
      #787576,
      #7d7a7a,
      #827e7f,
      #878383,
      #8b8787,
      #908b8b,
      #949090,
      #999494
    );
    color: #1408c3;
  }

  .Clean,
  .Clear {
    background-image: linear-gradient(
      to right top,
      #2ec6e5,
      #52c8e7,
      #6bcae8,
      #7fcce8,
      #91cee8,
      #9bd0e5,
      #a5d1e3,
      #aed3e1,
      #b5d4dd,
      #bdd5d9,
      #c6d6d7,
      #ced6d6
    );
  }

  .ant-card-body {
    padding: 1rem;
  }

  .card__title {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      p {
        margin: -5px 0 0 0;
      }

      svg {
        margin-right: 5px;
      }
    }
  }

  .card__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    text-align: left;

    p {
      font-weight: 600;
      img {
        margin-left: 5px;
      }
    }
  }

  .card__title-btn {
    cursor: pointer;

    &:hover {
      transform: rotate(310deg);
      transition: 2s;
    }
  }
`;
