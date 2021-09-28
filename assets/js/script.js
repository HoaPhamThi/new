window.addEventListener('load', function() {
    let long;
    let lat;
    let temparatureDescription = document.querySelector('.temperature__description');
    let temparatureDegree = document.querySelector('.temperature__degree');
    let locationTimezone = document.querySelector('.location__timezone');
    let locationIcon = document.querySelector('.location img');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=ca3371ace9ab4c92bdbe42dae4db694c`
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    console.log({ data });
                    const tempInfor = data.data[0];
                    temparatureDegree.textContent = tempInfor.temp;
                    temparatureDescription.textContent = tempInfor.weather.description;
                    locationTimezone.textContent = tempInfor.city_name;
                    locationIcon.setAttribute('src', `https://www.weatherbit.io/static/img/icons/${tempInfor.weather.icon}.png`)
                })
        });
    }
});