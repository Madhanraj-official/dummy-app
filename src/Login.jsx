import {useDispatch} from "react-redux";
import {Controller, useForm} from "react-hook-form"
import {setUsernameAndPassword} from "./store/UserInput.js";
import {TextField,Button,Box} from "@mui/material";

export const Login = ()=>{
    const dispatcher = useDispatch()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { username: "", password: "" },
    })


    const userFields = [
        {
            name:"username",
            label:"Username",
            type:"text",
            rules:{
                required:{value:true,message:"Username is required"},
                pattern:{value:/^[A-Za-z0-9]{5,}$/,message:"Username must be 5 characters or more"},
            }
        },
        {
            name:"password",
            label:"Password",
            type:"password",
            rules:{
                required:{value:true,message:"Password is required"},
                pattern:{value:/^[A-Za-z0-9]{5,}$/,message:"Password must be 5 characters or more"},
            }
        },
        {
            name:"password",
            label:"Password",
            type:"password",
            rules:{
                required:{value:true,message:"Password is required"},
                pattern:{value:/^[A-Za-z0-9]{5,}$/,message:"Password must be 5 characters or more"},
            }
        },

    ]





    const submit = (data)=>{
        dispatcher(setUsernameAndPassword(data))
        console.log(data)
    }
    return(
        <>
            <Box component="form" justifyContent={"center"} alignItems={"center"} flexDirection={"column"} display={"flex"} gap={"10px"} onSubmit={handleSubmit(submit)} >
                {
                    userFields.map(({name,label,type,rules})=>(
                        <Controller name={name} rules={rules} control={control} render={({field})=>(
                            <TextField {...field} error={!!errors[name]} helperText={errors[name] ? errors[name].message : ""} label={label} type={type}/>
                        )}/>
                    ))
                }
                <Button type="submit" size={"large"} disabled={!!errors.password || !!errors.username}  variant={"contained"}>Login</Button>
            </Box>

        </>
    )
}





// return(
//     <>
//         <Box component="form" justifyContent={"center"} alignItems={"center"} flexDirection={"column"} display={"flex"} gap={"10px"} onSubmit={handleSubmit(submit)} >
//             <Controller name="username" rules={
//                 {
//                     required:{value:true,message:"Username is required"},
//                     pattern:{value:/^[A-Za-z0-9]{5,}$/,message:"Username must be 5 characters or more"},
//                 }
//             } control={control}  render={({field})=>(
//
//                 <TextField {...field} error={!!errors.username} helperText={errors.username ? errors.username.message : ""} />
//             )}/>
//
//
//             <Controller name="password"
//                         rules={
//                             {
//                                 required: {value:true,message:"Password is required"},
//                                 pattern:{value:/^[A-Za-z0-9]{5,}$/,message:"Password must be 5 characters or more"},
//                             }
//                         }
//                         control={control} render={({field})=>(
//                 <TextField {...field} error={!!errors.password} helperText={errors.password ? errors.password.message : ""}  />
//             )}/>
//             <Button type="submit" size={"large"} disabled={!!errors.password || !!errors.username}  variant={"contained"}>Login</Button>
//         </Box>
//
//     </>
// )
// }
