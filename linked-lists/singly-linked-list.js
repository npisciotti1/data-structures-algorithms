'use strict';

function Node(val) {
  this.val = val;
  this.next = null;
};

function SinglyLinkedList() {
  this.head = null;
};

SinglyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);

  if (!this.head) {
    this.head = node;
    return node.val;
  }

  node.next = this.head;
  this.head = node;
  return node.val;
};

SinglyLinkedList.prototype.append = function(val) {
  let node = new Node(val);
  let lastNode = null;

  if(!this.head) {
    this.head = node;
    return node.val;
  }

  _setLastNode(this.head);
  lastNode.next = node;
  return node.val;

  function _setLastNode(node) {
    if (!node) return;

    lastNode = node;
    return _setLastNode(node.next);
  }
};
var sll = new SinglyLinkedList();
sll.append(10);
sll.append(20);
sll.append(30);
