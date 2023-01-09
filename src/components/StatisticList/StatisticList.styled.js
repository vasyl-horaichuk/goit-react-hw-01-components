import styled from 'styled-components'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    max-width: 400px;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px; 
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.2);
    :hover {
        background-color: rgba(0, 0, 0, 0.1);
        border: 2px solid rgba(0, 0, 0, 0.2);
    }
`
export const Title = styled.h2`
    padding: 20px;
    color: #555555;
    font-size: 35px;
    font-weight: 700;
    text-align: center;
`
export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    width: 80px;
    padding: 10px 0;
    background-color: ${getRandomHexColor};
    :hover {
        background-color: #ffffff;
    }
`
export const Label = styled.span`
    color: #555555;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`
export const Percentage = styled.span`
    color: #555555;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`