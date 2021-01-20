module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  item.enhancement = (item.enhancement < 20) ? item.enhancement + 1 : 20
  return { ...item }
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability -= 5
  }

  if (item.enhancement >= 15) {
    item.durability -= 10
  }

  if (item.enhancement > 16) {
    item.durability -= 1
  }

  return { ...item };
}

function repair(item) {
  item.durability = 100
  return { ...item };
}

function get(item) {
  if (item.enhancement === 0) return { ...item }
  if ( item.enhancement > 0) {
    item.name = `[+${item.enhancement}] ${item.name}`
    return { ...item }
  }
}
