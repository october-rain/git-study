// function change(literals, ...substitutions) {
//     let res = ""
//     for (let i = 0; i < substitutions.length; i++) {
//         res += literals[i]
//         res += `-${i}-`
//         res += substitutions[i]
//     }
//     res += literals[literals.length - 1]
//     console.log(literals)
//     console.log(substitutions)
//     return res
// }
// let x = 123
// let y = 456
// let z = 789
// let a = change`123\n${x}456${y}789${z}`
// console.log(a)

// let values = [12, 23, 34, 45, 56, 67, 78, 89]
// let sum = Math.max.apply(Math, values)
// console.log(sum)

// function Person(name) {
//     console.log(new.target)
//     if (this instanceof Person) {
//         this.name = name
//     } else {
//         throw new Error("必须使用new")
//     }
// }
// var person = new Person("dyx")
// // var person2 = Person("dyx")
// Person.call(person, "123")
// // console.log(person)

// if (1) {
//     function a() {
//         console.log(123)
//     }
// }
// a()

// let arrow = (a, b) => ((b = b + a), (b = b + a), b - a)
// console.log(arrow(1, 2))

// function Super() {
//     this.property = 1
// }
// Super.prototype.getSuperProperty = function () {
//     return this.property
// }
// function Sub() {
//     this.subProperty = 2
// }

// Sub.prototype = new Super()

// Sub.prototype.getSubProperty = function () {
//     return this.subProperty
// }

// let instance = new Sub()
// console.log(Super.prototype)
// console.log(Sub.prototype)
// console.log(Sub.prototype.constructor === Super.prototype.constructor)
// console.log(instance)

// function foo() {
//     const bar = 1
//     return function () {
//         console.log(bar)
//     }
// }
// const fn = foo()
// const bar = 2
// fn() // 1

// function foo(fn) {
//     const bar = 2
//     fn()
// }
// const bar = 1
// function fn() {
//     console.log(bar)
// }
// foo(fn) // 1

// Function.prototype.newBind = function () {
//     let args = Array.prototype.slice.call(arguments)
//     console.log(args)
//     const t = args.shift()
//     const self = this
//     return function () {
//         return self.apply(t, args)
//     }
// }
// function foo(a, b, c) {
//     console.log("this", this)
//     console.log(a, b, c)
//     console.log("foo")
// }
// const f2 = foo.newBind({ x: 100 }, 10, 100, 1000)
// f2()

// Function.prototype.newBind = function () {
//     //* 将类数组变成数组，类似的还有[].slice.apply(arguments), [...arguments], Array.from(arguments)
//     //! Array.prototype.slice.apply(arguments) 的意思是 https://www.jianshu.com/p/c5df0156b229
//     const args = Array.prototype.slice.apply(arguments)
//     //* 固定arguments中的第一个参数,即newBind中传入的新对象{a: 100}
//     const t = args.shift()
//     //* 固定foo.newBind()中的 foo(),即调用newBind的函数
//     const self = this
//     //* 返回一个函数
//     return function () {
//         return self.apply(t, args)
//     }
// }
// function foo(a, b, c) {
//     console.log("foo")
//     console.log(a, b, c)
//     console.log("this", this)
// }
// let foo2 = foo.newBind({ a: 100 }, 10, 200, 3000)
// foo2()

// function foo(a, b, c) {
//     console.log("foo")
//     console.log(a, b, c)
//     console.log("this", this)
// }
// foo.call({ a: 1 }, 1, 2, 3)

// Function.prototype.newCall = function (...args) {
//     if (typeof this !== "function") {
//         throw new TypeError("Error")
//     }
//     // 执行上下文（传入的this）
//     const context = args.shift() || window
//     // 指向原函数
//     // 改变this指向为context // ! const self = this 这么写无法改变this指向
//     context.self = this
//     // 执行原函数
//     context.self(...args)
//     delete context.self
// }
// foo.newCall({ a: 1 }, 1, 2, 3)

// function foo(a, b, c) {
//     console.log("foo")
//     console.log(a, b, c)
//     console.log("this", this)
// }
// foo.apply({ a: 1 }, [1, 2, 3])

// Function.prototype.newApply = function (context, arr) {
//     if (typeof this !== "function") {
//         throw new TypeError("Error")
//     }
//     // 保存新的this指向
//     context = context || window
//     // 改变原函数（this）的this指向为context
//     context.self = this
//     // 执行原函数
//     context.self(...arr)
//     // 删除添加到新this的方法
//     delete context.self
// }
// foo.newApply({ a: 2 }, [4, 5, 6])

