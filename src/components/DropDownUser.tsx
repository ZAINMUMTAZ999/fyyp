// import { AllUserFetching } from "../Api";
import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator
  } from "@/components/ui/dropdown-menu";
import { BsCaretDownFill } from "react-icons/bs";

// import { useQuery } from "react-query";

import Logout from "./Logout";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import user from "../../src/assets/user.png"

const DropDownUser = () => {

    // const { data: userFetchigData } = useQuery("users", AllUserFetching);
// console.log(userFetchigData)

    return (
        <DropdownMenu>
            
            <DropdownMenuTrigger className="flex items-center    focus:outline-none  ">
                <div>

                    <img className="w-10 h-10 rounded-full object-cover mr-2" src={user }
                    />
                <BsCaretDownFill size={12} className=" flex ml-3" />
                </div>

                {/* <img src={userFetchigData?.user?.imageFile}/> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
             
                <DropdownMenuLabel >
                  
                     {/* {userFetchigData?.user.email} */}
                {/* {userFetchigData?.user?.firstName}  */}
                    
                    </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    {/* <Link to="/userProfile" className="hover:cursor-pointer flex flex-1 justify-center bg-slate-100 p-1 hover:bg-slate-300" >
                        Profile

                    </Link> */}
                </DropdownMenuItem>
            

                <DropdownMenuItem><Logout /></DropdownMenuItem>
                {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
                {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
            </DropdownMenuContent>
        </DropdownMenu>

    )
};
export default DropDownUser;