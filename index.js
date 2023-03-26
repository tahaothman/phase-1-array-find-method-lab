// code your solution here



function superbowlWin(array){

    let winYear = array.find(item => item.result === "W");

    if(winYear){
        return winYear.year;
    }else{
        return undefined     
    }
}   
    

    
