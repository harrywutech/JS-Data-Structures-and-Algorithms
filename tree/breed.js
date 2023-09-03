  
  const data = {message: {  
    affenpinscher: [],  
    african: [],  
    airedale: [],  
    akita: [],  
    appenzeller: [],  
    australian: [ 'shepherd' ],  
    basenji: [],  
    beagle: [],  
    bluetick: [],  
    borzoi: [],  
    bouvier: [],  
    boxer: [],  
    brabancon: [],  
    briard: [],  
    buhund: [ 'norwegian' ],  
    bulldog: [ 'boston', 'english', 'french' ],  
    bullterrier: [ 'staffordshire' ],  
    cattledog: [ 'australian' ],  
    chihuahua: [],  
    chow: [],  
    clumber: [],  
    cockapoo: [],  
    collie: [ 'border' ],  
    coonhound: [],  
    corgi: [ 'cardigan' ],  
    cotondetulear: [],  
    dachshund: [],  
    dalmatian: [],  
    dane: [ 'great' ],  
    deerhound: [ 'scottish' ],  
    dhole: [],  
    dingo: [],  
    doberman: [],  
    elkhound: [ 'norwegian' ],  
    entlebucher: [],  
    eskimo: [],  
    finnish: [ 'lapphund' ],  
    frise: [ 'bichon' ],  
    germanshepherd: [],  
    greyhound: [ 'italian' ],  
    groenendael: [],  
    havanese: [],  
    hound: [  
      'afghan', 'basset',  
      'blood',  'english',  
      'ibizan', 'plott',  
      'walker'  
    ],  
    husky: [],  
    keeshond: [],  
    kelpie: [],  
    komondor: [],  
    kuvasz: [],  
    labradoodle: [],  
    labrador: [],  
    leonberg: [],  
    lhasa: [],  
    malamute: [],  
    malinois: [],  
    maltese: [],  
    mastiff: [ 'bull', 'english', 'tibetan' ],  
    mexicanhairless: [],  
    mix: [],  
    mountain: [ 'bernese', 'swiss' ],  
    newfoundland: [],  
    otterhound: [],  
    ovcharka: [ 'caucasian' ],  
    papillon: [],  
    pekinese: [],  
    pembroke: [],  
    pinscher: [ 'miniature' ],  
    pitbull: [],  
    pointer: [ 'german', 'germanlonghair' ],  
    pomeranian: [],  
    poodle: [ 'medium', 'miniature', 'standard', 'toy' ],  
    pug: [],  
    puggle: [],  
    pyrenees: [],  
    redbone: [],  
    retriever: [ 'chesapeake', 'curly', 'flatcoated', 'golden' ],  
    ridgeback: [ 'rhodesian' ],  
    rottweiler: [],  
    saluki: [],  
    samoyed: [],  
    schipperke: [],  
    schnauzer: [ 'giant', 'miniature' ],  
    segugio: [ 'italian' ],  
    setter: [ 'english', 'gordon', 'irish' ],  
    sharpei: [],  
    sheepdog: [ 'english', 'shetland' ],  
    shiba: [],  
    shihtzu: [],  
    spaniel: [  
      'blenheim',  
      'brittany',  
      'cocker',  
      'irish',  
      'japanese',  
      'sussex',  
      'welsh'  
    ],  
    spitz: [ 'japanese' ],  
    springer: [ 'english' ],  
    stbernard: [],  
    terrier: [  
      'american',     'australian',  
      'bedlington',   'border',  
      'cairn',        'dandie',  
      'fox',          'irish',  
      'kerryblue',    'lakeland',  
      'norfolk',      'norwich',  
      'patterdale',   'russell',  
      'scottish',     'sealyham',  
      'silky',        'tibetan',  
      'toy',          'welsh',  
      'westhighland', 'wheaten',  
      'yorkshire'  
    ],  
    tervuren: [],  
    vizsla: [],  
    waterdog: [ 'spanish' ],  
    weimaraner: [],  
    whippet: [],  
    wolfhound: [ 'irish' ]  
  },  
  status: 'success'  
} 


// function test(data) {
//     //const list = Object.entries(data);
//    if(!data || !data.message) return null
//    for (let breed in data.message) {
//       console.log(breed, "breed");
//    }
// }

// test(data);

function dfs(n, path) {
  if (Array.isArray(n) && n.length === 0) {
      return [path.join(' ')];
  }
  if (Array.isArray(n)) {
      return n.map(subBreed => [subBreed].concat(path).join(' '));
  }
  let results = [];
  Object.keys(n).forEach(k => {
      results = results.concat(dfs(n[k], path.concat(k)));
  });
  console.log(results)
  return results;
};

const flattenedBreeds = dfs(data.message, []);