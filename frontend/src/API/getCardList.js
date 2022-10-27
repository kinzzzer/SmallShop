import axios from "axios";

export default async function getCardList({limit, offset}) {
    console.log(limit, offset);
    return await axios
        .get(`http://localhost:3001/api/card?limit=${limit}&offset=${offset}`)
        .then((res, error) => {
            return res
        })
}