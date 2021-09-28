import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery';
import 'popper.js';

import Head from 'next/head';

import 'styles/globals.css';
import { HeroNav, Alert } from 'components';

export default App;

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Gestion de Projet Pour Akata</title>
            </Head>

            <div className="app-container bg-light">
                <HeroNav />
                <Alert />
                <div className="container pt-4 pb-4">
                    <Component {...pageProps} />
                </div>
            </div>
            {/* credits */}
            <div className="text-center mt-4">
                <p>
                    Gestion De Project Akata 
                </p>
                <p>
                    <a href="https://github.com/Zo-ambinintsoa/" target="_top">Ambinintsoa Zo</a>
                </p>
            </div>
        </>
    );
}
