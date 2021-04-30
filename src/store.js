import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { v4 as uuidv4 } from 'uuid';

const loggerMiddleware = createLogger();
const initialState = {
    noteList: [
        {
            uuid: uuidv4(),
            title: "New Note",
            content: "content",
          }],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_NOTE':
            return onAddNote(state);
        case 'DELETE_NOTE':
            return onDeleteNote(state, action.uuid);
        case 'CHANGE_NOTE_ATTRIBUTE':
            return onNoteAttributeChange(state, action.uuid, action.attribute, action.value);
        default:
            console.warn('Action not found.', action);
            return state;
    }
}

  function onNoteAttributeChange(state, uuid, attribute, value) {
    const note = state.noteList.find(note => note.uuid === uuid);

    note[attribute] = value;

    state.noteList = [...state.noteList];

    return state;
  }

  // function getNoteByUuid(uuid) {
  //   return noteList.find(note => note.uuid === uuid);
  // }

  // function getNoteIndexByUuid(uuid) {
  //   return noteList.findIndex(note => note.uuid === uuid);
  // }

  function onDeleteNote(state, uuid) {
    const copiedNoteList = [...state.noteList];
    const deleteNoteIndex = state.noteList.findIndex(note => note.uuid === uuid);

    copiedNoteList.splice(deleteNoteIndex, 1);
    state.noteList = copiedNoteList;

    return state;
  }

  function onAddNote(state) {
    const copiedNoteList = [...state.noteList];

    copiedNoteList.push({
      uuid: uuidv4(),
      title: "New Note",
      content: "content",
    })

    state.noteList = copiedNoteList;

    return state;
  }

const store = createStore(
	rootReducer,
	applyMiddleware(
		loggerMiddleware
	)
);

export default store;