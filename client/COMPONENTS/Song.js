import React from 'react'

const styles ={
    complete: {
        textDecoration: 'underline overline wavy blue',
        color: 'red'
    },
    pointer: {cursor: 'pointer'}
} 

const Song =({id, complete, name, updateSong, deleteSong}) => (
 <div className= "col s12">
 <div className= "col m8">
 <div style={complete ? styles.complete : {}} className= "center">
 {name}
 </div>
 </div>
 <div className = "col m2">
 <input
 id={`item=${id}`}
 type="checkbox"
 defaultChecked={complete}
 onClick={() => updateSong(id)}
 />
 <label htmlFor={`item=${id}`}>Complete?</label>
 </div>
 <div style={styles.pointer} class="col1" on Click={() => deleteSong(id)}>
 X
 </div>
 </div>
)
export default Todo;
