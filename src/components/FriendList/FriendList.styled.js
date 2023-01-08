import styled from 'styled-components'

const BgColor = ({ isOnline }) => {
    let DefaultColor = 'gray';
    switch (isOnline) {
        case true:
        return isOnline ? 'green' : DefaultColor;
            
        case false:
        return isOnline ? DefaultColor : 'red' ;
        
        default:
        throw new Error('Unsupported variant prop');
    }
// return props.isOnline ? 'green' : 'red';
}

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
`
export const Iteam = styled.li`
    display: flex;
    gap: 30px;
    align-items: center;
    width: 400px;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px; 
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.2);
    :hover {
        background-color: rgba(0, 0, 0, 0.1);
        border: 2px solid rgba(0, 0, 0, 0.2);
    }
`
export const Status = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 20px;
    background-color: ${BgColor};
`
export const Avatar = styled.img`
    width: 80px;
`
export const TextName = styled.p`
    color: #524a4d;
    font-size: 30px;
    font-weight: 700;
`