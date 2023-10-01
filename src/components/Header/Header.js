import './Header.css'

function Header() {
    return (
        <div className="header">
            <h1 className='titulo'>El aroma mágico</h1>
            <hr className='rayitas'/>
            <img className='imgHeaderr'src="./imgHeader.png" alt="imagen de cafe" />
            <hr />
        </div>
    );
}

export default Header;