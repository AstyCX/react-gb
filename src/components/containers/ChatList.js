import {Paper, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button} from "@mui/material";
import {Link} from "react-router-dom";
import styled from "@emotion/styled";
import '../../App.css';
import AddChat from './AddChat';
import {useDispatch, useSelector} from "react-redux";
import {getChatList} from "../../store/Duck/selectors";
import {useCallback, useEffect} from "react";
import {Delete} from "@mui/icons-material";
import {updateDBSaga, delChatFBSaga} from "../../store/Duck/actions";
import {useParams} from "react-router";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const ChatList = () => {
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();
    const {id} = useParams();

    const handleDelete = useCallback((el)=>{
        dispatch(delChatFBSaga(el.id));
        dispatch(updateDBSaga());
    }, [dispatch])

    useEffect(()=>{
        dispatch(updateDBSaga());
    }, [id, dispatch])

    return (
        <Paper elevation={0}>
            <List>
                {chats.map((el, i) => (
                        <div className="chat" key={el.id}>
                            <StyledLink to={`/chats/${el.id}`}>
                                <ListItem disablePadding key={i}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {el.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={el.name}/>
                                    </ListItemButton>
                                </ListItem>
                            </StyledLink>
                            <Link to='/chats'>
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
