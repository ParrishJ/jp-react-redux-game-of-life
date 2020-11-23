import { cellGenerator } from '../components/generator'
import { cellReducer, initialState } from './cellReducer'
import {TOGGLE_STOP_BUTTON} from '../actions/cellActions'


describe('cell reducer', () => {

    let state = {
        generations: 0,
        cells: cellGenerator(),
        cellsCopy: cellGenerator(),
        cellsEnabled: true,
        gridColors: "Plain",
        generationActivity: false,
        buttonsWhileRunning: false,
        stopButton: true,
        showGolModal: false,
        showMeModal: false,
        showWarningModal: true,
        }



    it('should return initial state', () => {
        expect(cellReducer(undefined, {})).toEqual(state)
    })
})




describe('adds two', () => {
    function addTwo(num){
        return(
            num+num
        )
    }
    it('add two numbers', () => {
        expect(addTwo(2)).toEqual(4)
    })
})