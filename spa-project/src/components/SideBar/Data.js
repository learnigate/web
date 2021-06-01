import api from "../../adapters/xhr"

const fetchData = () => {
  api.getData()
  .then((response)=>{
      return response
  })
  .catch((error) => {
      console.log(error)
  })
}

export let data = fetchData();