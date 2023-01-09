import styled from 'styled-components'

export const User = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 400px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px; 
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.2);
    :hover {
        background-color: rgba(0, 0, 0, 0.1);
        border: 2px solid rgba(0, 0, 0, 0.2);
       img {
            background-color: #ffffff;
       } 
        ul {
            background-color: #ffffff;
        }
    }
`

export const Description = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    flex-direction: column;
    width: 400px;
    padding: 20px 10px 10px;
`

export const Avatar = styled.img`
    background-color: #eeeeeeee;
    border-radius: 50%;
    box-shadow: 0 0 3px 0 #0000004e;
    width: 300px;
`

export const Name = styled.p`
    color: #555555;
    font-size: 35px;
    font-weight: 700;
    text-align: center;
`

export const Tag = styled.p`
    color: #555555;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`

export const Location = styled.p`
    color: #555555;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`

export const Stats = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 400px;
    background-color: #eeeeeeee;
    padding: 10px;
`

export const Stat = styled.li`
    display: flex;
    gap: 5px;
    align-items: center;
    flex-direction: column;
    min-width: 86px;
    padding: 5px 0;
`

export const Label = styled.span`
    color: #555555;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`

export const Quantity = styled.span`
    color: #555555;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`