import Head from 'next/head';
import DefaultNavbar from '../navbar/defaultNavbar';

export default function Layout(props){
    return(
        <div>
            <head>
                <title>{props.title}</title>
            </head>

            <DefaultNavbar />

            <div className="mt-8">
                {props.children}
            </div>
        </div>
    )
}