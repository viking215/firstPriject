import React from "react";
import {Backdrop, CircularProgress} from "@mui/material";

const Preloader = () => {
    return <div>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
            <CircularProgress color="inherit" />
        </Backdrop>
    </div>
}

export default Preloader
