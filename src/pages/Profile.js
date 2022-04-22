import {useDispatch, useSelector} from "react-redux";
import {changeVisible} from "../store/profile/actions";
import {Checkbox, FormControlLabel} from "@mui/material";
import {useCallback} from "react";

const Profile = () => {
    const {checked} = useSelector(store=>store);
    const dispatch = useDispatch();

    const handleChange = useCallback(() => {
        dispatch(changeVisible);
    }, [dispatch]);

    return <>
        <h1>Input checked: </h1>
        {checked && <h1>Checked</h1>}
        {!checked && <h1>Unchecked</h1>}
        <FormControlLabel
            control={<Checkbox onChange={handleChange} size={'big'} />}
            label="Change value" />
    </>
}

export default Profile;