// function createCache() {
//     const data = {}
//     return {
//         set: function (key, val) {
//             data[key] = val
//         },
//         get: function (key) {
//             return data[key]
//         },
//     }
// }
// const c = createCache()
// c.set("a", 100)
// console.log(c.get("a"))

// let i, a
// for (i = 0; i < 10; i++) {
//     a = document.createElement("a")
//     b = document.createElement("br")
//     a.innerHTML = i
//     a.addEventListener("click", function (e) {
//         e.preventDefault()
//         alert(i)
//     })
//     document.body.appendChild(a)
//     document.body.appendChild(b)
// }

// console.log(1)
// setInterval(() => {
//     console.log(2)
// }, 1000)
// console.log(3)

// function loadImg(src) {
//     return new Promise((resolve, reject) => {
//         const img = document.createElement("img")
//         img.src = src
//         img.onload = () => {
//             resolve(img)
//         }
//         img.onerror = () => {
//             const err = new Error(`图片加载失败 ${src}`)
//             reject(err)
//         }
//     })
// }
// const url1 =
//     "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
// const url2 = "https://www.baidu.com/img/flexible/logo/pc/result.png"

// loadImg(url1)
//     .then((img1) => {
//         console.log(img1.width)
//         return img1
//     })
//     .then((img1) => {
//         console.log(img1.height)
//         return loadImg(url2)
//     })
//     .then((img2) => {
//         console.log(img2.width)
//         return img2
//     })
//     .then((img2) => {
//         console.log(img2.height)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// let p1 = Promise.resolve().then(() => {
//     // return 100
//     console.log(p1)
//     console.log(100)
// })
// console.log(p1)

// let p2 = Promise.resolve()
// p2 = p2.then(() => {
//     // return 100
//     console.log(p2)
//     console.log(100)
// })
// console.log(p2)

// let p = Promise.reject()
// p = p.catch(() => {
//     // console.log(1)  // fulfilled
//     // throw new Error("123")  // rejected
// })
// console.log(p)

// const img1 = loadImg(url1)
// console.log(img1, img1.width, img1.height)

// !(async function () {
//     const img1 = await loadImg(url1)
//     console.log(img1, img1.width, img1.height)

//     const img2 = await loadImg(url2)
//     console.log(img2, img2.width, img2.height)
// })()

// debugger
// async function foo() {
//     // return 100 // 相当于 return Promise.resolve(100)
//     return Promise.resolve(200)
// }
// ;(async function () {
//     const p1 = Promise.resolve(300)
//     const data1 = await p1
//     console.log("data1", data1) // data1 300
//     const data2 = await 400
//     console.log("data2", data2) // data2 400
//     const data3 = await foo()
//     console.log("data3", data3) // data3 200
// })()
// const res = foo()
// console.log(res)
// res.then((data) => {
//     console.log("data", data) // data 200 // ! 在data1 data2 之后显示, 在data3 之前显示
// })
// ;(async function () {
//     const p = Promise.reject("err")
//     try {
//         const res = await p
//     } catch (err) {
//         console.error(err)
//     }
// })()

// async function async1() {
//     console.log("2 async1 start")
//     await async2() // 先执行async2，在执行await操作
//     // await 的后面，都可以看作 callback里的内容，即异步
//     // 类似 event loop 的时候 setTimeout函数
//     // 类似 setTimeout(function () {console.log("async1 end")})
//     // 但此处不一定是setTimeout，有可能是Promise.resolve().then(()=>{console.log("async1 end")})  涉及微任务，宏任务
//     console.log("5 async1 end")
// }
// async function async2() {
//     console.log("3 async2")
// }
// console.log("1 script start")
// async1()
// console.log("4 script end")

// function multiply(num) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(num * num)
//         }, 1000)
//     })
// }
// const nums = [1, 2, 3]
// // 同步
// nums.forEach(async (i) => {
//     const res = await multiply(i)
//     console.log(res)
// })
// // 异步
// ;(async function () {
//     for (i of nums) {
//         const res = await multiply(i)
//         console.log(res)
//     }
// })()

// const div1 = document.getElementById("div1")
// const div2List = document.getElementsByTagName("div")
// const div3List = document.getElementsByClassName("div3")
// const div4List = document.querySelectorAll("p")

// var name = "window"
// var obj = {
//     name: "obj",
//     getName1: function () {
//         console.log(name)
//         console.log(this.name)
//         return function () {
//             console.log(name)
//             console.log(this.name)
//         }
//     },
//     getName2: function () {},
// }

