//import { func1 } from "./util_esm"; //esm문법을 esm 문법으로 가져오기
//import { func1 } from "./util_commonjs"; //commonJS 문법을 esm 문법으로 가져오기
import("./util_esm").then((util) => util.func1());
func1();
