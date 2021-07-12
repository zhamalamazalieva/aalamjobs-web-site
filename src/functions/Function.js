export function formatDate(date_str) {
    const formatted_date = new Date(date_str)
    return formatted_date.toLocaleDateString()
}

export function getFullYear(date_str){
    const formatted_date = new Date(date_str);
    return formatted_date.getFullYear();
}

export function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

export function getCurrentDate() {
    const curr = new Date()
    return curr.toISOString().substr(0, 10)
}