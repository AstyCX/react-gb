import {Button, TextField} from "@mui/material";
import {Send} from "@mui/icons-material";

const ControlPanel = (props) => {
    return (<div className='sendMess'>
        <TextField autoFocus
                   ref={props.inputEl}
                   id="outlined-basic"
                   label="Type here"
                   variant="outlined"
                   onChange={props.handleChange}
                   value={props.value}
                   className={'messageArea'}
        />
        <Button onClick={props.handleClick} variant="contained"><Send/></Button>
    </div>)
}

export default ControlPanel;