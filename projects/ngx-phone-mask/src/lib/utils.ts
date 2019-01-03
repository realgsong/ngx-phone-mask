export const clean = (number) => {
	return number
		.toString()
		.replace(/[^\d\^\+]/gm, '');
};

export const mask = () => (rawValue) => {
	if (clean(rawValue).length <= 12) {
		return ['+', /[1-9]/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
	}

	return ['+', /[1-9]/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

};

export const maskKoreanLocal = () => (rawValue) => {
    let cleaned = clean(rawValue);
    if (cleaned.startsWith('02')) {
        if (cleaned.length < 10) {
            return [/\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        }
        return [/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
    if (cleaned.length < 11) {
        return [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
    return [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
};
