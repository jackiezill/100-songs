import React from 'react';
import Cancion from './ChildSong';

const TodoList = ({ songs, uptateSong, deleteSong }) => (
    <div className= "row">
    { Cancions.map( cancions =>
    < Song
        key={song.id}
    {...song}
    updateSong={updateSong}
    deleteSong={deleteSong}
    />


    )
}
</div>

)

export default TodoList;