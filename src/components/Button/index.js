import styled from 'styled-components';

export const Button = styled.button`
color: #fff;
font-size: 14px;
padding: 10px;
border: ${props => props.border || 'none'};
border-radius: 3px;
display: block;
background-color: ${props => props.background || '#ED8325'};
`;
