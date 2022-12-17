// let today=new Date()
// let day = String(today.getDate())
// let month = String(today.getMonth()+1)
// let year = today.getFullYear()

// let time = today.getHours()+':'+ today
// // today = month + '/' + day + '/' + year

// console.log(results)
let buttonTime = document.getElementsByClassName("time")

function dateTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    let currentDate = new Date().toJSON().slice(0, 10);

    return (currentDate + ' @ ' + strTime)
  }
  
  console.log(dateTime(new Date));
  console.log(dateTime(new Date));