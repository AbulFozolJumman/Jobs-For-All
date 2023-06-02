// use local storage to manage job data
const addToDb = (id, sign) => {
    let storedData = getFromDb();
    // add Id
    const Id = storedData[sign];
    if (!Id) {
        storedData[sign] = id;
    }
    localStorage.setItem('applied-jobs', JSON.stringify(storedData));
}


// Get data from localStorage
const getFromDb = () => {
    let storedData = {};

    //get the stored data from local storage
    const jobsData = localStorage.getItem('applied-jobs');
    if (jobsData) {
        storedData = JSON.parse(jobsData);
    }
    return storedData;
}


export {
    getFromDb,
    addToDb
}

