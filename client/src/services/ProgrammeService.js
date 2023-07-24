const localhostURL = 'http://localhost:9000/programmes/';

const ProgrammeService = {

    // get all programmes
    getProgrammes() {
        return fetch(localhostURL)
        .then(res => res.json());
    },

    // get all programmes, names only
    getProgrammesNames() {
        return fetch(localhostURL)
            .then(res => res.json())
            .then(data => data.map(dataItem => dataItem.programme_name));
    },


    // add new programe to the db
    addNewProgramme(payload) {
        return fetch(localhostURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json());
    },


    // update an exisiting prigramme on the db, eg adding a new exercise
    updateProgramme(payload, _id) { //! read more into this - the separarting the _id out of the payload see line 47 AddToProgrmme.js
        return fetch(localhostURL + _id, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {  'Content-Type': 'application/json' }
        })
            .then(res => res.json());
    }

//TODO need to create the additional routes


};

export default ProgrammeService;