//import Logo from '../components/Home/Logo.jsx';
import Body from '../components/Home/Body.jsx'
import OpenLink from '../components/Core/OpenLink.jsx';
import Footer from '../components/Home/Footer.jsx'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import githubLogo from '../assets/github.svg'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <>
            <div>

                <OpenLink
                    redirectUrl="https://vite.dev"
                    logoImage={viteLogo}
                    altValue="vite" />

                <OpenLink
                    redirectUrl="https://react.dev"
                    logoImage={reactLogo}
                    altValue="react" />

                <OpenLink
                    redirectUrl="https://github.com/pradovc01/dev-frontend-react2025"
                    logoImage={githubLogo}
                    altValue="github" />

            </div>
            <span>Count Value: {count}</span>
            <Body></Body>
            <Footer />

        </>
    )
};
export default Home;