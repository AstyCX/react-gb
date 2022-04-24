import {Tabs, Tab} from "@mui/material";
import {Link, useLocation} from 'react-router-dom';
import {useEffect, useState} from "react";

const NavPages = ({pages}) => {
    const location = useLocation();
    const [loc, setLoc] = useState(location.pathname.split(/\//)[1]);

    useEffect(()=>{
        setLoc(location.pathname.split(/\//)[1])
    }, [location])

    return (
        <Tabs value={loc} aria-label="nav tabs example">
            {Object.keys(pages).map((el,i)=>(
                <Tab value={pages[el].id} key={i} label={el} to={pages[el].link} component={Link}/>))}
        </Tabs>
    )
}

export default NavPages;