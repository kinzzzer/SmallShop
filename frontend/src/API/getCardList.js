import axios from "axios";

export default async function getCardList() {
        return await axios
            .get("http://localhost:3001/api/card")
            .then((res, error) => {
                return res
            })
        }