const Login= ()=>import('@/components/AccountLogin/Login');
const PhoneLogin= ()=>import('@/components/AccountLogin/PhoneLogin');
let AccoutLogin = [
    {
        path:'/login',
        name:"Login",
        component:Login,
    },
    {
        path:'/phoneLogin',
        name:"PhoneLogin",
        component:PhoneLogin,
    }
    
]
export default AccoutLogin