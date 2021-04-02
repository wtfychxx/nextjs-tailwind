import Head from 'next/head';
import DefaultNavbar from '../navbar/defaultNavbar';

export default function Layout(props){
    return(
        <>
            <Head>
                <title>{props.title}</title>
            </Head>

            <DefaultNavbar />

            <div className="mt-8">
                {props.children}
            </div>
        </>
    )
}