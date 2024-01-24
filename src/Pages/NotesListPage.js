import React from 'react'
import notes from '../Assets/Data'
import ListItem from '../Components/ListItem'

const NotesListPage = () => {
  return (
    <div>
        <div className='notes-list'>
            {notes.map(note => (
                <ListItem key={note.id} note={note} />
            ))}
        </div>
   </div>
  )
}

export default NotesListPage
