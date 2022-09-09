import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    console.log(children);
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="context">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
