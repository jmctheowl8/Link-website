import { useState } from "react"


function Form(props){
    const [name, setName] = useState("")
    const [URL, setURL] = useState("")

    const handleChange = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    const handleURLChange = (event) => {
        console.log(event.target.value)
        setURL(event.target.value)
    }

    return(
        <form onSubmit={(event) =>{
            event.preventdefault()
            console.log(name, URL) // send to the linkcontainer
            props.submitNewLink({name, URL})
        }} > 
            <label htmlFor="linkName">Link Name:</label>
            <input type="text" id="linkName" name="linkName" onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="URL">Link URL:</label>
            <input type="text" id="linkURL" name="linkURL" onChange={handleURLChange} />
            <br/>
            <br />
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default Form
