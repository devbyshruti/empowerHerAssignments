import Component3 from "./Component3";

function Component2({ a,b,c,d,e,f }) {
    return ( 
    <div style={{ border: "1px solid green", padding: "10px", margin: "5px"}}>
        <p>Component2 does not use props but forwards them</p>
        <Component3 a={a} b={b} c={c} d={d} e={e} f={f} /> 
    </div>
    );
}

export default Component2;