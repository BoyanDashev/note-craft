
import image from './img/settings.svg'
import menu from './img/burgermenu.svg'
function Navbar(){
    return(
        <div>
        
        <nav className="bg-slate-100 flex justify-between items-stretch  ">
            
            
           

            <a href='/' className='text-2xl text-slate-700 pt-2'>NoteCraft</a>
            <img className='h-10 w-10 flex-no-shrink fill-current pt-2'  src={menu} alt='Menu' />
            <img  src={image} className='h-10 w-10 pt-1 ' alt='Settings' />
            </nav>
            <div className='bg-slate-700 w-screen h-2'></div>
            </div>
    )
}
export default Navbar;
