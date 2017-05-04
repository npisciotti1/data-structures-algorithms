'use strict';

function Node(val) {
  this.next = null,
  this.value = val
};

function SinglyLinkedList() {
  this.head = null
};

SinglyLinkedList.prototype.append = function(val) {
  let node = new Node(val);
  let this.last = null;
  
  if(!this.head) {
    this.head = node;
    return;
  }
  this.last = checkIfEnd(this.head);
  this.last.next = node;

  function checkIfEnd(_node) {
    if(!_node) return _node;

    checkIfEnd(_node.next);
  }
}
