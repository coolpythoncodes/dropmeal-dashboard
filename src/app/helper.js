export const maxStringLength = (value,leng = 80)=>{
    const word = value.substr(0, leng);
    const str = leng - value.length ;
    return str > 0 ? value :word + "...";
  }