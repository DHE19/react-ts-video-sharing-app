import { ContainerMenu, Hr, ItemContainerMenu, ItemMenu, LoginButton, LoginMenu, Logo, SubtitleSectionMenu, WrapperMenu } from "../helpers/styledComponents"
import img from '../assets/img/logo.svg';
import HomeIcon  from '@mui/icons-material/Home'
import { AccountCircleOutlined, ExploreOffOutlined, FlagOutlined, HelpOutlineOutlined, HistoryOutlined, LiveTvOutlined, MovieOutlined, MusicNoteOutlined, NewspaperOutlined, SettingsBrightnessOutlined, SettingsOutlined, SportsBaseballOutlined, SportsEsportsOutlined, SubscriptionsOutlined, VideoLibraryOutlined } from "@mui/icons-material";
import  { FC } from "react";


interface props {
    handleTheme: () => void;
}
interface INavItem{
    //se deine el titulo de la nav-item
    title: string | null;
    //define su icono u otro tipo de JSX element
    icon: JSX.Element;
    //se define solo si elemento requiere de una acción
    action?:boolean;
}

const menuIcons = [{
    title: 'Home',
    icon: <HomeIcon/>
},
{
    title: 'Explore',
    icon: <ExploreOffOutlined/>
},
{
    title: 'Susbcription',
    icon: <SubscriptionsOutlined/>
},
{
    title: null,
    icon: <Hr/>
},
{
    title: 'Library',
    icon: <VideoLibraryOutlined/>
},
{
    title: 'History',
    icon: <HistoryOutlined/>
},{
    title: null,
    icon: <Hr/>
},
{
    title: null,
    icon:  (<LoginMenu>
                Sign in to like videos, comment, and subscribe
                <LoginButton marginTop={10}><AccountCircleOutlined/> Sign in</LoginButton>
            </LoginMenu>)
},
{
    title: null,
    icon: <Hr/>
},{
    title:null,
    icon: (<SubtitleSectionMenu>
              BEST OF YOUTUBE
         </SubtitleSectionMenu>)
},
{
    title: 'Music',
    icon: <MusicNoteOutlined/>
},
{
    title: 'Sports',
    icon: <SportsBaseballOutlined/>
},

{
    title: 'Gaming',
    icon: <SportsEsportsOutlined/>
},

{
    title: 'Movies',
    icon: <MovieOutlined/>
},

{
    title: 'News',
    icon: <NewspaperOutlined/>
},
{
    title: 'Live',
    icon: <LiveTvOutlined/>
},{
    title: null,
    icon: <Hr/>
},
{
    title: 'Settings',
    icon: <SettingsOutlined/>
},
{
    title: 'Report',
    icon: <FlagOutlined/>
},
{
    title: 'Help',
    icon: <HelpOutlineOutlined/>
},
{
    title: 'Light Mode',
    icon: <SettingsBrightnessOutlined/>,
    action: true,
}

]
const Menu:FC<props> = (props) => {
    return (
        <ContainerMenu>
                <WrapperMenu>
                    <Logo>
                        <img src={img} style={{width: '40px'}} />
                        YouTube
                    </Logo>
                    <ItemContainerMenu>
                        
                        {
                        menuIcons.map((i:INavItem,inx:number) => (

                            i.action ?(
                                <ItemMenu key={inx} onClick={() => props.handleTheme()}>
                                    {i.icon}
                                    {i.title ?? ''}
                                </ItemMenu>
                            ): (

                                <ItemMenu key={inx}>
                                    {i.icon}
                                    {i.title ?? ''}
                                </ItemMenu>
                            )
                        ))}
                    </ItemContainerMenu>
                </WrapperMenu>
        </ContainerMenu>
    )
}

export default Menu
