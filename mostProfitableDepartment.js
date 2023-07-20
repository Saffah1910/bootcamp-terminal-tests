export default function mostProfitableDepartment(profit){
  
    const departmentMap = {};
    if(profit !== ""){

        for (var i=0;i<profit.length;i++){
            var dep = profit[i].department;
        
          if(departmentMap[dep] === undefined){
            departmentMap[dep] = 0;
          } 
          departmentMap[dep] += profit[i].sales      
         }
        
       var most = "";
        var mostDep = 0;
        
        for (var deps in departmentMap){
         if(departmentMap[deps] > mostDep) {
                 
           mostDep = departmentMap[deps];
           most = deps;
         } 
      }
      return most;


    }
      
    else{
        return "No data found"
      }

    }