import axios from "axios";

export default async function getCardById(id) {
        return await axios
            .get(`http://localhost:3001/api/card/${id}`)
            .then((res, error) => {
                return res
            })
        }