// let res = obj.getName1()()

// "use strict"

// function test() {
//     console.log(this)
// }
// test()

// async function foo() {
//     return Promise.resolve(300)
//     // return 300 // ❓问题：上下两种写法执行结果不一致的原因是什么呢
// }
// // debugger
// ;(async function () {
//     console.log("start") // 1. 立即执行函数 会先执行这一步
//     const p1 = Promise.resolve(100)
//     const data1 = await p1 // 2. 遇到 await 后面代码放入微任务队列 第一位
//     console.log("data1", data1) // 5. 同步代码执行完成 进入微任务队列 打印 data1 100
//     const data2 = await 200 // 5. 执行 Promise.resolve(200) 之后代码放入微任务队列 第三位
//     console.log("data2", data2) // 7. 进入微任务队列 打印 data2 200
//     const data3 = await foo() // 8. 执行foo() 之后代码放入微任务队列第四位
//     console.log("data3", data3) // 9. 打印
// })()
// const res = foo()
// console.log(res) // 3. 继续执行同步代码 执行此句 打印一个 promise
// res.then((data) => {
//     // 4. 我认为这是promise的状态已经是resolve，所以应该放入微任务队列的第二个位置 ❓问题：但实际上并不是这样，为什么？
//     // ⚠️ 这个要等res 完全resolved之后才会执行 ❓问题：到底什么时候会被resolved 呢？
//     console.log("data", data) // 6.执行微任务队列第二位 打印 ❓问题：为什么 data 200 在data1 data2 之后打印, 在data3 之前打印呢？
// })

// function ajax(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open("GET", url, true)
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText))
//                 } else if (xhr.status === 404) {
//                     reject(new Error("404"))
//                 }
//             }
//         }
//         xhr.send(null)
//     })
// }
// const url = "/data/test.json"
// ajax(url)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

// 防抖
// const input = document.getElementById("input1")
// let timer = null
// input.addEventListener("keyup", function () {
//     if (timer) {
//         clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//         console.log(input.value)
//         timer = null
//     }, 500)
// })

function debounce(fn, delay = 500) {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

// const input = document.getElementById("input")
// input.addEventListener(
//     "keyup",
//     debounce(function () {
//         console.log(input.value)
//     }, 300)
// )

function throttle(fn, delay = 100) {
    let timer = null
    return function () {
        if (timer) return
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}
// const div = document.getElementById("div")
// div.addEventListener(
//     "drag",
//     throttle(function (e) {
//         console.log(e.offsetX, e.offsetY)
//     }, 200)
// )

function isEqual(obj1, obj2) {
    // 不是引用类型
    if (typeof obj !== "object" || obj === null) return obj1 === obj2
    // 两个地址相同
    if (obj1 === obj2) return true
    // 判断长度是否一致
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)
    if (obj1Keys.length !== obj2Keys.length) return false
    // 递归判断
    for (let key in obj1) {
        const res = isEqual(obj1[key], obj2[key])
        if (!res) return false
    }

    return true
}

Function.prototype.newCall = function (...args) {
    if (typeof this !== "function") throw new TypeError("Error")
    const ctx = args.shift() || window
    ctx.fn = this
    const res = ctx.fn(...args)
    delete ctx.fn
    return res
}

Function.prototype.newApply = function (...args) {
    if (typeof this !== "function") throw new TypeError("Error")
    const ctx = args.shift()
    ctx.fn = this
    const res = ctx.fn(...args[0])
    delete ctx.fn
    return res
}

Function.prototype.newBind = function (...args) {
    args = Array.prototype.slice.apply(args)
    const ctx = args.shift()
    ctx.fn = this
    // const res = ctx.fn(...args)
    // delete ctx.fn
    return function () {
        // return res
        return ctx.fn(...args)
    }
}

function foo(a, b, c) {
    console.log("foo")
    console.log(a, b, c)
    console.log("this", this)
}

// foo.newCall({ a: 1 }, 1, 2, 3)
// foo.newApply({ b: 2 }, [4, 5, 6])
// let foo2 = foo.newBind({ c: 3 }, 10, 200, 3000)
// foo2()

// JSON.parse(JSON.stringify(obj))

function deepClone(obj = {}) {
    if (typeof obj !== "object" || obj === null) return obj
    let newObj
    if (obj instanceof Array) {
        newObj = []
    } else if (obj instanceof Object) {
        newObj = {}
    }
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key])
        }
    }
    return newObj
}

