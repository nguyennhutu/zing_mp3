import icons from "./icons"

const {  MdOutlineLibraryMusic,FiPieChart,RiDonutChartFill,TbChartArcs,BiBookHeart,TbRadio}=icons

export const sidebarMenu=[
   {
    path:'personal',
    text:'Cá nhân',
    icons:<MdOutlineLibraryMusic size={24}/>
   },
   {
    path:'',
    text:'Khám phá',
    icons:<FiPieChart size={24}/>
   },
   {
    path:'zing-chart',
    text:'#zingchart',
    icons:<TbChartArcs size={24}/>
   },
   {
    path:'radio',
    text:'Radio',
    icons:<TbRadio size={24}/>
   },

   {
    path:'follow',
    text:'Theo dõi',
    icons:<BiBookHeart size={24}/>
   },

]