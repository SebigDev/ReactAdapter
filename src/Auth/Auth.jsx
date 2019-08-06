import auth0 from 'auth0-js';

export default class Auth {

    constructor(history){

        this.history = history;
        this.auth0 = new auth0.WebAuth({
            domain: process.env.REACT_APP_AUTH0_D0MAIN,
            clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
            redirectUri: process.env.REACT_APP_AUTH0_CALLBACK,

            responseType: "token id_token",
            scope: "openid email"

        })
    }

    login = ()=> {
        this.auth0.authorize();
    }

    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) =>{
          
            if(authResult && authResult.accessToken && authResult.idToken){
              this.setSession(authResult);
              this.history.push("/")
            } else if(err){
                this.history.push("/")
                alert(`Error: ${err.error}. Please check your account detail`);
                console.log(err.error);
            }
        })
    }

    setSession = (authResult) =>{
      const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
      localStorage.setItem("access_token", authResult.accessToken);
      localStorage.setItem("id_token", authResult.idToken);
      localStorage.setItem("expiresAt", expiresAt);
    }
}