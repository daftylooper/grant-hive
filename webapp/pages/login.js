import { useRouter } from "next/router";
import axios from 'axios';
import { useState } from "react";

function loginPage(){
    const router = useRouter();
    const { id } = router.query;

    const [uname, setUname] = useState();
    const [pword, setPword] = useState();

    const [falseLogIn, setFalseLogIn] = useState();

    const submitLogin = async()=>{
        const result = await axios.post(`http://localhost:3000/api/login`, {'username': uname, 'password': pword});
        console.log("hmmm: "+result.data.auth);
        if(result.data.auth){
            localStorage.setItem("token", result.data.token);
            localStorage.setItem("loggedInUser", uname)
            setFalseLogIn(false)
            console.log(`after login - http://localhost:3000/${result.data.result.user_role}/${result.data.result.role_id}`);
            router.push(`http://localhost:3000/${result.data.result.user_role}/${result.data.result.role_id}`)
        } else {
            setFalseLogIn(true)
            setTimeout(()=>{
                setFalseLogIn(false)
            }, 3000)
        }
    }

    return (
        <main>
            <nav className='navbar-log'>
                <img src="/GH.svg" alt="Your SVG" className="gh-svg" />
                <div className="logo2" style={{ margin: "0 46% 0 0" }}>
                    <h1>
                        GrantHive
                    </h1>
                </div>
            </nav>
            <div className="loginContainer">
                <div className="llogin">
                    <h1 className="log-granthive">
                        GrantHive
                    </h1>
                    <div className="formGroup">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="@"
                            onChange={e => { setUname(e.target.value) }}
                            value={uname}
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="****************"
                            onChange={e => { setPword(e.target.value) }}
                            value={pword}
                        />
                    </div>
                    {falseLogIn===true?<div style={{color: "red", marginTop: "-20px", fontWeight: "600", fontSize: "14px"}}>
                        Username or Password is Wrong!
                    </div>:<div></div>}
                    <div className="formGroup">
                        <button className="loginButton" onClick={submitLogin}>Login</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default loginPage;