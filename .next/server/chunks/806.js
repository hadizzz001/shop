"use strict";
exports.id = 806;
exports.ids = [806];
exports.modules = {

/***/ 51806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $N: () => (/* binding */ fetchRate),
/* harmony export */   W0: () => (/* binding */ fetchTemp2),
/* harmony export */   Zu: () => (/* binding */ fetchTemp4),
/* harmony export */   rU: () => (/* binding */ fetchTemp3),
/* harmony export */   sj: () => (/* binding */ fetchTemp1),
/* harmony export */   z5: () => (/* binding */ fetchTemp)
/* harmony export */ });
/* unused harmony export fetchRate1 */
async function fetchTemp() {
    const response = await fetch("/api/posts", {
        next: {
            revalidate: 0
        }
    });
    const result = await response.json();
    return result.posts;
}
async function fetchTemp1(cat) {
    const response = await fetch(`/api/posts/${cat}`, {
        next: {
            revalidate: 0
        }
    });
    const result = await response.json();
    return result.posts;
}
async function fetchTemp2(type) {
    const response = await fetch(`/api/posts1/${type}`, {
        next: {
            revalidate: 0
        }
    });
    const result = await response.json();
    return result.posts;
}
async function fetchTemp3(name) {
    const response = await fetch(`/api/posts2/${name}`, {
        next: {
            revalidate: 0
        }
    });
    const result = await response.json();
    return result.posts;
}
async function fetchTemp4(id) {
    const response = await fetch(`/api/posts3/${id}`, {
        next: {
            revalidate: 0
        }
    });
    const result = await response.json();
    return result.posts;
}
async function fetchRate() {
    const response = await fetch("/api/rate", {
        next: {
            revalidate: 0
        }
    });
    const result = await response.json();
    return result.posts;
}
async function fetchRate1(name) {
    const response = await fetch(`/api/rate1/${name}`, {
        next: {
            revalidate: 0
        }
    });
    const result = await response.json();
    return result.posts;
}


/***/ })

};
;