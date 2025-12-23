import Component6 from "./Component6";

function Component5({ e,f }) {
    return ( 
    <div style={{ border: "1px solid purple", padding: "10px", margin: "5px"}}>
        <h4>This is prop f: {f}</h4>
        <Component6 e={e} /> 
    </div>
    );
}

export default Component5;
