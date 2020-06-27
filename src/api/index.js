import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deths, lastUpdate } } = await axios.get(url);
        return { confirmed, recovered, deths, lastUpdate };

    } catch (err) {

    }
}

// const {data} = await axios.get(url);

//         const modifiedData = {
//             confirmed: data.confirmed,
//             countryDetails: data.recoverd,
//             dailyTimeSeries: data.deths,
//             recovered: data.lastUpdate
//         }
//         return modifiedData;

// const { data: { confirmed, recovered, deths, lastUpdate } } = await axios.get(url);

//         const modifiedData = {
//             confirmed: confirmed,
//             countryDetails: recovered,
//             dailyTimeSeries: deths,
//             recovered: lastUpdate
//         }
//         return modifiedData;

// const { data: { confirmed, recovered, deths, lastUpdate } } = await axios.get(url);

//         const modifiedData = {
//             confirmed,
//             deths,
//             lastUpdate,
//             recovered
//         }
//         return modifiedData;