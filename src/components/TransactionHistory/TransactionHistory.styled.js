import styled from 'styled-components'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Table = styled.table`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    width: 400px;
    color: #555555;
    border-collapse: collapse;
    border: 1px solid grey;
    text-align: center;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px; 
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.2);
    :hover {
        background-color: rgba(0, 0, 0, 0.1);
        border: 2px solid rgba(0, 0, 0, 0.2);
    }

    th {
        padding: 10px 0;
        font-weight: 600;
        font-size: 15px;
        border: 2px solid rgba(0, 0, 0, 0.1);
        background-color: #00bcd4;
        color: #fff;
    }

    td {
        padding: 5px 0;
        border: 2px solid rgba(0, 0, 0, 0.1);
    }

    tr {
        :hover{
            color: white;
            background-color: ${getRandomHexColor};
        }
    }
`