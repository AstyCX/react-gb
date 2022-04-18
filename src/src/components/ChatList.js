import {Paper, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";
import styled from "@emotion/styled";
import '../App.css';
import AddChat from './AddChat';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const ChatList = ({chats, setChats}) => {
    return (
            <Paper elevation={0}>
                <List>
                    {Object.values(chats).map((el, i) => (<StyledLink key={i} to={`/chats/${i + 1}`}>
                        <ListItem disablePadding key={i}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {el.icon}
                                </ListItemIcon>
                                <ListItemText primary={el.title}/>
                            </ListItemButton>
                        </ListItem>
                    </StyledLink>))}
                </List>
                <AddChat chats={chats} setChats={setChats}/>
            </Paper>
    )
}


export default ChatList;
