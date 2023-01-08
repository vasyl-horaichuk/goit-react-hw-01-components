import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 400px;
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