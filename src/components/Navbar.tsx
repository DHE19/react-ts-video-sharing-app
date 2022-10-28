import { AccountCircleOutlined, SearchOutlined } from "@mui/icons-material"
import { ContainerNavbar, InputNavbar, LoginButton, Search, WrapperNavbar } from "../helpers/styledComponents"

const Navbar = () => {
    return (
        <ContainerNavbar>
            <WrapperNavbar>
                <Search>
                    <InputNavbar type="text" placeholder="Search" />
                    <SearchOutlined/>
                </Search>
                <LoginButton marginTop={0}>
                    <AccountCircleOutlined/>
                    Sign In
                </LoginButton>
            </WrapperNavbar>
        </ContainerNavbar>
    )
}

export default Navbar
