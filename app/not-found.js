import React from 'react';
import {redirect} from "next/navigation";

const NotFound = (props) => {
    return redirect('/404')

};

export default NotFound;