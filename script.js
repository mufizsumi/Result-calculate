
let calculate = () => {
    let phy = document.getElementById('phy').value;
    let chm = document.getElementById('chm').value;
    let math = document.getElementById('math').value;
    let eng = document.getElementById('eng').value;
    let urdu = document.getElementById('urdu').value;

    let total = parseFloat(phy)+ parseFloat(chm)+ parseFloat(math)+ parseFloat(eng)+ parseFloat(urdu);
    let Percentage = (total/500)*100;
    document.getElementById('paragraph').innerHTML = `out of 500 your total marks are ${total} <br>
    and percentage is ${Percentage}%`;
}

