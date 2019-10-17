const hbs = require('hbs');
// helpers
// funcion que se dispara cuando el temple lo requiere
hbs.registerHelper('getAnyo', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (text) => {
    let words = text.split(' ');
    
    words.forEach((cur,idx) => {
        words[idx] = cur.charAt(0).toUpperCase() + cur.slice(1).toLowerCase();
    })
    
    return words.join(' ');
})
 
