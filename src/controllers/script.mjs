import ArrayList from "../models/ArrayList.mjs";
import LinkedList from "../models/LinkedList.mjs";
import Graphic from "../models/Graphic.mjs";
import { handleAddLinkedList, handleAddArrayList, handleSearchArray, handleSearchLinkedList, handleBubbleSortArray, handleMergeSortArray, handleRadixSortArray, handleBubbleSortLinkedList, handleMergeSortLinkedList, handleRadixSortLinkedList } from './eventHandlers.mjs';

document.addEventListener("DOMContentLoaded", () => {
    let arrayList = new ArrayList();
    let linkedList = new LinkedList();
    let chart = new Graphic();

    document.getElementById("addLinkedList-btn").addEventListener("click", () => handleAddLinkedList(linkedList, chart));
    document.getElementById("addArray-btn").addEventListener("click", () => handleAddArrayList(arrayList, chart));
    document.getElementById("searchArray-btn").addEventListener("click", () => handleSearchArray(arrayList, chart));
    document.getElementById("searchLinkedList-btn").addEventListener("click", () => handleSearchLinkedList(linkedList, chart));
    document.getElementById("bubbleSort-btn").addEventListener("click", () => handleBubbleSortArray(arrayList, chart));
    document.getElementById("mergeSort-btn").addEventListener("click", () => handleMergeSortArray(arrayList, chart));
    document.getElementById("radixSort-btn").addEventListener("click", () => handleRadixSortArray(arrayList, chart));
    document.getElementById("bubbleSortLinked-btn").addEventListener("click", () => handleBubbleSortLinkedList(linkedList, chart));
    document.getElementById("mergeSortLinked-btn").addEventListener("click", () => handleMergeSortLinkedList(linkedList, chart));
    document.getElementById("radixSortLinked-btn").addEventListener("click", () => handleRadixSortLinkedList(linkedList, chart));
});
