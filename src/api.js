import axios from "axios";
import moment from "moment-with-locales-es6";

export async function getHoutels({ date, daysCount, query }) {
    const startDay = moment(date).format("YYYY-MM-DD");
    const tmpDay = new Date(date);
    const endDay = moment(new Date(tmpDay.setDate(tmpDay.getDate() + +daysCount - 1))).format("YYYY-MM-DD");
    let response = await axios.get(
        `https://engine.hotellook.com/api/v2/cache.json?location=${query}&currency=rub&checkIn=${startDay}&checkOut=${endDay}&limit=15`
    );

    return response.data;
}
