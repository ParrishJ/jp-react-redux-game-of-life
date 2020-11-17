import { cellGenerator } from '../components/generator'
import { cellReducer } from './cellReducer'
import * as actions from '../actions/cellActions'


describe('cell reducer', () => {
    it('should return initial state', () => {
        expect(cellReducer(undefined, {})).toEqual(
            {
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
        )
    })
})