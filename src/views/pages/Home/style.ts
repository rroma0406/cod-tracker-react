import styled from "styled-components";

export const BlocoSearchPlayer = styled.section`
  position: relative;
  width: 100%;
  float: left;
  
  
  .container-form-result {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 200px;
    
    .form-result {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 600px;
      
      flex-flow: column;
      
      .form {
        width: 100%;
      }
      
      .player-informs {
        margin-top: 20px;

        p {
          color: #fff;
        }
      }
    }
    
  }
`