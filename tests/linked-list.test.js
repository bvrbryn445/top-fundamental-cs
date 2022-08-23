import LinkedList from '../js/linked-list.js';

const shortSimpleList = {
	value: 33,
	next: null
}

const longSimpleList = {
	value: 11,
	next: {
		value: 22,
		next: {
			value: 33,
			next: {
				value: 44,
				next: {
					value: 55,
					next: {
						value: 66,
						next: {
							value: 73,
							next: null
						}
					}
				}
			}
		}
	}
}
// prevent mutating the original object
const copyObj = (obj) => JSON.parse(JSON.stringify(obj));

it('should add item at the start of the list', () => {
	const list = new LinkedList(copyObj(shortSimpleList));
	list.prepend(14);
	expect(list).toMatchObject({
		list: {
			value: 14,
			next: shortSimpleList
		}
	});
});

it('should add item at the end of the list', () => {
	const list = new LinkedList(copyObj(shortSimpleList));
	list.append(14);
	expect(list).toMatchObject({
		list: {
			...shortSimpleList,
			next: { value: 14, next: null }
		}
	});
});

it('should get the total number of nodes', () => {
	const list = new LinkedList(copyObj(longSimpleList));
	expect(list.size()).toBe(7);
});

it('should get the first node of the list', () => {
	const list = new LinkedList(copyObj(longSimpleList));
	expect(list.head()).toMatchObject({
		value: 11,
		next: {
			value: 22,
			next: {
				value: 33,
				next: {
					value: 44,
					next: {
						value: 55,
						next: {
							value: 66,
							next: {
								value: 73,
								next: null
							}
						}
					}
				}
			}
		}
	});
});

it('should get the last node of the list', () => {
	const list = new LinkedList(copyObj(longSimpleList));
	expect(list.tail()).toMatchObject({
		value: 73,
		next: null
	});
});

it('should get the node by index', () => {
	const list = new LinkedList(copyObj(longSimpleList));
	const nodeByIndex = list.at(3);
	expect(nodeByIndex).toMatchObject({
		value: 44,
		next: {
			value: 55,
			next: {
				value: 66,
				next: {
					value: 73,
					next: null
				}
			}
		}
	});
});

it('should remove the last node from the list', () => {
	const list = new LinkedList(copyObj(longSimpleList));
	list.pop();
	expect(list.tail()).toMatchObject({
		value: 66,
		next: null
	});
});


describe('confirm whether the given value exists on the list', () => {
	const list = new LinkedList(copyObj(longSimpleList));
	it('should return true if it exists', () => {
		const nodeByValue = list.contains(55);
		expect(nodeByValue).toBeTruthy();
	});

	it('should return false if it doesn\'t exist', () => {
		const nodeByValue = list.contains(96);
		expect(nodeByValue).toBeFalsy();
	});
})

describe('find the index of the node that contains the given value', () => {
	const list = new LinkedList(copyObj(longSimpleList));
	it('should return the index if the value exists', () => {
		const indexByValue = list.find(73);
		expect(indexByValue).toEqual(6);
	});
	it('should return a null if the value do not exist', () => {
		const indexByValue = list.find(72);
		expect(indexByValue).toBe(null);
	});
});

it('should get the stringified format of the entire list', () => {
	const list = new LinkedList(copyObj(longSimpleList));
	const stringifiedList = list.toString();
	expect(stringifiedList)
		.toBe('( 11 ) -> ( 22 ) -> ( 33 ) -> ( 44 ) -> ( 55 ) -> ( 66 ) -> ( 73 ) -> null')
})

it('should insert node with the provided value by index', () => {
	const list = new LinkedList(copyObj(longSimpleList));
	list.insertAt(41, 2);
	list.insertAt(51, 2);
	list.insertAt(4, 0);
	expect(list.head()).toMatchObject({
		value: 4,
		next: {
			value: 11,
			next: {
				value: 22,
				next: {
					value: 51,
					next: {
						value: 41,
						next: {
							value: 33,
							next: {
								value: 44,
								next: {
									value: 55,
									next: {
										value: 66,
										next: {
											value: 73,
											next: null
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
});

it('should remove node with the provided index', () => {
	const list = new LinkedList(copyObj(longSimpleList));
	list.removeAt(3);
	list.removeAt(0);
	list.removeAt(4);
	expect(list.head()).toMatchObject({
		value: 22,
		next: {
			value: 33,
			next: {
				value: 55,
				next: {
					value: 66,
					next: null,
				}
			}
		}
	});
});