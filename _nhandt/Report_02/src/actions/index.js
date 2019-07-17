import * as Types from './../constants/actionType';

export const getData = (data) => {
	return {
		type : Types.FEATCH_DATA,
		data
	}
}