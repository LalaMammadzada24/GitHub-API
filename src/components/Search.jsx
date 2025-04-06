import React, {  useState } from 'react'


const Search = ({sendkeyword}) => {
      const [keyword,setKeyword] = useState("")
      const [alert,setAlert] = useState("")
      const [text,setText] = useState(" ")

      const formSubmit = (e)=>{
         e.preventDefault();
         sendkeyword(keyword);
         setKeyword(" ")

         if (!keyword) {
            setText("please fill input")
            setAlert("danger")
         }else{
            // if (!) {
            //     setText("No Users")
            //     setAlert("warning")  
            // }
         }
      }
    return (
        <>
        <div className={`w-25 mx-auto mt-3 alert alert-${alert}`} role='alerrt'>
        {text}
        </div>
        <form onSubmit={formSubmit} className='container d-flex justify-content-center my-5'>
            <div className='col-6'>
                <div className="input-group mb-3">
                    <input value={keyword} onChange={e=>setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter username"/>
                    <button className="btn btn-dark" type="search" >Search</button>
                </div>
            </div>
        </form>
        </>
    )
}

export default Search