// 数组去重
function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

// 重复的直接不要了
function unique2(arr) {
    return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))
}

// 美团
// let str = "aabc"
// let str = read_line()
// let len = str.length
// let sum = 0
// function dfs(str, subStr, index) {
//     for (let i = index; i < len; i++) {
//         let temp = subStr
//         temp += str[i]
//         let set = new Set(temp.split(""))
//         if (set.size == temp.length) {
//             //console.log(temp)
//             sum++
//         }
//         dfs(str, temp, i + 1)
//     }
// }
// dfs(str, "", 0)
// console.log(sum + 1)

// function cal(num) {
//     let res = [1, num]
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) res.push(i)
//     }
//     res.sort((a, b) => a - b)
//     let len = res.length
//     let str = ""
//     for (let i = 0; i < len; i++) {
//         str += res[i]
//     }
//     // console.log(str)
//     return str
// }
// cal(10)

// let res = ''
// res.includes

let arr = [2, 4, 6, 1, 3, 7, 5]
// * 堆排序
// function heapSort(arr) {
//     console.log(arr)
//     creatHeap(arr)
//     console.log(arr)
//     // 交换第一个和最后一个元素，然后重新调整大顶堆
//     for (let i = arr.length - 1; i > 0; i--) {
//         ;[arr[i], arr[0]] = [arr[0], arr[i]]
//         downHeap(arr, 0, i)
//     }
//     return arr
// }
// // 构建大顶堆，从第一个非叶子节点开始，进行下沉操作
// function creatHeap(arr) {
//     const len = arr.length
//     const start = parseInt(len / 2) - 1
//     for (let i = start; i >= 0; i--) {
//         downHeap(arr, i, len)
//     }
// }
// // 将第target个元素进行下沉，孩子节点有比他大的就下沉
// function downHeap(arr, target, len) {
//     let i = target
//     let j = 2 * i + 1
//     while (j < len) {
//         if (j + 1 < len && arr[j + 1] > arr[j]) j++
//         if (arr[j] > arr[i]) {
//             ;[arr[j], arr[i]] = [arr[i], arr[j]]
//             i = j
//             j = j * 2 + 1
//         } else {
//             break
//         }
//     }
// }

function heapSort(arr) {
    createHeap(arr)
    for (let i = arr.length - 1; i >= 0; i--) {
        ;[arr[i], arr[0]] = [arr[0], arr[i]]
        downHeap(arr, 0, i)
    }
    return arr
}
function createHeap(arr) {
    const len = arr.length
    const start = Math.floor((len - 1) / 2)
    for (let i = start; i >= 0; i--) {
        downHeap(arr, i, len)
    }
}
function downHeap(arr, index, len) {
    let i = index,
        j = i * 2 + 1
    while (j < len) {
        if (j + 1 < len && arr[j + 1] > arr[j]) j++
        if (arr[i] < arr[j]) {
            ;[arr[i], arr[j]] = [arr[j], arr[i]]
            i = j
            j = i * 2 + 1
        } else {
            break
        }
    }
}
// console.log(arr)
// console.log(heapSort(arr))

// * 归并排序
function mergeSort(arr) {
    const len = arr.length
    if (len < 2) return arr
    const mid = Math.floor(len / 2)
    const arrLeft = mergeSort(arr.slice(0, mid))
    const arrRight = mergeSort(arr.slice(mid, len))
    return mergeArr(arrLeft, arrRight)
}
function mergeArr(a, b) {
    const len1 = a.length,
        len2 = b.length
    let i = len1 - 1,
        j = len2 - 1,
        last = len1 + len2 - 1
    while (i >= 0 && j >= 0) {
        if (a[i] < b[j]) {
            a[last] = b[j]
            j--
        } else {
            a[last] = a[i]
            i--
        }
        last--
    }
    while (j >= 0) {
        a[j] = b[j]
        j--
    }
    return a
}
// console.log(arr)
// console.log(mergeSort(arr))

// * 快速排序
function quickSort(arr, left = 0, right = arr.length - 1) {
    const len = arr.length
    if (len < 2) return arr
    const mid = partition(arr, left, right)
    if (left < mid - 1) quickSort(arr, left, mid - 1)
    if (mid < right) quickSort(arr, mid, right)
    return arr
}
function partition(arr, low, high) {
    const mid = Math.floor((low + high) / 2)
    const pivotValue = arr[mid]
    while (low <= high) {
        while (arr[low] < pivotValue) low++
        while (arr[high] > pivotValue) high--
        if (low <= high) {
            ;[arr[low], arr[high]] = [arr[high], arr[low]]
            low++
            high--
        }
    }
    return low
}
// console.log(arr)
// console.log(quickSort(arr))

