import { Http } from '../../lib';

const http = new Http('http://127.0.0.1:70/api');

export async function getCombo(type = '', parent = '') {
    const object = {
        type: type,
        parent: parent,
        isarray: true
    }
    const res = await http.post('/getCombo', object);

    return res.result;
}