import {Link} from "react-router-dom";
import styled from "@emotion/styled";
import '../../App.css';
import {useDispatch, useSelector} from "react-redux";
import {getChatList} from "../../store/duck/selectors";
import {useCallback} from "react";
import {Delete, Person} from "@mui/icons-material";
import {delChat, delChatMessages} from "../../store/duck/actions";
import {Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper} from "@mui/material";
import AddChat from "./AddChat";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const ChatList = () => {
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();

    const handleDelete = useCallback((el)=>{
        dispatch(delChatMessages(el.id));
        dispatch(delChat(el.id));
    }, [dispatch])

    return (
        <Paper elevation={0}>
            <List>
                {chats.map((el, i) => (
                    <div className="chat" key={i}>
                        <StyledLink to={`/chats/${el.id}`}>
                            <ListItem disablePadding key={i}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Person />
                                    </ListItemIcon>
                                    <ListItemText primary={el.title}/>
                                </ListItemButton>
                            </ListItem>
                        </StyledLink>
                        <Link to={'/chats/'}>
                            <Button onClick={()=>{handleDelete(el)}} ><Delete /></Button>
                        </Link>
                    </div>
                ))}
            </List>
            <AddChat />
        </Paper>
    )
}


export default ChatList;
