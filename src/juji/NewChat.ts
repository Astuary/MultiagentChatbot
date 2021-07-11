import { auth1 } from "./Auth";

export const chat_initiate = async () => {
    var juji_token : string;

    //try{  
        juji_token = await auth1();
        await console.log(juji_token);//.then(data => console.log(data + 'HERE?')).then(data => juji_token = data).then(juji_token => console.log(juji_token));
        
    /*}
    catch(err){
        console.log("Failed to authenticate for new user.")
    }*/

    //await console.log('RIGHT HERE');
    //await console.log(juji_token);
    return juji_token;
};