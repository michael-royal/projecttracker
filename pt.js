var form = document.getElementById("main-form");
let position = 100000;

var update = new Date("");
function clear(){
  mix = document.getElementById("eday").value = " ";
      mixed = document.getElementById("emonth").value = " ";
      mixer = document.getElementById("eyear").value = " ";
      mild = document.getElementById("bday").value = " ";
      mile = document.getElementById("bmonth").value = " ";
      meek = document.getElementById("byear").value = " ";
}

form.addEventListener("submit", track);

function track(e) {
  e.preventDefault();
  
  var form = document.getElementById("main-form");
  form.style.display = "none";
  var eday = document.getElementById("eday").value;
  var emonth = document.getElementById("emonth").value;
  console.log(emonth)
  var eyear = document.getElementById("eyear").value;
  // var hold = document.getElementById('#hold')
  // hold.style.height = '500px'

  hold.style;
  let deadline = new Date();
  deadline.setDate(eday);
  deadline.setMonth(emonth);
  deadline.setFullYear(eyear);
  const ead = deadline.getTime();
  // console.log(ead);

  const intvl = setInterval(() => {
    var bday = document.getElementById("bday").value;
    var bmonth = document.getElementById("bmonth").value;
  console.log(bmonth)

    var byear = document.getElementById("byear").value;
    let start = new Date();
    start.setDate(bday);
    start.setMonth(bmonth);
    start.setFullYear(byear);
    const lead = start.getTime();
    // console.log(lead)
    // var bar = document.getElementById('projectbar')

    //   bar.style.width = (position * 100)/distance
    const distance = ead - lead;

    console.log(distance);

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hrs = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);
    
    var output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = ` <p> The algorithm says You have approximately <br> <strong> ${days} day(s): ${hrs} Hours : ${mins} Minutes and ${secs} Seconds</strong><br> to project deadline</p>`;
    
    if(localStorage.getItem('outpu') === null){
      var inner = [days, hrs, mins, secs]

      localStorage.setItem('outpu', JSON.stringify(inner))
    }

    if (distance < 0) {
      clearInterval(intvl);

      output.style.display = "none";
      form.style.display = "block";

      alert(
        "The algorithm says Your Time is up Wishing you good luck on your Successfull project"
      );



    }
  }, 1000);
}
