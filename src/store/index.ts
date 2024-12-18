import { defineStore } from "pinia";
import axios from "axios";

interface ForecastDay {
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
            code: number;
            icon: string;
        };
    };
    date_epoch: string;
}

export const useStore = defineStore("main", {
    state: () => ({
        cityName: "seoul",
        dataOfCW: { temp: 0, country: "", cityName: "", localtime: "", iconCode: 0, iconUrl: "" },
        dataOfHW: [],
        dataOfHLW: { sunrise: "", sunset: "", moonrise: "", moonset: "", humidity: 0, pressure: 0, visibility: 0, feelsLike: 0 },
        dataOf7DW: [],
    }),
    actions: {
        async fetchApi() {
            const WEATHER_BASE_URL = "http://api.weatherapi.com/v1";
            const WEATHER_API_KEY = "1c8579f0c8b348fbb22120227241612";

            try {
                const res = await axios.get(`${WEATHER_BASE_URL}/forecast.json?q=${this.cityName}&days=7&key=${WEATHER_API_KEY}`);
                const { current, location, forecast } = res.data;
                console.log(res);

                /** WidgetCurrentWeather 컴포넌트에서 필요한 데이터 */
                this.dataOfCW.temp = current.temp_c;
                this.dataOfCW.country = location.country;
                this.dataOfCW.cityName = location.name;
                this.dataOfCW.localtime = location.localtime;
                this.dataOfCW.iconCode = current.condition.code;
                this.dataOfCW.iconUrl = current.condition.icon;

                /** WidgetHourlyWeather 컴포넌트에서 필요한 데이터 */
                this.dataOfHW = forecast.forecastday[0].hour;

                /** WidgetHighlightWeather 컴포넌트에서 필요한 데이터 */
                this.dataOfHLW.sunrise = forecast.forecastday[0].astro.sunrise;
                this.dataOfHLW.sunset = forecast.forecastday[0].astro.sunset;
                this.dataOfHLW.moonrise = forecast.forecastday[0].astro.moonrise;
                this.dataOfHLW.moonset = forecast.forecastday[0].astro.moonset;
                this.dataOfHLW.humidity = current.humidity;
                this.dataOfHLW.pressure = current.pressure_mb;
                this.dataOfHLW.visibility = current.vis_km;
                this.dataOfHLW.feelsLike = current.feelslike_c;

                /** WidgetOneWeekWeather 컴포넌트에서 필요한 데이터 */
                this.dataOf7DW = forecast.forecastday.map((item: ForecastDay) => {
                    return {
                        maxTemp: Math.round(item.day.maxtemp_c),
                        minTemp: Math.round(item.day.mintemp_c),
                        date: item.date_epoch,
                        iconCode: item.day.condition.code,
                        isDay: item.day.condition.icon.includes("day"),
                    };
                });
            } catch (error) {
                console.log("error: ", error);
            }
        },
    },
});
