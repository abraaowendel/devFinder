/* eslint-disable no-throw-literal */
import { useEffect, useState } from "react"
import styled from "styled-components"
import search from "../../assets/icons/icon-search.svg"
import Api from "../../Api"
import CardComponent from "../User/CardComponent"
import App from "../../App"

export const BoxContainer = styled.div `
    max-width: 600px;
    margin: auto;
    display: flex;
    background-color: #1F2A48;
    border-radius: 15px;
    padding: 10px;
    input{
        padding: 10px;
        background-color: transparent;
        border: 0;
        width: 100%;
        outline: none;
        color: #FFF;
        font-size: 20px;
    }
    img{
        padding: 10px;
        cursor: pointer;
    }
    button{
        padding: 0px 20px;
        border-radius: 10px;
        cursor: pointer;
        background-color: #0078FE;
        border: 1px solid transparent;
        color: #FFF;
        font-weight: 600;
        font-size: 0.9em;;
        transition: 0.2s all ease-in;
        :hover{
            background-color: #b8c2dd;
        }
    }
`
const SearchComponent = ({onAdd}) =>{
    const [user, setUser] = useState('octocat');

    useEffect(()=>{
        handleClickSearch();
    },[])

    const handleInput = (e) =>{
        return setUser(e.target.value)
    }

    const handleClickSearch = async () =>{
        if(user){
            onAdd(user);
        }       
    }

    return(
        <BoxContainer>
            <img src={search} alt="search" />
            <input type="text" onChange={handleInput} placeholder="Procure um usuário do Github"/>
            <button onClick={handleClickSearch}>Search</button>
        </BoxContainer>
    )
}
export default SearchComponent;