import { hello } from "./module.js";
import { User } from "./module.js";
import functionB from "./module.js";
// 同じexportはまとめられる
// import functionB, { hello, User } from "./module.js";

hello();
const user = new User("Tom");
user.hello();
functionB();