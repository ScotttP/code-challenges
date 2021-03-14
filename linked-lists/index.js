class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	//Insert first node
	insertFirst(data) {
		this.head = new Node(data, this.head);
		this.length++;
	}

	//Insert last node
	insertLast(data) {
		let count = 0;
		let current = this.head;

		let newNode = new Node(data);

		if (!this.head) {
			this.head = newNode;
		}
		while (count < this.length) {
			if (current.next === null) {
				current.next = newNode;
			}
			current = current.next;
			count++;
		}
		this.length++;
	}

	//Insert at index

	insertAtIndex(data, index) {
		let count = 0;
		let current = this.head;
		let previous;
		let newNode = new Node(data);

		if (index > 0 && index > this.length) {
			return;
		}
		if (index === 0) {
			this.head = newNode;
		}

		while (count < index) {
			previous = current;
			count++;
			current = current.next;
		}

		previous.next = newNode;
		newNode.next = current;
		this.length++;
	}
	//Get at index

	getAtIndex(index) {
		let count = 0;
		let current = this.head;
		if (index > 0 && index > this.length) {
			console.log("outside of range");
		}
		while (count < this.length) {
			if (count === index) {
				console.log(current.data);
			} else {
				current = current.next;
			}
			count++;
		}
	}

	//Get last

	getAtIndex(index) {
		let count = 0;
		let current = this.head;

		while (count < this.length) {
			if (count === index) {
				console.log(current.data);
			} else {
				current = current.next;
			}
			count++;
		}
	}

	//Remove at index

	removeAtIndex(index) {
		let count = 0;
		let current = this.head;
		let previous;

		if (index > 0 && index >= this.length) {
			return;
		}

		if (index === 0) {
			this.head = current.next;
		} else {
			while (count < index) {
				previous = current;
				current = current.next;
				count++;
			}
			previous.next = current.next;
		}
		this.length--;
	}

	//Clear list

	clearList() {
		this.head = null;
		this.length = 0;
	}

	// Print list data
	printListData() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}

	//Remove First

	removeFirst() {
		let current = this.head;
		let count = 0;
		if (this.length === 1) {
			this.head = null;
		}
		while (count < this.length) {
			this.head = current.next;
			count++;
		}
		this.length--;
	}

	//Remove Last

	removeLast() {
		let current = this.head;
		previousToCurrent = null;
		while (current.next !== null) {
			previousToCurrent = current;
			current.next = current;
		}
		previousToCurrent.next = null;
		this.length--;
	}
	reverseList() {
		let current = this.head;
		let previousToCurrent = null;
		let count = 0;
		while (count < this.length) {
			count++;
			//in progress
		}
	}
}

const ll = new LinkedList();

ll.insertFirst(400);
ll.insertFirst(300);
ll.insertFirst(200);
ll.insertFirst(100);

// ll.insertFirst(300);
// ll.insertFirst(400);
// ll.insertFirst(500);

// ll.insertLast(001);

// ll.insertAtIndex(500, 1);

// ll.getAtIndex(0);

// ll.removeAtIndex(3);
// ll.clearList();

// ll.removeFirst();
// ll.removeLast();

// ll.getLast();
ll.reverseList();
ll.printListData();
// console.log(ll.size);
