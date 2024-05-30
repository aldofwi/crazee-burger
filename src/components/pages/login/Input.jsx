
import styled from "styled-components";

export default function Input({ value, onChange, iconBeforeInput, ...extraProps }) {

  return (

    <InputStyled>
        {iconBeforeInput && iconBeforeInput}
        <input
            value={value}
            onChange={onChange}
            type="text"
            {...extraProps}
         />
    </InputStyled>

  )
}
// Un style propre à cet Input.
const InputStyled = styled.div`

    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1;
    }

    input {
      border: none;
      font-size: 15px;
      color: #17161a;
      width: 100%;
    }

    &::placeholder {
      background: white;
      color: lightgrey;
    }

`