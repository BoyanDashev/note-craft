
import image from './img/settings.png'
function Navbar(){
    return(
        
        <nav className="bg-blue-500 text-white p-4">
            
            
           

            <a href='/' className='text-2xl flex justify-center items-center'>NoteCraft</a>
            <img src={image} alt='Settings' className=" pr-0"/>
            
            
            
        </nav>
    )
}
export default Navbar;
