import React, { Component } from "react";
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div class="limiter">
                <h1>Form Login</h1>
                <div class="container-login100">  
                    <div class="wrap-login100 p-t-50 p-b-90">
                        <div className="login">
                            <form class="login100-form validate-form flex-sb flex-w"><br></br>
                                <h3>Tugas Pertemuan Ketiga</h3> <br></br><br></br>
                                <div class="wrap-input100">
                                    <input class="input100" type="text" name="username" placeholder="Username"/>
                                    <span class="focus-input100"></span>
                                </div> <br></br>
                                <div class="wrap-input100">
                                    <input class="input100" type="password" name="pass" placeholder="Password"/>
                                    <span class="focus-input100"></span>
                                </div> <br></br>
                                <div class="flex-sb-m w-full p-t-3 p-b-24">
                                    <div class="contact100-form-checkbox">
                                        <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                                        <label class="label-checkbox100" for="ckb1">Remember me</label>
                                </div>
                                </div> <br></br>
                                <div class="container-login100-form-btn">
                                    <button class="login100-form-btn">
                                        Login
                                    </button>
                                </div>
                                <br></br>
                                <div class="container-login10-form-btn">
                                    <button class="login10-form-btn">
                                        Cancel
                                    </button>
                                </div><br></br>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}export default Login;