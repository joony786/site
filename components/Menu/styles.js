import styled from 'styled-components'

export const Container = styled.div`
  padding-right: 1.5rem;
`
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin:0;
  padding: 0;

  @media (max-width: 768px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    flex-flow: column nowrap;
    background: #1a3968;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    text-align: center;
    margin: 0;
    z-index: ${({open}) => (open ? '11' : '0' )};

    &:nth-child(1){
     justify-content: flex-end;
    }
  }
`;
export const ListItem = styled.li`
  list-style-type: none;
  padding-right: 10px;
  background-color: inherit;
  font-weight: 700;
  font-size: 30px;
  text-transform: uppercase;
  padding: 2.5rem;
  color: white;



  @media (min-width: 768px){
    color: ${({ isSticky }) => (isSticky ? "#1a3968" : "white")};
    padding: 0;
    display: flex;
    font-size: 16px;
    font-weight: 800;
  }
  @media (min-width: 800px){
    padding: 0;
    display: flex;
    font-size: 18px;
    font-weight: 800;
  }
  @media (min-width: 940px){
    padding: 0;
    display: flex;
    font-size: 20px;
    font-weight: 800;
  }

    a {
      color: inherit;
      text-decoration: none;
      text-shadow: 0 0 4px rgba(0,0,0,0.5);
      transition: all .15s ease;
      text-shadow: none;

      :active{
        color: #33afad;
      }

      @media (min-width: 768px){
        padding: 1rem;
        :hover{
          color: #33afad;
        }
      }

      @media (min-width: 880px){
        padding: 1.5rem;

      }
    }
`;

export const MenuToggle = styled.div`
  padding-right: .6rem;
  margin-right: 0;

  @media (min-width: 768px) {
    display: none;
  }
`;
