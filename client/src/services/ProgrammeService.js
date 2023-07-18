const localhostURL = 'http://localhost:9000/programmes/';

const ProgrammeService = {

    // get all programmes
    getProgrammes() {
        return fetch(localhostURL)
        .then(res => res.json());
    },




};

export default ProgrammeService;