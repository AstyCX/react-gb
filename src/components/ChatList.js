import {Paper, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

const ChatList = ({chats}) => {
    return (
        <Paper elevation={0}>
            <List>
                {chats.map((el, i)=>(<ListItem disablePadding key={i}>
                    <ListItemButton>
                        <ListItemIcon>
                            {el.icon}
                        </ListItemIcon>
                        <ListItemText primary={el.title} />
                    </ListItemButton>
                </ListItem>))}
            </List>
        </Paper>)
}


export default ChatList;
