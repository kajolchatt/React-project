import { useState } from "react";
function AppDateDetail() {
    setInterval(display, 1000);
    const [state, setState] = useState(new Date().toLocaleString());
    function display() {
      setState(new Date().toLocaleString());
    }

    return <p>This is the current time:{state}</p>
}

export default AppDateDetail;