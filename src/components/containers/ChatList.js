import {Paper, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button} from "@mui/material";
import {Link} from "react-router-dom";
import styled from "@emotion/styled";
import '../../App.css';
import AddChat from './AddChat';
import {useDispatch, useSelector} from "react-redux";
import {getChatList} from "../../store/Duck/selectors";
import {useCallback} from "react";
import {Delete} from "@mui/icons-material";
import {delChat, delChatMessages} from "../../store/Duck/actions";

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
                                            {el.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={el.title}/>
                                    </ListItemButton>
                                </ListItem>
                            </StyledLink>
                            <Button onClick={()=>{handleDelete(el)}} ><Delete /></Button>
                        </div>
                ))}
            </List>
            <AddChat />
        </Paper>
    )
}


export default ChatList;
