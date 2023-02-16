
export function filterData(searchInput,restaurants){
    return newData = restaurants.filter(
         (restaurant) =>
            
             restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase())
         
     );
 
     return filterData;
 }