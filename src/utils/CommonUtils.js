const greetingDeveloper = () => {
    console.log('Welcome to professional work environment')
}

greetingDeveloper()


export const loginManager = (email, password) => {
    if(email && password ){
        return alert('user logged in successfully')
    }else{
        return alert('login failed')
    };
};