function bubbleSort(arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let flag = true
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                flag = false
            }
        }
        if (flag) return arr
    }
    return arr
}
// console.log(arr)
// console.log(bubbleSort(arr))

function selectSort(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let min = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) min = j
        }
        ;[arr[min], arr[i]] = [arr[i], arr[min]]
    }
    return arr
}
// console.log(arr)
// console.log(selectSort(arr))

function insertSort(arr) {
    const len = arr.length
    for (let i = 1; i < len; i++) {
        const temp = arr[i]
        let j = i
        while (j && arr[j - 1] > temp) {
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = temp
    }
    return arr
}
// console.log(arr)
// console.log(insertSort(arr))

// let a = 123
// function abc() {
//     console.log(a)
// }
// abc()
let arrP = []
arrP = new Proxy(arrP, {
    set(target, prop, val) {
        if (typeof val === "number") {
            target[prop] = val
            return true
        } else {
            return false
        }
    },
})
// arrP.push(1)
// // arrP.push('adsf') // 报错
// console.log(arrP[0]) // 1
// console.log(arrP) // Proxy {0: 1}
// console.log(arrP.length) // 1

// let p = new Promise((resolve, reject) => {
//     if (1) {
//         console.log(1)
//         resolve("5 成功") // 传入的参数会再then中作为res使用
//         console.log(2)
//     } else {
//         reject("6 失败")
//     }
//     console.log(3)
// }).then(
//     (res) => {
//         // res 是 resolve(参数) 传入的参数
//         console.log(res)
//     },
//     (err) => {
//         // 这里可以使用 .catch(res => {})
//         console.log(err)
//     }
// )
// console.log(4)

const myNew = function (...args) {
    let constructor = args.shift()
    let obj = Object.create(constructor.prototype)
    let res = constructor.apply(obj, args)
    return res instanceof Object ? res : obj
}

function myInstanceof(a, b) {
    let res = typeof a
    if ((res !== "object" && res !== "function") || a === null) return false
    let proto = Object.getPrototypeOf(a)
    while (true) {
        if (proto === null) return false
        if (proto === b.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}

function debounce(fn, delay) {
    let timer = null
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}

function Parent(name) {
    this.name = name
}
function Child(name, gender) {
    Parent.call(this, name)
    this.gender = gender
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

let resF = []
function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) flatten(arr[i])
        else resF.push(arr[i])
    }
}

function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

function unique2(arr) {
    return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))
}

// Array.from(arguments)
// Array.prototype.slice.call(arguments)
// Array.prototype.concat.apply([], arguments)
// ;[...arguments]

function myIs(a, b) {
    if (a === b) {
        return 1 / a === 1 / b
    } else {
        return a !== a && b !== b
    }
}

function myCreate(obj) {
    function fn() {}
    fn.prototype = obj
    return new fn()
}

function add(...args) {
    return args.reduce((pre, cur) => pre + cur, 0)
}
function curring(fn) {
    let args = []
    return function _c(...newArgs) {
        if (newArgs.length) {
            args = [...args, newArgs]
            return _c
        } else {
            return fn.apply(this, args)
        }
    }
}

function deepClone(obj) {
    if (typeof obj !== "object" || obj === null) return obj
    let res
    if (obj instanceof Array) {
        res = []
    } else {
        res = {}
    }
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = deepClone(res[key])
        }
    }
    return res
}

// function Father(name) {
//     this.name = name
// }

// Father.prototype.sayName = function () {
//     console.log("my name is " + this.name)
// }

// // 继承
// function Child(age, name) {
//     Father.call(this, name)
//     this.age = age
// }

// Child.prototype = Object.create(Father.prototype)
// Child.prototype.constructor = Child

// let child = new Child(21, "dyx")
// console.log(child)

var list = [
    ["热", "冷", "冰"],
    ["大", "中", "小"],
    ["重辣", "微辣"],
    ["重麻", "微麻"],
]

function fn(list) {
    const len = list.length
    const res = []
    function dfs(arr, index) {
        if (arr.length == len) {
            res.push(arr.slice())
            return
        }
        let map = list[index]
        if (map) {
            for (let val of map) {
                arr.push(val)
                dfs(arr, index + 1)
                arr.pop()
            }
        }
    }
    dfs([], 0)

    return res
}

console.log(fn(list))
