import { Helmet } from 'react-helmet';

export default function Home() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', color: 'green', justifyContent: 'center', height: '100vh' }}>
            <Helmet>
                <title>Welcome to Phonebook!</title>
            </Helmet>
            <h1>Welcome to Phonebook!</h1>
        </div>
    );
}