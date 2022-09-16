import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
    console.log(children);
    return (
        <div>
            <Header />
            <div className="container">
                <div className="context">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
