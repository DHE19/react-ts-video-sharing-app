import styled from 'styled-components';

interface Props {
    marginTop:number,
}


/********************Global Styles********************/ 

export const LoginButton = styled.button<Props>`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ae6ff;
    color: #3ae6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: ${p => p.marginTop}px;
    cursor: pointer;
    display: flex;
    align-items:center;
    gap: 7px;
`;


export const Search = styled.div`
    width:40%;
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    `;

/********************Global Styles********************/ 



export const Container = styled.div`
    display: flex;
  
`

export const Main = styled.div`
    flex: 7;
    background-color: ${({theme}) => theme.bgLight};;
`;


export const Wrapper = styled.div``;



/********************Menu Styles********************/ 
export const ContainerMenu = styled.div`
    flex: 1;
    background: ${({theme}) => theme.bg};
    height: 100vh;
    overflow-y: auto;
    color: ${({theme}) => theme.text};
    position: sticky;
    top: 0;
    left: 0;
`;
export const WrapperMenu = styled.div`
    padding: 18px 26px;
`;


export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px
`


export const ItemContainerMenu = styled.div`
    margin-top: 15px;
    font-size: 14px
`
export const ItemMenu  = styled.div`
    padding: 7.5px 0px;
    display: flex;
    align-items: center;
    gap 20px;
    cursor: pointer;
`;

export const Hr = styled.hr`
    margin: 10px 0px;
    border: 0.5px solid ${({theme}) => theme.soft};
    width:100%;
`

export const  LoginMenu = styled.div`
    font-size: 12px;
`;


export const SubtitleSectionMenu = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.textSoft}; 
    margin-bottom: 7.5px;
`



/*--------------- /Menu Styles---------------*/ 



/********************Navbar Styles********************/ 
export const ContainerNavbar = styled.div`
        position.sticky;
        top: 0;
        background: ${({theme}) => theme.bgLight};
        height: 56px;
    `;
export const WrapperNavbar = styled.div`
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0px 20px;
        justify-content: flex-end;
        position: relative;

    `;

export const InputNavbar = styled.input`
        border: none;
        background: transparent;
    `;
/*--------------- /Navbar Styles---------------*/ 




