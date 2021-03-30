import {IconType} from 'react-icons/lib/cjs/iconBase';
import {AiOutlineUser, AiFillMedicineBox} from 'react-icons/ai';
import {BsEyeFill} from 'react-icons/bs';
import {FaDog} from 'react-icons/fa';

export interface ISubMenuLink{
    label: string,
    url: string
    icon: IconType,
}

export interface ISubMenuItem{
    title: string,
    icon: IconType,
    items: ISubMenuLink[]
};


export let SubMenuItems:ISubMenuItem[] = [
    {
        title: "Cliente",
        icon: AiOutlineUser,
        items: [
            {
                label: "Visualizar",
                url: "/customer/edit",
                icon: BsEyeFill,
            },

            {
                label: "Cadastrar Pet",
                url: "/customer/pet",
                icon: FaDog,
            }
        
        ]
    },

    {
        title: "Veterinários",
        icon: AiFillMedicineBox,
        items: [
            {
                label: "Visualizar",
                url: "/veterinary/edit",
                icon: BsEyeFill,
            }
        ]
    }
]