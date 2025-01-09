
const OpenLink = ({ redirectUrl, logoImage, altValue }) => {
    return (
        <div>
            <a href={redirectUrl} target="_blank">
                <img src={logoImage} className="logo" alt={`${altValue} logo`} />
            </a>

        </div>
    );
}

export default OpenLink;