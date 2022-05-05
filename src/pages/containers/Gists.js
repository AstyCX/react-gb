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

    const render = () => {
        switch (state.request) {
            case 0:
                return <>
                    <Button onClick={handleClick}>Get Gists</Button>
                </>;
            case 1:
                return <CircularProgress/>
            case 2:
                return <div className='gists'>
                    {state.gists.map((el, i)=>(
                        <Paper className='gistsDescription' key={i}>{el.description}</Paper>
                    ))}
                </div>
            case 3:
                console.error(state.error.description)
                return <>
                    <Button onClick={handleClick}>Try Again</Button>
                </>
        }
    }

    return <>
        {render()}
    </>
}

export default Gists;