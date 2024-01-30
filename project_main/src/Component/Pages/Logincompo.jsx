import React from 'react'
import { Link } from 'react-router-dom'
import CustomHook from "./../Hooks/CustomHook"
import { json } from 'react-router-dom'


const Logincompo = () => {

    const {HandleChange , inp, setInp}= CustomHook()
    
    return (
        <>
            <div className="row mt-5">
                <div className="col-4 offset-4">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                        <form method='post'>
                            <div className="row mt-3">
                                <div className="col">
                                    <input type="text" placeholder='Enter UserName' 
                                    onChange={HandleChange} className='form-control' name="UserName"/>
                                    {JSON.stringify(inp)}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <input type="Password" placeholder='Enter Password' 
                                    onChange={HandleChange} className='form-control' name="Password"/>
                                 {/* {JSON.stringify(inp)} */}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col text-center">
                                    <input type="submit" className='btn btn-primary' 
                                    value="login" name="btn-save" id="" />&nbsp;
                                    <input type="reset" className='btn btn-danger' 
                                    value="cancel" name="btn-save" id="" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col text-center">
                                    <Link to="/SignupCompo">Create New Account</Link>
                                </div>
                            </div>
                        </form>

                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Logincompo

