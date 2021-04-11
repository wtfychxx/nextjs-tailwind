import { Http } from '../../lib';

const http = new Http('http://127.0.0.1:70/api');
export async function getData() {
    const json = [{
            id: 1,
            title: "Mountain",
            image: "https://images.pexels.com/photos/1714942/pexels-photo-1714942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fugiat consequatur recusandae nostrum. Ipsum, necessitatibus.",
            tags: [{
                    text: "Mountain"
                },
                {
                    text: "Photography"
                },
                {
                    text: "Traveling"
                }
            ]
        }, {
            id: 2,
            title: "City",
            image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestiae rerum nihil commodi, magnam est voluptas minus debitis repellendus exercitationem magni dolor!",
            tags: [{
                    text: "City"
                },
                {
                    text: "Metropolite"
                },
                {
                    text: "Culinary"
                }
            ]
        },
        {
            id: 3,
            title: "Beach",
            image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quia aperiam rerum harum ducimus voluptatibus distinctio, porro nihil quasi deserunt.",
            tags: [{
                    text: "Beach"
                },
                {
                    text: "Photography"
                },
                {
                    text: "Traveling"
                }
            ]
        },
        {
            id: 4,
            title: "School",
            image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore atque quas laborum dolores saepe, odio aspernatur quam.",
            tags: [{
                text: "School"
            }, {
                text: "Photography"
            }, {
                text: "Education"
            }]
        }
    ];

    // const res = await http.post('/Book', {});
    return await json;
}