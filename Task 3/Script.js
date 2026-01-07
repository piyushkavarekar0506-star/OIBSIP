function convertTemp() {
    let temp =
        document.getElementById("tempInput").value;
    let unit =
        document.getElementById("unit").value;
    let result =
        document.getElementById("result");

    if (temp == "") {
        result.innerText = "Please Enter a Temperature!";
        return;
    }
    
    temp = Number(temp);
    let converted = "";

    if (unit == "celsius") {
        converted = (temp * 9 / 5) + 32;
        result.innerText = `${converted.toFixed(2)} °C`

    }

    else if (unit == "fahrenheit") {
        converted = (temp - 32) * 5 / 9;
        result.innerText = `${converted.toFixed(2)} °F`;
    }

    else {
        converted = temp + 273.15;
        console.log({ converted })
        result.innerText = `${converted.toFixed(2)} K`;
    }
}