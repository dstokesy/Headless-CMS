import '../styles/global.scss';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { wrapper } from '../store/store';

const App: React.FC<AppProps> = ({ Component, ...rest }) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;

    return (
        <Provider store={store}>
            <main>
                <Component {...pageProps} />
            </main>
        </Provider>
    );
};

export default App;
