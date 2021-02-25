const API_KEY ="iGU1JlfMP7fIbC6ECugGGSzkV0v1";

const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;


export const getMatchDetail =()=>{

    return fetch(url).then((res)=>res.json()).catch((e)=>{console.log(e)})

}