import {Button, CircularProgress, Paper} from "@mui/material";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGistsRequestSaga} from "../../store/Duck/actions";
import {API_URL_PUBLIC} from "../../constants/API";
import {getGists} from "../../store/Duck/selectors";

const Gists = () => {
    const dispatch = useDispatch();
    const state = useSelector(getGists);

    const handleClick = useCallback(() => {
        dispatch(getGistsRequestSaga(API_URL_PUBLIC))
    }, [dispatch])


    return <>
        {!state.request && <Button onClick={handleClick}>Get Gists</Button>}
        {!(state.request-1) && <CircularProgress/>}
        {!(state.request-2) && <div className='gists'>
            {state.gists.map((el, i)=>(
                <Paper className='gistsDescription' key={i}>{el.description}</Paper>
            ))}
        </div>}
        {!(state.request-3) && <Button onClick={handleClick}>Try Again</Button>}
    </>
}

export default Gists;