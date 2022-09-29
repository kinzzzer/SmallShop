import axios from "axios";

export default async function getCardList(link) {
    if (link) {
        return await axios
            .get(link)
            .then((res, error) => {
                return res.data
            })
    }
}
