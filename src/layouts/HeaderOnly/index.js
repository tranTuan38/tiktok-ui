import PropTypes from 'prop-types';
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

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
