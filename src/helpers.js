function choice(items){
  let randomIdx = Math.floor(Math.random() * items.length);
  return items[randomIdx];
}

function remove(items, item){
  let idx = items.indexOf(item);
  if(idx !== -1){
    return items.splice(idx, 1);
  }
}

export {choice, remove};