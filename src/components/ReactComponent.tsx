import { useState } from "react";

export function ReactComponent(){
    const [state, setState] = useState(0);
    return <button onClick={() => setState(state + 1)}>Clicked {state} times</button>
}