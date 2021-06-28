import axios from 'axios'
import { PopularShowType } from '../TypeDefs/PopularShowType';

const api_key = '087a15f97ae0caf207dbc11e4e297393';

export const GET_POPULAR_SHOW = {
    type: PopularShowType,
    async resolve() {
        const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`);
        return res.data;
    }
}