import { Component } from "react";
import { fill } from "lodash";
import { add } from "./util";

const result = fill([1, 2, 3], add(10, 20));
console.log("index2", { result, Component });