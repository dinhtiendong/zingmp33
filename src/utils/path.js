const path = {
    PUBLIC:'/',
    HOME:'',
    LOGIN:'login',
    STAR:'*',
    MY_MUSIC:'mymusic',
    ALBUM_TITLE_PID: 'album/:title/:pid',
    PLAYLIST_TITLE_PID: 'playlist/:title/:pid'
    // __ để phân biệt đây là cái param  có : thì là param ko có : thì route cố định
}

// Trong dự án thực tế thì ta không viết tĩnh cho thằng route 
// mà ta cần 1 file path như này để viết những thằng mặc định

export default path;