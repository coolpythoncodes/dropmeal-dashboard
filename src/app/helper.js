import firebase from '../Components/firebase'
export const maxStringLength = (value,leng = 80)=>{
    const word = value.substr(0, leng);
    const str = leng - value.length ;
    return str > 0 ? value :word + "...";
  }
export const moment = (time)=>{
    const time1 = new Date(time*1000)
    const today = new Date(firebase.serverTime*1000)
    const hr = time1.getHours()
    const mm = time1.getMinutes()
    let data =''
        if(today.getDate()-time1.getDate() === 1 && today.getMonth() === time1.getMonth() && today.getFullYear() === time1.getFullYear()){
            data = 'Yesterday'
        }
        else if(today.getDate()-time1.getDate() === 0 && today.getMonth() === time1.getMonth() && today.getFullYear() === time1.getFullYear()){
            // const hr = time1.getHours()
            // const mm = time1.getMinutes()
            data= (hr>12?hr-12:hr) +':'+(mm<10?'0'+mm:mm)+(hr>12?' PM':' AM')
        }
        else{
            data = (time1.getDate()<10?'0'+time1.getDate():time1.getDate())+'-'+((time1.getMonth()+1)<10?'0'+(time1.getMonth()+1):(time1.getMonth()+1))+'-'+time1.getFullYear()
        }
        return data;
}