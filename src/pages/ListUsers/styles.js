import styled from "styled-components";

export const Container = styled.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`
export const Title = styled.h2`
    margin-top: 30px;
    color: #fff;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
`
export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 400px;
    max-width: 400px;
    h3{
        color: #fff;
        font-size: 24px;
        text-transform: capitalize;
    }
    p{
        color: #fff;
        font-size: 14px;
        font-weight: 200;
    }
    @media (max-width: 420px){
            width: 350px;
    }
`
export const TrashIcon = styled.img`
    cursor: pointer;

    &:hover{
        opacity: .8;
    }
    &:active{
        opacity: .5;
    }
`
export const EditIcon = styled.img`
    width: 20px;
    cursor: pointer;

    &:hover{
        opacity: .8;
    }
    &:active{
        opacity: .5;
    }
`
export const AvatarUser = styled.img`
    height: 80px;
`
export const ContainerIcons = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
`