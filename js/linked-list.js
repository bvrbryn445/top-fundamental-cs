export class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

export default class LinkedList {
	constructor(list = null) {
		this.list = list;
	}

	// add a new node at the start of the list
	prepend(value) {
		this.list = new Node(value, this.list);
	}

	// add a new node at the end of the list
	append(value) {
		if (this.head() == null) this.prepend(value);
		else {
			let currentNode = this.head();
			while (currentNode.next !== null) {
				currentNode = currentNode.next;
			}
			currentNode.next = new Node(value, null);
		}
	}

	// get the number of nodes
	size() {
		let currentNode = this.head();
		let numOfNodes = 0;
		while (currentNode !== null) {
			currentNode = currentNode.next;
			numOfNodes += 1;
		};
		return numOfNodes;
	}

	// get the first node of the list
	head() {
		return this.list;
	}

	// get the last node of the list
	tail() {
		if (this.head() === null) return;
		let currentNode = this.head();
		while (currentNode.next !== null) {
			currentNode = currentNode.next;
		};
		return currentNode;
	}

	// get node by given index
	at(index) {
		if (this.head() == null) return null;
		let count = 0;
		let selectedNode = this.head();
		while (count < index) {
			selectedNode = selectedNode.next;
			count++;
		}
		return selectedNode;
	}

	//remove the last node from the list
	pop() {
		if (this.head() === null) return;
		let prevNode = null;
		let currentNode = this.head();
		while (currentNode.next !== null) {
			prevNode = currentNode;
			currentNode = currentNode.next;
		};
		prevNode.next = null;
	}

	// check whether the given value exists on the list
	contains(value) {
		let currentNode = this.head();
		if (currentNode === null) return !!currentNode;

		while (currentNode.value !== value && currentNode.next !== null) {
			currentNode = currentNode.next;
		};

		return currentNode.value === value;
	}

	// check whether the given value exists
	// then return index; otherwise, return null
	find(value) {
		let currentNode = this.head();
		if (currentNode === null) return !!this.head();
		let nodeIndex = 0;
		while (currentNode.value !== value && currentNode.next !== null) {
			currentNode = currentNode.next;
			currentNode.next === null && currentNode.value !== value
				? nodeIndex = null
				: nodeIndex++;
		};
		return nodeIndex;
	}

	// stringify the list with the following format:
	// ( value ) -> ( value ) -> null
	toString() {
		let currentNode = this.head();
		let stringifiedList = '';
		while (currentNode !== null) {
			stringifiedList += `( ${currentNode.value} ) -> `;
			currentNode = currentNode.next;
		}
		return `${stringifiedList}${null}`
	}

	insertAt(value, index) {
		let currentNode = this.head();
		if (currentNode === null) return;
		let count = 0;

		if (!index) {
			this.list = new Node(value, currentNode);
			return;
		}

		while (currentNode !== null && count < index - 1) {
			count++;
			currentNode = currentNode.next;
		};

		currentNode.next = new Node(value, currentNode.next);
	}

	removeAt(index) {
		if (this.head() === null) return;
		if (index > this.size() - 1) return;
		let prevNode = null;
		let currentNode = this.head();
		let count = 0;

		while (currentNode !== null && count < index) {
			count++;
			prevNode = currentNode;
			currentNode = currentNode.next;
		};
		
		if(count === 0) {
			this.list = currentNode.next;
			return;
		}
		
		prevNode.next = currentNode.next;
	}
}