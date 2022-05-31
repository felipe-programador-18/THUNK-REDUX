
import {loadUA} from './actions'

//create testing to verify actions!!

describe('test in actions', () => {
    test('loadUa', (done) => {
        const get = jest.fn()
        const data = {}
        get.mockReturnValue(Promise.resolve(data))
        let callNumber = 0
        let dispatch = jest.fn(params => {
            if(callNumber === 0){
            expect(params).toEqual({type:'LOAD_UA_REQUEST'})
            }if(callNumber === 1){
            expect(params).toEqual({type:'LOAD_UA_SUCESS',
            data: data
            })
            done() 
           }
           callNumber ++
        })
        const axiosMock = {
            get
        }
        loadUA(axiosMock)(dispatch)
    })
})