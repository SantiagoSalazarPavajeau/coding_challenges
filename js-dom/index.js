
function getByClassName(root, className) {

  let result = []
  result.push(root)
	let traverse = (node) => {
        let nodeCh = node.children

        // console.log(nodeCh)

        for(let ch of nodeCh){

            // console.log(ch.className)

            if(ch.className === className){
                result.push(ch)
            }

            if(node.children[0]){ // only call recursion if
              traverse(ch)
            }
        }


    }
  // console.log(root.children[0].children[0].children[0].children)
  
  traverse(root)

  return result

}

const getIds = (elements=[]) => Array.from(elements).map(x => x.id);
// const root = document.getElementById('root');
// console.log('actual:  ', getIds(getByClassName(root, 'a')));
// console.log('expected:' , `[ 'root', 'a-2', 'a-3' ]`);




// function getByClassnameHierarchy(root, classNames) {

//   const classes = classNames.split('>');

//   const start = getByClassName(root, classes.shift()); // only children of first class

//   if (!classes.length) {
//     return start;
//   }

//   const queue = []; // only hierarchy items
//   // The purpose of level here is to indicate on which level of the tree we are traversing.
//   let level = 0;
//   let result = [];

//   // Preparing for the next class name in hierarchy.
//   while (start.length) {
//     let u = start.shift();
//     // console.log(u)
//     for (let child of u.children) {
//       // console.log([child, level])
//       queue.push([child, level]); // only children of first class
//       result.push(child);
//     }
//   }

  
//   // Finish up traversing all the class names in the hierarchy.
//   while (classes.length) {
//     result = [];
//     level++;

//     // We want to make sure that we finish processing the class names
//     // on the current level. When we finish processing the current level, we will
//     // get ready for the next level, which is breaking out of the loop.
//     while (queue.length && queue[0][1] < level) {
//       let u = queue.shift()[0];
//       // console.log(u)

//       if (u.classList.contains(classes[0])) { 
//         // only push the elements that are in this level and the elements that match the class
//         // hierarchy means
//         result.push(u);
//         console.log(u)
//         for (let child of u.children) {
//           // console.log(child)
//           queue.push([child, level]);
//         }
//       }
//     }

//     // Bring the next class names in line.
//     classes.shift();
//   }

//   return result;
// }
 
// const root2 = document.getElementById('a-1');

// // console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'a>b')));
// // console.log(`a>b expected:` , `['b-1']`, '\n');

// // order matters!:
// // console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'b>a')));
// // console.log(`b>a expected:` , `[]`, '\n');

// // // must be direct descendants:
// // console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'a>c')));
// // console.log(`a>c expected:` , `[c-3]`, '\n');

// // the number of classes in the string doesn't matter:
// console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'a>b>c')));
// console.log(`a>b>c expected:` , `['c-1', 'c-2']`, '\n');

// // console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'b>c')));
// // console.log(`b>c expected:` , `['c-1', 'c-2']`, '\n');

// // console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'c')));
// // console.log(`c expected:` , `['c-1', 'c-2', 'c-3']`, '\n');