
export const todoServices = {
    obtenemosTodos,
    todoSave,
    todoCheckBox,
    todoDelete
}

var configUrl = "http://localhost:8080";

function obtenemosTodos () {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    };

    return fetch(`${configUrl}/gettodos`, requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        }); 
}

function todoSave (data) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };

    return fetch(`${configUrl}/savetodos`, requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        }); 
}

function todoCheckBox (data) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };

    return fetch(`${configUrl}/updatecheckbox`, requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        }); 
}

function todoDelete (data) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };

    return fetch(`${configUrl}/deletetodos`, requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        }); 
}

