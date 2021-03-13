class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	//Insert first node
	insertFirst(data) {
		this.head = new Node(data, this.head);
		this.size++;
	}
	//Insert last node
	insertLast(data) {
		let node = new Node(data);
		let current;

		if (!this.head) {
			this.head = node;
		} else {
			current = this.head;

			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}

	//Insert at index
	insertAt(data, index) {
		//if index is out of range, return nothing
		if (index > 0 && index > this.size) {
			return;
		}
		//If first index
		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const node = new Node(data);
		let current, previous;

		//Set current to first
		current = this.head;
		let count = 0;

		while (count < index) {
			previous = current; //Node before index
			count++;
			current = current.next; // Node after index
		}

		node.next = current;
		previous.next = node;

		this.size++;
	}

	//Get at index

	getAt(index) {
		let current = this.head;
		let count = 0;

		while (current) {
			if (count === index) {
				console.log(current.data);
			}
			count++;
			current = current.next;
		}
		return;
	}

	//Remove at index

	removeAtIndex(index) {
		if (index > 0 && index > this.size) {
			return;
		}
		let current = this.head;
		let previous;
		let count = 0;

		if (index === 0) {
			this.head = current.next;
		} else {
			while (count < index) {
				count++;
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}
		this.size--;
	}

	//Clear list
	clearList() {
		this.head = null;
		this.size = 0;
	}

	//Print list data
	printListData() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}

	removeFirst() {
		let count = 0;
		let current = this.head;
		while (count < this.size) {
			count++;
			this.head = current.next;
		}
		this.size--;
	}
	removeLast() {
		let current = this.head;
		let previousToCurrent = null;

		while (current.next != null) {
			previousToCurrent = current;

			current = current.next;
		}
		previousToCurrent.next = null;

		this.size--;
	}
	//remove last
	//get last
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertFirst(500);

// ll.insertAt(500, 20);

// ll.getAt(10);

// ll.removeAtIndex(2);
// ll.clearList();

// ll.removeFirst();
ll.removeLast();

ll.printListData();
// console.log(ll.size);
