export function findOrder(p:string, pList:any){
    let i;
    for(i = 0 ; i < 6; i++){
      if (pList[i]=== p){
        break;
      }
    }
    return i;
  };

export function changeProfile(p:string){
    let setDisplay: any;
    switch(p){
        case "person0" :
          setDisplay = ["flex","none","none","none","none","none"];
          break;
        case "person1" :
          setDisplay = ["none","flex","none","none","none","none"];
          break;
        case "person2" :
          setDisplay = ["none","none","flex","none","none","none"];
          break;    
        case "person3" :
          setDisplay = ["none","none","none","flex","none","none"]; 
          break;
        case "person4" :
          setDisplay = ["none","none","none","none","flex","none"];
          break;
        case "person5" :
          setDisplay = ["none","none","none","none","none","flex"];
          break;
      }
    return setDisplay;
};
