import { set, ref, get, child, getDatabase } from "firebase/database";
import { nanoid } from "nanoid";
import { db } from "./firebase";



function userId(){
    const dbRef = ref(getDatabase())
    let count;
    get(child(dbRef, 'users')).then((snapshot) =>{
        if(snapshot.exists())
        {   
            count = parseInt(Object.keys(snapshot.val()).length) + 1
            console.log(parseInt(count))
            
        }
        else{
            console.log("no data available")
            count = "0";
        }
        return count;
    }).catch((error)=>
    {
        count = "X"
        console.error(error)
    })
}


function writeUserData(data)
{
    let id = nanoid()
    let result = {id:id,...data}
    set(ref( db, 'users/' + id ),result)
    console.log(result)
}

export {writeUserData, userId}