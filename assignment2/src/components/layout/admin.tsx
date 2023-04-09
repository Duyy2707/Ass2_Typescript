import {Outlet} from 'react-router-dom'

const AdminLayout = () => {
    return <>
        {/* Header */}
        <header className="bg-blue-700 h-[80px]">
            <div className="container mx-auto flex items-center gap-4">
                <img className="w-[60px] mt-3" src="/logo.png" alt="" />
                <i className="fa fa-search search-icon mt-3"></i>
                <input className="grow mt-3 rounded-md pl-3" type="text" placeholder="search" />
                
                
            </div>
        </header>
       
        {/* Content */}
        <Outlet/>
        {/* Footer */}
       
    </>
}

export default AdminLayout