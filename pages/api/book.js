import { Http } from '../../lib';

const http = new Http('http://127.0.0.1:70/api');

export async function getBook() {
    const res = await http.post('/Book', {});
    return res;
}

export async function getBookNumber() {
    const object = {
        type: "book_number",
        table: "ci_sis_library_master_book"
    };

    const res = await http.post('/generate', object);
    return res.number;
}