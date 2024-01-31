export default function Contact(){
    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-12 col-md-5">
                    <h1 className="mb-5">Contact Me</h1>
                    <strong className="mt-4">Email: nako@gmail.com</strong>
                    <br />
                    <br />

                    <strong>Phone: XXX XXX XXX</strong>
                </div>
                <div className="col-sm-12 col-md-6 ">
                    <h1>send enithing</h1>
                    <form className="contact_form w-100 mt-5 d-flex align-items-center">
                    <div className=" col-md-6 me-4 ">
                    <input className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                        />
                    </div>
                     <div className="col-6">
                     <input className="form-control rounded-0"
                        id="email"
                        name="email"
                        placeholder="email"
                        type="email"
                        />
                     </div>
                    
                        </form>
                        
                    <textarea className="form-control rounded-0 mt-3"
                    name="message"
                    placeholder="message"
                    rows={6}>
                        
                    </textarea>
                    <div className="col-8 col-sm-12 form-group mt-4">
                        <button className="btn ac-btn" type="submit">
                            send
                        </button>

                    </div>
                   
                      
                </div>
                
            </div>
        </div>
    )
}