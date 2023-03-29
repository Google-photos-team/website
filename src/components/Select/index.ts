import styled from 'styled-components';
interface IProps {
  fullWidth?: boolean
}
const Select = styled.select<IProps>`
  ${props => props.fullWidth ? "width: 100%;" : "width: 100%;max-width: 200px;"}
  font-size: 16px;
  font-weight: 400;
  border: 1px solid ${props => props.theme.colors.primary.gray};
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  appearance: none;
  background-color: ${props => props.theme.colors.primary.semiWhite};
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.6569 10.3432L12.0001 16L6.3433 10.3432L5.65686 11.0296L12.0001 17.3728L18.3433 11.0296L17.6569 10.3432Z' fill='%231C1C1C'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.primary.semiBlack};
  }

  option {
    font-size: 16px;
    line-height: 2rem;
    padding: 0.5rem 0;
    font-weight: 400;
  }

    option:hover{
    background-color:  ${props => props.theme.colors.primary.gray} !important;
    color: #fff;
  }
`;

export default Select;