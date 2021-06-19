import preloader from "../../../assets/images/loading.svg";
import React from "react";

const Preloader = (props) => {
    return <div>
        <img src={preloader} style={{width: '100px'}}/>
    </div>
}

export default Preloader
