export const listImg = ['img_1', 'img_2', 'img_3', 'img_4', 'img_5', 'img_6', 'img_7', 'img_8', 'img_9',
'img_10', 'img_11', 'img_12', 'img_13', 'img_14', 'img_15', 'img_16', 'img_17', 'img_18', 'img_19',
'img_20', 'img_21', 'img_22', 'img_23', 'img_24', 'img_25', 'img_26', 'img_27', 'img_28', 'img_29',
'img_30', 'img_31', 'img_32', 'img_33', 'img_34'];

export const searchPosImg = img => {
	
	const index = listImg.findIndex(name => name === img);

	return index + 1;
}