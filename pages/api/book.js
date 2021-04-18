import { Http } from '../../lib';

const http = new Http('http://127.0.0.1:70/api');

export async function getBook() {
    const res = await http.post('/Book', {});
    return res;
}