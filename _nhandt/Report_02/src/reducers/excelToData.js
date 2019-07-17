import * as Types from './../constants/actionType'

const initialState = []

const datas = (state=initialState, action) => {
	switch(action.type){
		case Types.FEATCH_DATA :
			state = action.data
			return [...state]
		default : return [...state]
	}
}

export default datas