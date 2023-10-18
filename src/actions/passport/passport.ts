import axios from 'axios';
import { API } from '../../../config';

export const addPassport=(passport:{})=>{
    return axios.post(`${API}/passport/create`),
    passport
}

export const listPassport=(passport:{})=>{
    return axios.get(`${API}/passports`)}