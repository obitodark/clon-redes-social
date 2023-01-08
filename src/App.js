import DataProvider from './context/DataProvider.context';
import Router from './routes';

function App() {
    return (
        <DataProvider>
            <Router />
        </DataProvider>
    );
}

export default App;
