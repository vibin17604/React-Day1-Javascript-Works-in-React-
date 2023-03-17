console.log("Message to Developer")
function AlertMsg()
{
    const B =()=>{alert("Message from Javascript Alert!")}
    return <div><button onClick ={B}>Click</button></div>
}

ReactDOM.render(<AlertMsg/>,document.getElementById('mydiv'))