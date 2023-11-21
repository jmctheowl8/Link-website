function Form(){
    return(
        <form>
            <label htmlFor="linkName">Link Name:</label>
            <input type="text" id="linkName" name="linkName" value="" />
            <br />
            <br />
            <label htmlFor="URL">Link URL:</label>
            <input type="text" id="linkURL" name="linkURL" value=""/>
            <br/>
            <br />
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default Form
