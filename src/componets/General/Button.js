import styled from "styled-components";

const Button = styled.button`
  text-transform: capitalize;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  padding: 0.3rem 0.6rem;
  transition: all 0.3s ease-in-out;
`;

export const PrimaryButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 4px solid white;
  &:hover {
    background-color: var(--blue);
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 4px solid;
  color: ${(props) => (props.disabled ? "var(--blue)" : "var(--dark)")};
  border-color: ${(props) => (props.disabled ? "var(--blue)" : "var(--dark)")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "none" : "var(--red)")};
    color: ${(props) => (props.disabled ? "none" : "var(--white)")};
    border-color: ${(props) => (props.disabled ? "none" : "var(--red)")};
  }
`;
