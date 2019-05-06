export class DropDownHolder {

	static dropDown;

	static set(dropDown) {

		DropDownHolder.dropDown = dropDown;
	}

	static get() {

		return DropDownHolder.dropDown;
	}
}