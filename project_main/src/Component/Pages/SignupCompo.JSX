import React from 'react'

const SignupCompo = () => {
    return (
        <>
        
            <div className="row mt-5">
                <div className="col-4 offset-4">
                    <div className="card">
                        <div className="card-header">Registration</div>
                        <div className="card-body">

                            <form action="" method='post'>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" placeholder='enter user name' className='form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" placeholder='enter user name' className='form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col text-center">
                                        <input type="submit" className='btn btn-primary' value="login" name="btn-save" id="" />&nbsp;
                                        <input type="submit" className='btn btn-danger' value="cancel" name="btn-save" id="" />
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

export default SignupCompo

