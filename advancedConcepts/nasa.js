
const url = 'https://api.spacexdata.com/v3/roadster';


const displayData = (data) => {
    const { title, description, apo, peri, distance, speed } = data;
    let dataArea = document.getElementById('data-area');

    let displayTitle = document.createElement('h1');
    let displayDescription = document.createElement('p');
    let dataCards = document.createElement('div');
    dataCards.classList.add('dataCards');

    const createDataCard = (dataTitle, dataValue) => {
        let dataCard = document.createElement('div');
        dataCard.classList.add('card');
        let divTitle = document.createElement('h3');
        let divValue = document.createElement('p');
        divTitle.innerText = dataTitle;
        divValue.innerText = dataValue;
        dataCard.appendChild(divTitle);
        dataCard.appendChild(divValue);
        return dataCard;
    }

    displayTitle.innerHTML = title;
    displayDescription.innerHTML = description;

    let apoCard = createDataCard('Apoapsis', `${apo} AU`);
    let periCard = createDataCard('Periapsis', `${peri} AU`);
    let distanceCard = createDataCard('Distace from You', `${distance} KM`);
    let speedCard = createDataCard('Current Speed', `${speed} Km/h`);

    dataCards.appendChild(apoCard);
    dataCards.appendChild(periCard);
    dataCards.appendChild(distanceCard);
    dataCards.appendChild(speedCard);

    dataArea.appendChild(displayTitle);
    dataArea.appendChild(displayDescription);
    dataArea.appendChild(dataCards);

}


fetch(url)
    .then(xbox => {
        console.log(xbox);
        return xbox.json()
    })
    .then(json => {
        // At this point, handle placing data on the screen
        const myData = {
            title: 'Tesla Roadster In Orbit',
            description: json.details,
            apo: json.apoapsis_au,
            peri: json.periapsis_au,
            distance: json.earth_distance_km,
            speed: json.speed_kph
        }
        
        displayData(myData)

        console.log(json);
        console.log('done')
    })
    .catch(err => {
        console.error(err)
    })
