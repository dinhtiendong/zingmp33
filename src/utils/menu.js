import icons from "./icons"

const {MdLibraryMusic,RxDisc,GiMusicSpell,BsNewspaper} = icons
export const sidebarMenu = [
    {
        //  1 cái item của sibarleft của zing sẽ có 3 thành như dưới path là đường dẫn đến địa chỉ Router của item menu
        path:'mymusic',
        text:'Cá nhân',
        icons: <MdLibraryMusic size={24}/>
    },
    {
        //  1 cái item của sibarleft của zing sẽ có 3 thành như dưới path là đường dẫn đến địa chỉ Router của item menu
        path:'',
        text:'Khám phá',
        end:true,
        //  tác dụng của end nếu mà đúng thằng path này thì nó active còn ko thì nó k active
        icons: <RxDisc size={24}/>
    },
    {
        //  1 cái item của sibarleft của zing sẽ có 3 thành như dưới path là đường dẫn đến địa chỉ Router của item menu
        path:'zing-chart',
        text:'#zingchart',
        icons: <GiMusicSpell size={24}/>
    },
    {
        //  1 cái item của sibarleft của zing sẽ có 3 thành như dưới path là đường dẫn đến địa chỉ Router của item menu
        path:'follow',
        text:'Theo dõi',
        icons: <BsNewspaper size={24}/>
    }
]