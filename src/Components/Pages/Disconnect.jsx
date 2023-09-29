/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 29/07/2023 - 16:04:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/07/2023
    * - Author          : 
    * - Modification    : 
**/
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Disconnect() {
  const navigate = useNavigate();

  const token = JSON.parse(sessionStorage.getItem("token"));

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token} `);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:8000/api/logout", requestOptions)
    .then(response => {
      if (response.ok) {
        navigate("/");
        Swal.fire("Good-Bye Space Ranger", "You are disconnected!", "success");
        sessionStorage.clear();
      } 
      else{
        sessionStorage.clear();
        navigate("/");
      }
    })
    .catch(error => {
      console.error(error);
       
      Swal.fire("Error", "An unexpected error occurred", "error");
    });
   
}

export default Disconnect;
