let WEPOUrl = "https://dev.wepo.tech/api/board_post/lists/default"


export default function Phone(){
    const [det, setDet] = useState("")
    function Api(){
  fetch(WEPOUrl)
  .then(res =>res.json())
  .then(data=> setDet(data.view.list.data.list))
  .catch(error => console.log(error.message))
}

return(
    <div>
        
    </div>
)

}