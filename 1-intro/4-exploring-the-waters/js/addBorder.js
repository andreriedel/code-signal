let solution = pic => ['*'.repeat(pic.at(0).length + 2), ...pic.map(val => `*${val}*`), '*'.repeat(pic.at(0).length + 2)]
